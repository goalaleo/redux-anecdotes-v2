import React from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import anecdotesService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


class App extends React.Component {
  componentDidMount = async () => {
    const anecdotes = await anecdotesService.getAll()
    this.props.initializeAnecdotes(anecdotes)
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default connect(
  null,
  { initializeAnecdotes }
)(App)
