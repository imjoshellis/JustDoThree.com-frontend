import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { motion } from 'framer-motion'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTask } from './tasksSlice'
import TaskView from './TaskView'

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
  isDragging: boolean
}

export class TaskContainer extends Component<TaskPropTypes, TaskStateTypes> {
  constructor (props: TaskPropTypes) {
    super(props)

    this.state = {
      editing: false,
      isDragging: false
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

  setDragging = (isDragging: boolean) => {
    this.setState({ isDragging })
  }

  render () {
    return (
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.25 }
        }}
        whileTap={{ scale: 1.07 }}
        className='bg-gray-90'
      >
        <TaskView {...this.props} editing={this.state.editing} />
      </motion.div>
    )
  }
}

const mapDispatchToProps = { toggleTask }

export default connect(null, mapDispatchToProps)(TaskContainer)
