import React, { Component } from 'react'
import { TaskPropTypes, TaskStateTypes } from './TaskTypes'
import TaskView from './TaskView'

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {
      status: this.props.status || 'todo',
      hover: false
    }
  }

  public static defaultProps = {
    hideLabel: false
  }

  handleChange = () => {
    this.setState({ status: this.state.status === 'done' ? 'todo' : 'done' })
  }

  render () {
    return (
      <>
        <TaskView
          name={this.props.name}
          status={this.state.status}
          hideLabel={this.props.hideLabel}
          hover={this.state.hover}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default TaskContainer
