import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {

  render() {
    const { anecdotes, notification } = this.props.store.getState()
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification notification={notification} />
        <AnecdoteList anecdotes={anecdotes} />
        <AnecdoteForm />
      </div>
    )
  }
}

export default App
