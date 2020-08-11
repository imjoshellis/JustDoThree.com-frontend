import React, { Component, FunctionComponent } from 'react'
import { connect } from 'react-redux'
import TaskBlock from './TaskBlock'
import { TaskPropTypes } from './TaskContainer'

interface Props {
  tasks: TaskPropTypes[]
}

export const TaskBlockRow: FunctionComponent<Props> = ({ tasks }) => {
  const classes = {
    row: 'grid grid-cols-4 gap-4'
  }

  return (
    <div className={classes.row}>
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
      <TaskBlock tasks={tasks} />
    </div>
  )
}

const mapStateToProps = (state: { tasks: TaskPropTypes[] }) => ({
  tasks: state.tasks
})

export const ConnectedTaskBlockRow = connect(mapStateToProps)(TaskBlockRow)

export default ConnectedTaskBlockRow
