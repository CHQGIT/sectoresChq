
import getLayer from './layers-service';
import cookieHandler from 'cookie-handler';
import $ from 'jquery';
import kernel from "esri/kernel";
import {conf} from '../services/config';

function innerLogin(user,pass){
  var promise = new Promise((resolve,reject)=>{

    const url = getLayer.read_tokenURL();

    const data = {
      username: user,
      password: pass,
      client: 'requestip',
      expiration: 1440,
      format: 'jsonp'
    };

    $.ajax({
      method: 'POST',
      url: url,
      data: data,
      dataType: 'html'
    })
    .done(token =>{
      if(token.indexOf('Exception') >= 0) {
        reject([false,'Login incorrecto, intente nuevamente']);
      }
      if (token.indexOf('error') >= 0){
        reject([false,'Login incorrecto, intente nuevamente']);

      }

      var t = {
        "server": getLayer.read_service_url(),
        "userId": conf().user,
        "token": token,
        "ssl": false,
        "expires": 7200
      };

      kernel.id.registerToken(t);

      //cookieHandler.set('tkn',token);
      resolve([true,'OK', token]);
    })
    .fail(error => {
    
      reject([false,`Problema ${error}`]);
    });
  });

  return promise;
}

export {innerLogin}
