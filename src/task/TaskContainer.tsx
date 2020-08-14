import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskView from './TaskView'
import { toggleTask } from './tasksSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface TaskPropTypes {
  id: number
  title: string
  completed: boolean
  dotOnly?: boolean
  hover?: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
  toggleEdit?: () => void
  editing?: boolean
}

interface TaskStateTypes {
  hover: boolean
  editing: boolean
}

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {
      hover: false,
      editing: false
    }
  }

  public static defaultProps = {
    dotOnly: false
  }

  hoverOn = () => this.setState({ hover: true })
  hoverOff = () => this.setState({ hover: false })
  toggleEdit = () =>
    this.setState(s => ({
      editing: !s.editing
    }))

  render () {
    return (
      <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
        <TaskView
          {...this.props}
          hover={this.state.hover}
          editing={this.state.editing}
          toggleEdit={this.toggleEdit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
