/*
APP: Sectores
Author: Evelyn Hernandez
Version: 1.9.3
Date: 2018-08-29
*/


//DEV
/*
const env = {
    ROOT: "/",
    CSSDIRECTORY: 'src/css/',
    ROUTEPATH: 'index.html',
    ENVIRONMENT: 'DEVELOPMENT',
    WEBSERVERADDRESS: "http://pchilquinta.cl/mapafallas",
    SAVEAPPLICATIONMODULE: "",
    SAVEAPPLICATIONNAME: '',
    BUILDFOR: 'EXTERNA'
}

var conf = ( () => {
  var credentials = {
    user: 'vialactea\\usrgis',
    pass: 'N3L4y5HZ'
  }

  return () => {return credentials}
})();
*/

//pruebas pchilquinta
/*
const env = {
    ROOT: "/",
    CSSDIRECTORY: 'css/',
    ROUTEPATH: 'index.html',
    ENVIRONMENT: 'PRODUCTION',
    WEBSERVERADDRESS: "http://pchilquinta.pruebas/mapafallas",
    SAVEAPPLICATIONMODULE: "",
    SAVEAPPLICATIONNAME: '',
    BUILDFOR: 'EXTERNA'
}

var conf = ( () => {
  var credentials = {
    user: 'vialactea\\usrgis',
    pass: 'N3L4y5HZ'
  }

  return () => {return credentials}
})();
*/


//Produccion portalweb:

const env = {
    ROOT: "/",
    CSSDIRECTORY: 'css/',
    ROUTEPATH: 'index.html',
    ENVIRONMENT: 'PRODUCTION',
    WEBSERVERADDRESS: "https://portalweb.chilquinta.cl/mapafallas",
    SAVEAPPLICATIONMODULE: "",
    SAVEAPPLICATIONNAME: '',
    BUILDFOR: 'EXTERNA'
}

var conf = ( () => {
  var credentials = {
    user: 'vialactea\\usrgis',
    pass: 'N3L4y5HZ'
  }

  return () => {return credentials}
})();



export {conf};
export default env;
