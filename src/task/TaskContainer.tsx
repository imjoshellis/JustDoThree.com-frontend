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
          <div
            ref={p.innerRef}
            {...p.draggableProps}
            {...p.dragHandleProps}
            className={`focus:outline-none focus:border-blue-50 border-2 border-gray-90 w-full rounded-lg overflow-hidden
            ${s.isDragging ? 'bg-gray-80 border-gray-80 bg-opacity-75' : ''}`}
          >
            <div
              className={`bg-gray-90 focus:bg-gray-80 py-1 hover:bg-gray-80 transition-colors duration-200 ease-out hover:ease-in`}
            >
              <TaskView
                provided={p}
                snapshot={s}
                {...this.props}
                dueDate={dueDate}
              />
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
