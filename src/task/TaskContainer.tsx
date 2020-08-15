import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskView from './TaskView'
import { toggleTask } from './tasksSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface TaskPropTypes {
  id: number
  title: string
  completed: boolean
  dueDate?: moment.Moment
  dotOnly?: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
  toggleEdit?: () => void
  editing?: boolean
}

interface TaskStateTypes {
  editing: boolean
}

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {
      editing: false
    }
  }

  public static defaultProps = {
    dotOnly: false
  }

  // hoverOn = () => this.setState({ hover: true })
  // hoverOff = () => this.setState({ hover: false })
  toggleEdit = () =>
    this.setState(s => ({
      editing: !s.editing
    }))

  render () {
    return (
      <div>
        <TaskView {...this.props} editing={this.state.editing} />
      </div>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
