import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TaskPropTypes, TaskStateTypes } from './TaskTypes'
import TaskView from './TaskView'
import { toggleTask } from './tasksSlice'

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {
      hover: false
    }
  }

  public static defaultProps = {
    dotOnly: false
  }

  hoverOn = () => this.setState({ hover: true })
  hoverOff = () => this.setState({ hover: false })

  render () {
    return (
      <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <TaskView {...this.props} hover={this.state.hover} />
      </div>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
