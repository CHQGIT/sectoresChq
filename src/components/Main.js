import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/myStyles.scss';
import Map from 'esri/map';
import {Container, Divider, Message, Button, Icon} from 'semantic-ui-react';
import ToggleSymbology from './ToggleSymbology';
import BottomSidebar from './BottomSidebar';
import Symbology from './Symbology';
import {showNotification, dismissNotification, login_in, toggleMobileVisibility} from '../redux/actions';
import {connect} from 'react-redux';
import store from '../redux/store';
import {regionsExtent, getComunaExtent}  from '../services/regionsExtent';
import {getURLParameters} from '../services/parameters';
import ArcGISDynamicMapServiceLayer from 'esri/layers/ArcGISDynamicMapServiceLayer';
import getLayer from '../services/layers-service';
import BasemapToggle from "esri/dijit/BasemapToggle";
import getInfoTemplate from '../services/infoTemplates';
import {conf} from '../services/config';
import Search from 'esri/dijit/Search';
import CustomSearch from './CustomSearch';
import mapa from '../services/map_service';
import esriBundle from "dojo/i18n!esri/nls/jsapi";
import $ from 'jquery';

class Main extends React.Component {

  componentDidMount(){

    var c = getURLParameters();
    if (c.comuna) {

    }else{

       c.comuna = "VALPARAISO";
    }

    var comuna = getComunaExtent(c.comuna)
    .then(r=>{

        esriBundle.widgets.Search.main.placeholder = "Calle n°, comuna";

        var map = mapa.createMap(r[0][1],r[0][2],r[0][3]);

        var search = new Search({
            map: mapa.getMap(),
            zoomScale: 20000,
            countryCode: 'CHL'
        }, "search");
        search.startup();

        const {showNotif, dismissNotif, login} = this.props;

        var l = login(conf().user, conf().pass)
          .then(res=>{
          if(res)  {
            //agregando layer clientes sed.
            const {token} = this.props;

            var interrClienteSED = new ArcGISDynamicMapServiceLayer(getLayer.read_po_sectores(token),{id:"po_sectores"});

              interrClienteSED.setInfoTemplates({
                0: {infoTemplate: getInfoTemplate.getSectorCentroide()}
              });

              interrClienteSED.refreshInterval = 1;
              interrClienteSED.setImageFormat("png32");


            map.addLayers([interrClienteSED]);

            var toggle = new BasemapToggle({
              map: map,
              basemap: "satellite"
            }, "BasemapToggle");
            toggle.startup();

          }else{
            showNotif("Error al visualizar el mapa. Login incorrecto.");
            dismissNotif(true);
          }
        },e=>{
          showNotif("Error al visualizar el mapa. Login incorrecto.");
          dismissNotif(true);

        });

    });


  }

  SymbologyVisibility(){
    const {toggleMobileVisibility, mobile} = this.props;

    if(mobile){
        toggleMobileVisibility(false)
        $('.symbology_container').css('visibility','hidden')

    }else{
        toggleMobileVisibility(true)
        $('.symbology_container').css('visibility','visible')
    }


  }

  render(){
    var {searchValue, message, interrupted, mobile} = this.props;
    var msg = null;
    if(message.visible){


      switch (interrupted) {
        case 'INTERRUMPIDO':
            msg = <Message visible={message.visible} negative color='red'>
                {interrupted}
              </Message>
        break;
        case 'SIN INTERRUPCIÓN':
            msg = <Message visible={message.visible} positive color='green'>
                {interrupted}
              </Message>
        break;
        case 'NO SE ENCUENTRA NÚMERO DE CLIENTE':
            msg = <Message visible={message.visible} info color='blue'>
                {interrupted}
              </Message>
        break;
      }
    }else{
      msg = null;
    }


    return (

      <Container className="map_container">
        <div id="map"></div>

        <div className="symbology_mobile">
          <Button icon className="btn_symbology_mobile" onClick={this.SymbologyVisibility.bind(this)}>
             <Icon name='bars'/>
          </Button>
        </div>

        <div className="symbology_container">
          <Symbology />
            <div className="address_container">
              <div className="symbology_title"><h4>Revisa el estado de tu suministro</h4></div>
              <div id="search"></div>
              <Divider horizontal>O busca tu número de cliente</Divider>
              <CustomSearch />
              {msg}

           </div>
           <div className="symbology_container2">
             <Button className="report_button" color='red'><a className="a_link" href="https://portalweb.chilquinta.cl/reportar_incidencia">¡REPORTAR CORTE DE LUZ!</a></Button>

          </div>
        </div>

        <div className="symbology_container2"></div>
        <div id="BasemapToggle"></div>
      </Container>


    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login:(user, pass) => dispatch(login_in(user,pass)),
    showNotif: (message) => dispatch(showNotification(message)),
    dismissNotif: (value) => dispatch(dismissNotification(value)),
    toggleMobileVisibility: (value) => dispatch(toggleMobileVisibility(value))
  }
}

const mapStateToProps = state => {
  return {
    token: state.login.token[2],
    interrupted: state.search.interrupted,
    searchValue: state.search.selectedSearch,
    message: state.message,
    mobile: state.mobile.symbologyVisibility
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
