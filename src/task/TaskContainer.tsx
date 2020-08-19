import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { motion } from 'framer-motion'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTask } from './tasksSlice'
import TaskView from './TaskView'
import { Draggable } from 'react-beautiful-dnd'

export interface TaskPropTypes {
  id: number
  title: string
  completed: boolean
  dueDate?: Date
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
    return (
      <Draggable draggableId={this.props.id.toString()} index={this.props.idx}>
        {(p, s) => (
          <div {...p.draggableProps} {...p.dragHandleProps} ref={p.innerRef}>
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 }
              }}
              whileTap={{ scale: 1.07 }}
              className='bg-gray-90'
            >
              <TaskView {...this.props} isDragging={s.isDragging} />
            </motion.div>
          </div>
        )}
      </Draggable>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
