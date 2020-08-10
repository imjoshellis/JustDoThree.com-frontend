import React, { Component } from 'react'
import { TaskPropTypes, TaskStateTypes } from './TaskTypes'
import TaskView from './TaskView'

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {
      completed: this.props.completed,
      hover: false
    }
  }

  public static defaultProps = {
    dotOnly: false,
    disabled: false
  }

  handleClick = () => {
    this.setState((state) => ({
      completed: !state.completed
    }))
  }

  hoverOn = () => this.setState({ hover: true })
  hoverOff = () => this.setState({ hover: false })

  render () {
    return (
      <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <TaskView
          name={this.props.name}
          completed={this.state.completed}
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
