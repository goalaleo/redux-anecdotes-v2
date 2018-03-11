import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = []
const initialState = anecdotesAtStart

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew({ content, votes: 0 })
    dispatch({
      type: 'CREATE',
      anecdote: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      anecdotes
    })
  }
}

export const anecdoteVote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.update({ ...anecdote, votes: anecdote.votes+1 })
    dispatch({
      type: 'VOTE',
      anecdote: votedAnecdote
    })
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
    return [...state, { content: action.anecdote.content, id: action.anecdote.id, votes:0 }]
  case 'INIT_ANECDOTES':
    return action.anecdotes
  default:
    return state
  }
}

export default reducer
