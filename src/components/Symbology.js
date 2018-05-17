import store from '../redux/store';
import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Icon } from 'semantic-ui-react';
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
            <p>Haz click sobre la red para conocer la hora estimada de reposición.</p>
            <div className="symbol_"><img src={env.CSSDIRECTORY+"images/tramo.png"}></img></div>


        </div>
      </div>

    )
  }
}

/*
o	00-25%     VERDE               B4FFB4
o	25-50%     AMARILLO          FFFFB4
o	50-75%     AZUL                     B4F5FF
o	75-100%  NARANJO           FFDCB4

*/
  const mapStateToProps = state => {
    return {
      region: state.region
    };
  }

export default connect(mapStateToProps)(Symbology);
