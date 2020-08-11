import React, { Component } from 'react'
import ConnectedTaskBlockRow from './TaskBlockRow'

export class TaskBlockGrid extends Component {
  render () {
    return (
      <div className='grid grid-rows-2 gap-4'>
        <ConnectedTaskBlockRow />
        <ConnectedTaskBlockRow />
      </div>
    )
  }
}

export default TaskBlockGrid
