import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { TaskTypes } from '../task/tasksSlice'
import TaskContainer from '../task/TaskContainer'

interface Props {
  tasks: TaskTypes[]
}

export const Block: FunctionComponent<Props> = ({ tasks }) => {
  let classes = {
    base: 'bg-gray-90 rounded-lg rounded-b overflow-hidden',
    hover: ''
  }

  return (
    <div className={classes.base}>
      <div className='h-32 overflow-hidden' />

      <div className='p-2'>
        <h2 className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'>
          kind
        </h2>
        {tasks && tasks.map(t => <TaskContainer key={t.id} {...t} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState, ownProps: { block: number }) => ({
  tasks: state.tasks.filter(t => t.block === ownProps.block)
})

const TaskBlock = connect(mapStateToProps)(Block)

export default TaskBlock
