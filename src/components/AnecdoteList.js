import React from 'react'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { hideNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const store = this.props.store
    const anecdotes = store.getState().anecdotes

    const notifyingAnecdoteVote = (anecdote) => {
      store.dispatch(anecdoteVote(anecdote))
      store.dispatch(showNotification(anecdote.content))
      setTimeout(() => {
        store.dispatch(hideNotification())
      }, 5000)
    }

    const anecdoteFilter = (anecdote) => {
      const filter = store.getState().filter
      if (filter === '') {
        return true
      }

      const reg = new RegExp(filter, 'i')
      return anecdote.content.match(reg)
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).filter(anecdoteFilter).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                notifyingAnecdoteVote(anecdote)
              }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
