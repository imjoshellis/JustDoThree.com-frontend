import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { TaskTypes, addTask } from '../task/tasksSlice'
import TaskContainer from '../task/TaskContainer'
import { BlockTypes } from './blocksSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

interface Props {
  tasks: TaskTypes[]
  block: BlockTypes
  changeTopBlock: () => void
  addTask: ActionCreatorWithPayload<{ title: string; block: BlockTypes }>
}

export const Block: FunctionComponent<Props> = ({
  tasks,
  block,
  changeTopBlock,
  addTask
}) => {
  let classes = {
    base: 'bg-gray-90 rounded-lg rounded-b overflow-hidden',
    hover: '',
    addTask: {
      base: 'px-3 py-1 bg-gray-80 rounded'
    }
  }

  return (
    <div className={classes.base}>
      <div className='h-32 overflow-hidden' />

      <div className='p-2'>
        <h2
          className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'
          onClick={() => changeTopBlock()}
        >
          {block.title}
        </h2>
        {tasks && tasks.map(t => <TaskContainer key={t.id} {...t} />)}
        {tasks.length < 3 && (
          <button
            onClick={() => addTask({ title: 'new task', block })}
            className={classes.addTask.base}
          >
            Add Task
          </button>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (
  state: RootState,
  {
    block,
    changeTopBlock
  }: { block: BlockTypes; changeTopBlock: (block: BlockTypes) => void }
) => ({
  tasks: state.tasks.filter(t => t.block === block.id),
  block: block,
  changeTopBlock: () => changeTopBlock(block)
})

const mapDispatchToProps = { addTask }

const ConnectedBlock = connect(mapStateToProps, mapDispatchToProps)(Block)

export default ConnectedBlock
