import env from './config';
import cookieHandler from 'cookie-handler';
function getLayer(){
  var serviceMain, serviceURL;

  (env.BUILDFOR=="INTERNA") ? serviceMain = 'http://gisred.chilquinta/arcgis/' : serviceMain = 'http://gisred.chilquinta.cl:5555/arcgis/'

  serviceURL = serviceMain + 'rest/services/';
  var token = cookieHandler.get('tkn');

  return {
    read_tokenURL(){
      return serviceMain + "tokens/generateToken";
    },
    read_po_sectores(){
      return serviceURL + "Interrupciones/PO_WEB_EXT/MapServer?f=json&token=" + cookieHandler.get('tkn');
    }

  }
}

export default getLayer();
