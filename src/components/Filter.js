import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const style = {
    marginBottom: 10
  }
  const setFilter = (e) => props.setFilter(e.target.value)

  return (
    <div style={style}>
      filter <input onChange={setFilter}/>
    </div>
  )
}

export default connect(
  null,
  { setFilter }
)(Filter)
