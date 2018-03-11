import React from 'react'
import { connect } from 'react-redux'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const notifyingAnecdoteVote = async (anecdote) => {
    props.notify(`you voted '${anecdote.content}'`, 5000)
    props.anecdoteVote(anecdote)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {props.anecdotes.map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  if (filter === '') {
    return anecdotes
  }

  const reg = new RegExp(filter, 'i')
  return anecdotes.filter(anecdote => anecdote.content.match(reg))
}

const sortByVotes = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes)
}



const mapStateToProps = (state) => {
  return {
    anecdotes: sortByVotes(anecdotesToShow(state.anecdotes, state.filter)),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  anecdoteVote, notify
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
