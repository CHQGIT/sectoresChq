import getLayer from './layers-service';
import QueryTask from 'esri/tasks/QueryTask';
import Query from 'esri/tasks/query';
import mapa from './map_service';
import Graphic from 'esri/graphic';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import makeSymbol from './makeSymbol';

var gLayerFind = new GraphicsLayer();

function searchInterruptions(nis,token){

  var map = mapa.getMap();
  gLayerFind.clear();
  let pointSymbol = makeSymbol.makePoint();

  var promise = new Promise((resolve,reject)=>{

    var qtask = new QueryTask(getLayer.read_nisAfectados(token));
    var q = new Query();
    q.returnGeometry = true;
    q.outFields = ["*"];
    q.where = `ARCGIS.dbo.CLIENTES_DATA_DATOS_006.nis=${nis}`;
    qtask.execute(q,(featureSet)=>{
        console.log(featureSet, "obtenidos");
      if(featureSet.features.length>0) {

        gLayerFind.add(new Graphic(featureSet.features[0].geometry,pointSymbol));
        map.addLayer(gLayerFind,1);
        map.centerAndZoom(featureSet.features[0].geometry,20);
        resolve('INTERRUMPIDO')
      }else{
        var fn = findNis(nis,token)
        .then(found=>{
          console.log(found,"tengo esto en ok");

          reject('SIN PROBLEMAS');

        }).catch(notFound=>{
          console.log(notFound,"tengo esto en catch");
          reject("NO SE ENCUENTRA NIS");
        });

      }
    },(error)=>{
      reject("NO SE ENCUENTRA NIS")
    });
  });
  return promise;
}


function findNis(nis,token){

  var map = mapa.getMap();

  let pointSymbol = makeSymbol.makePoint();

  var promise = new Promise((resolve,reject)=>{

    var qtask = new QueryTask(getLayer.read_nis(token));
    var q = new Query();
    q.returnGeometry = true;
    q.outFields = ["*"];
    q.where = `ARCGIS.dbo.CLIENTES_DATA_DATOS_006.nis=${nis}`;
    qtask.execute(q,(featureSet)=>{
      console.log(featureSet,"nis en sistema?");
      if(featureSet.features.length>0){
        gLayerFind.add(new Graphic(featureSet.features[0].geometry,pointSymbol));
        map.addLayer(gLayerFind,1);
        map.centerAndZoom(featureSet.features[0].geometry,20);
        resolve(true)
      }else{
        reject(false)
      }
    },(error)=>{
        reject(false)
    });
  })

  return promise;
}

export {searchInterruptions}
