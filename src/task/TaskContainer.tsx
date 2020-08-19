import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import moment from 'moment'
import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import { toggleTask } from './tasksSlice'
import TaskView from './TaskView'

export interface TaskPropTypes {
  id: number
  title: string
  completed: boolean
  dueDate?: string
  dotOnly?: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
  toggleEdit?: () => void
  editing?: boolean
  idx: number
}

interface TaskStateTypes {}

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {}
  }

  public static defaultProps = {
    dotOnly: false
  }

  render () {
    const dueDate = moment(this.props.dueDate)

    return (
      <Draggable draggableId={this.props.id.toString()} index={this.props.idx}>
        {(p, s) => (
          <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}>
            <TaskView
              provided={p}
              snapshot={s}
              {...this.props}
              dueDate={dueDate}
              isDragging={s.isDragging}
            />
          </div>
        )}
      </Draggable>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
