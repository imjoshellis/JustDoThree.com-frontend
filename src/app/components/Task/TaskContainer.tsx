import React, { Component } from 'react'
import { TaskPropTypes, TaskStateTypes } from './TaskTypes'
import TaskView from './TaskView'

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {}
  }

  public static defaultProps = {
    dotOnly: false
  }

  render () {
    return (
      <TaskView
        name={this.props.name}
        status={this.props.status}
        dotOnly={this.props.dotOnly}
      />
    )
  }
}

export default TaskContainer
