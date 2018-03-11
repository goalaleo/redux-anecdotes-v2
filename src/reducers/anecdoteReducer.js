const anecdotesAtStart = []

const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const anecdoteCreation = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

export const initializeAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const anecdoteVote = (anecdote) => {
  return {
    type: 'VOTE',
    anecdote
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'VOTE': {

    const old = state.filter(a => a.id !== action.anecdote.id)
    const voted = state.find(a => a.id === action.anecdote.id)

    return [...old, { ...voted, votes: action.anecdote.votes }]
  }
  case 'CREATE':
    return [...state, { content: action.data.content, id: action.data.id, votes:0 }]
  case 'INIT_ANECDOTES':
    return action.data
  default:
    return state
  }
}

export default reducer
