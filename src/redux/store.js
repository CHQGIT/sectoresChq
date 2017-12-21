import {createStore} from 'redux';

function showNotification(state,action){
  console.log(state,action,"hola from showNotification");
  return Object.assign({}, state, {message: action.message});
}

function dismissNotification(state,action){
    console.log(action,state,"hola desde dismissNotification store");
    return Object.assign({}, state, {visible: action.visible});

}

const reducer = (state, action) => {
  if(action.type==="SHOW_NOTIFICATION"){
    return showNotification(state,action);
  }
  if(action.type==="DISMISS_NOTIFICATION"){
    return dismissNotification(state,action);
  }
  return state;
}

export default createStore(reducer,{message: [], visible: true})
