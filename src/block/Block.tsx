import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import TaskContainer from '../task/TaskContainer'
import { addTask, TaskTypes } from '../task/tasksSlice'
import { BlockTypes } from './blocksSlice'
import NewTaskFormContainer from './NewTaskFormContainer'

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
}) => (
  <div className='flex flex-col max-w-xs mt-4 rounded-lg rounded-b bg-gray-90 md:mt-0'>
    <div className='h-32 overflow-hidden' />

    <div className='flex flex-col flex-grow p-2'>
      <h2
        className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'
        onClick={() => changeTopBlock()}
      >
        {block.title}
      </h2>
      <div className='flex flex-col flex-grow'>
        {tasks && tasks.map(t => <TaskContainer key={t.id} {...t} />)}
        {tasks.length < 3 && (
          <NewTaskFormContainer block={block} addTask={addTask} />
        )}
      </div>
    </div>
  </div>
)

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
