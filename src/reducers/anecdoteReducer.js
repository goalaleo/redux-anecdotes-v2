import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = []
const initialState = anecdotesAtStart

export const anecdoteCreation = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    console.log('got notes', anecdotes  )
    dispatch({
      type: 'INIT_ANECDOTES',
      anecdotes
    })
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
    return action.anecdotes
  default:
    return state
  }
}

export default reducer
