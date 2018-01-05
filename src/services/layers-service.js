import env from './config';

function getLayer(){
  var serviceMain, serviceURL;

  (env.BUILDFOR=="INTERNA") ? serviceMain = 'http://gisred.chilquinta/arcgis/' : serviceMain = 'http://gisred.chilquinta.cl:5555/arcgis/'

  serviceURL = serviceMain + 'rest/services/';

  return {
    read_tokenURL(){
      return serviceMain + "tokens/generateToken";
    }

  }
}

export default getLayer();
