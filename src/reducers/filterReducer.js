const filterAtStart = ''
const initialState = filterAtStart

export const setFilter = (filter) => {
  return {
    type: 'FILTER',
    filter
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FILTER' :
    return action.filter
  default:
    return state
  }
}

export default reducer
