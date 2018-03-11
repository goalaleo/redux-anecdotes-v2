import React from 'react'

class Notification extends React.Component {
  render() {
    const { store } = this.props
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
      display: (store.getState().notification === '' ? 'none' : '')
    }

    return (
      <div style={style}>
        {store.getState().notification}
      </div>
    )
  }
}

export default Notification
