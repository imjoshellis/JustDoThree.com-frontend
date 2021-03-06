import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import { toggleTask } from './tasksSlice'
import TaskView from './TaskView'

export interface TaskPropTypes {
  id: string
  title: string
  completed: boolean
  dueDate?: string
  dotOnly?: boolean
  disabled?: boolean
  toggleTask: ActionCreatorWithPayload<any>
  setEditing: (id: string) => void
  editing?: boolean
  idx: number
}

interface TaskStateTypes {
  hover: boolean
  completed: boolean
}

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = { hover: false, completed: this.props.completed }
  }

  componentDidUpdate = (): void => {
    if (this.props.completed !== this.state.completed) {
      this.setState({ completed: this.props.completed })
    }
  }

  public static defaultProps = {
    dotOnly: false
  }

  render (): JSX.Element {
    return (
      <>
        <Draggable draggableId={this.props.id} index={this.props.idx}>
          {(p, s) => (
            <div
              ref={p.innerRef}
              {...p.draggableProps}
              {...p.dragHandleProps}
              className={`focus:outline-none focus:border-blue-50 border-2 border-gray-90 w-full rounded-lg overflow-hidden
            ${s.isDragging ? 'bg-gray-80 border-gray-80 bg-opacity-75' : ''}`}
              onMouseEnter={() => this.setState({ hover: true })}
              onMouseLeave={() => this.setState({ hover: false })}
            >
              <div
                className={
                  'bg-gray-90 focus:bg-gray-80 hover:bg-gray-80 transition-colors duration-200 ease-out hover:ease-in'
                }
              >
                <TaskView
                  provided={p}
                  snapshot={s}
                  {...this.props}
                  hover={this.state.hover}
                />
              </div>
            </div>
          )}
        </Draggable>
      </>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
