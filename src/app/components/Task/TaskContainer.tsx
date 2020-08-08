import React, { Component } from 'react'
import { TaskPropTypes, TaskStateTypes } from './TaskTypes'
import TaskView from './TaskView'

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {
      status: this.props.status,
      hover: false
    }
  }

  public static defaultProps = {
    dotOnly: false,
    status: 'todo',
    disabled: false
  }

  handleClick = () => {
    this.setState({ status: this.state.status === 'done' ? 'todo' : 'done' })
  }

  hoverOn = () => this.setState({ hover: true })
  hoverOff = () => this.setState({ hover: false })

  render () {
    return (
      <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <TaskView
          name={this.props.name}
          status={this.state.status}
          dotOnly={this.props.dotOnly}
          hover={this.state.hover}
          handleClick={this.handleClick}
          disabled={this.props.disabled}
        />
      </div>
    )
  }
}

export default TaskContainer
