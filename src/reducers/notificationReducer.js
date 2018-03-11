const notificationAtStart = 'Hello, welcome to use the anecdotes app!'
const initialState = notificationAtStart

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  }
}

export const notify = (content, duration) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(hideNotification())
    }, duration)

    dispatch({
      type: 'SHOW_NOTIFICATION',
      notification: content
    })
  }
}

const reducer = (state = initialState, action) => {
  console.log('hit reducer with', action)
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
