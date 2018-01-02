import store from '../redux/store';
import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {saveRegion} from '../redux/actions';
import { Icon } from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';

class Symbology extends Component{

  render(){

    return (

      <div className="symbology_wrapper">
        {/* titulos*/}
        <div className="symbology_title"><h3>INTERRUPCIONES DE SUMINISTRO</h3></div>
        <div className="symbology_subtitle">

          <h3>Simbología:</h3>
          <h4>Cantidad de clientes afectados</h4>
        </div>
        {/*simbolos*/}
        <div className="symbology_image_range">
          <div className="symbology_range">
            <div className="range"><Icon name='circle' className="range_red"/><div className="img_red">500 - 2000 Clientes Afectados</div></div>
            <div className="range"><Icon name='circle' className="range_orange"/><div className="img_orange">100 - 500 Clientes Afectados</div></div>
            <div className="range"><Icon name='circle' className="range_yellow"/><div className="img_yellow">51 - 500 Clientes Afectados</div></div>
            <div className="range"><Icon name='circle' className="range_green"/><div className="img_green">1 -50 Clientes Afectados</div></div>
          </div>
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

export default connect(mapStateToProps,{saveRegion})(Symbology);
