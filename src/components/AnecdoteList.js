import React from 'react'
import { connect } from 'react-redux'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = (props) => {
  const notifyingAnecdoteVote = async (anecdote) => {
    const votedAnecdote= await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 })


    props.anecdoteVote(votedAnecdote)
    props.showNotification(votedAnecdote.content)
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
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
  anecdoteVote, showNotification, hideNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
