import React,  { Component } from 'react';
import {connect} from 'react-redux';
import {searchValue, searchDismiss} from '../redux/actions';

import {Input, Button} from 'semantic-ui-react';

function preventDefault(e) {
  e.preventDefault();
}

class CustomSearch extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      inputValue: ''
    }

  }
  handleClick(e,x){

    const {nisSearch, token} = this.props;
    nisSearch(this.state.inputValue, token);
  }
  render(){
    const {nombreSector, searchValue, handleSearch, dismiss} = this.props;

    return (

      <div className="symbology_wrapper custom_search_div">

        <div className="symbology_image_range">
          <div className="symbology_range">
             <div className="custom_search_group">
             <Input action={
               <Button
                 icon='search'
                 content='Buscar'
                 onClick={ this.handleClick }
                 className="border_ btn_search_color"
              />}
              placeholder='Número de cliente'
              className="border_"
              type="number"
              min="0"
              max="999999"
              onChange={
                e=> {
                  this.state.inputValue = e.target.value
                  dismiss(false)
                }
                } />
             </div>
          </div>
        </div>
      </div>

    )
  }
}

  const mapDispatchToProps = dispatch => {
    return {
      nisSearch: (value, token) => dispatch(searchValue(value, token)),
      dismiss: (visible) => dispatch(searchDismiss(visible))

    }
  }
  const mapStateToProps = state => {
    return {
      searchValue: state.search.selectedSearch,
      activeIndex: state.search.tabIndex,
      token: state.login.token[2]
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CustomSearch);
