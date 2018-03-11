const notificationAtStart = 'Hello, welcome to use the anecdotes app!'
const initialState = notificationAtStart

export const showNotification = (notification) => {
  return {
    type: 'SHOW_NOTIFICATION',
    notification
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SHOW_NOTIFICATION' :
    return `you voted '${action.notification}'!`
  case 'HIDE_NOTIFICATION' :
    return ''
  default:
    return state
  }
}

export default reducer
