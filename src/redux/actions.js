import {innerLogin} from '../services/login-service';
import {searchInterruptions} from '../services/search_service';



const showNotification = (message) =>{
  return {
    type: "SHOW_NOTIFICATION",
    message: message
  }
}

const dismissNotification = (visible) => {
  return {
    type: "DISMISS_NOTIFICATION",
    visible: visible
  }
}

function login_in (user,pass){

  return dispatch => {
     return innerLogin(user,pass)
     .then(token => {
       if(token[0]){
         dispatch({
           type: 'LOGGED_IN',
           token
         })
       return true;
       }else{
         dispatch({
           type: 'NOT_LOGGED_IN',
           error
         })
         return false;
       }

     })

     .catch(error=>{
       dispatch({
         type: 'NOT_LOGGED_IN',
         error
       })
       return false;
     })
  }

}

function searchValue(value, token) {

  return dispatch => {
    return searchInterruptions(value,token)
    .then(interrupted=>{

      dispatch({
        type: 'INTERRUPTED',
        value, interrupted
      })

      dispatch({
        type: 'SHOW_NOTIFICATION',
        message: "Cliente SI presenta interrupción de servicio"
      })

    }).catch(ok=>{

      dispatch({
        type: 'NOT_INTERRUPTED',
        value, ok
      })

      dispatch({
        type: 'SHOW_NOTIFICATION',
        message: "Cliente NO presenta interrupción de servicio"
      })
    })
  }
}

function searchDismiss(visible){
  return dispatch => {

    dispatch({
      type: 'DISMISS_NOTIFICATION',
      visible
    })

  }
}

//01.08.2018
function toggleMobileVisibility(visible){
  return dispatch => {
    dispatch({
      type: 'TOGGLE_MOBILE_VISIBILITY',
      visible
    })
  }
}

export {showNotification, dismissNotification, login_in, searchValue,searchDismiss, toggleMobileVisibility}
