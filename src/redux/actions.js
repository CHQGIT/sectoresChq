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

export {showNotification, dismissNotification}
