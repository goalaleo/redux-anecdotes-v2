const notificationAtStart = 'Hello, welcome to use the anecdotes app!'
const initialState = notificationAtStart

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'TODO' :
    return state
  default:
    return state
  }
}

export default reducer
