import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/myStyles.scss';
import Map from 'esri/map';
import {Container} from 'semantic-ui-react';
import ToggleSymbology from './ToggleSymbology';
import BottomSidebar from './BottomSidebar';
import {innerLogin} from '../services/login-service';
import {showNotification, dismissNotification} from '../redux/actions';
import {connect} from 'react-redux';
import store from '../redux/store';
class Main extends React.Component {

  componentDidMount(){
    var map = new Map("map", {
      center: [-71.2905 ,-33.1009],
      basemap: "topo",
      zoom: 9,
      logo: false
    });

    var login = innerLogin('vialactea\\usrgis','N3L4y5HZ');
    login.then(r=>{
    
      store.dispatch(showNotification("Agregar comentarios aquí"), dismissNotification(true));

    },e=>{
      store.dispatch(showNotification("Error al visualizar el mapa. Login incorrecto"), dismissNotification(true));

    });
  }
  render(){
    return (

      <Container className="map_container">
        <div id="map"></div>
        <ToggleSymbology theClass="symb_"/>
        <div className="message_container">
          <BottomSidebar />
        </div>
      </Container>


    );
  }
}



export default Main;
