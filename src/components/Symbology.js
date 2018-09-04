import store from '../redux/store';
import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Icon, Button} from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';
import env from '../services/config';
import Tooltip from 'rc-tooltip';

function preventDefault(e) {
  e.preventDefault();
}

class Symbology extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }


  }
  onVisibleChange = (visible) => {
      this.setState({
        visible,
      });
  }

  render(){

    return (
     <div className="symbology_wrapper">
        {/* titulos*/}
        <div className="symbology_title"><h3>Interrupciones por sector</h3></div>

        <div className="symbology_image_range">
            <div className="symbo_groups"> 
              <img className="simbology_img" src={env.CSSDIRECTORY+"images/tramo.png"}></img> 
              <p>Sector afectado por corte programado.</p>
            </div>
            <div className="symbo_groups"> 
              <img className="simbology_img" src={env.CSSDIRECTORY+"images/tramoazul.png"}></img> 
              <p>Sector afectado por corte no programado.</p>
            </div>
            <div className="symbo_groups"> 
              <img className="simbology_img" src={env.CSSDIRECTORY+"images/gis_icon.png"}></img> 
              <p>Puedes hacer clic en el ícono para conocer la hora estimada de reposición.</p>
            </div>
           
            {/*  <div className="symbol_"><img src={env.CSSDIRECTORY+"images/tramo.png"}></img></div> */}


        </div>
      </div>
    
    )
  }
}
  const mapStateToProps = state => {
    return {
      region: state.region
    };
  }

export default connect(mapStateToProps)(Symbology);
