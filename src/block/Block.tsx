import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import TaskContainer from '../task/TaskContainer'
import { addTask, TaskTypes } from '../task/tasksSlice'
import { BlockTypes } from './blocksSlice'
import NewTaskFormContainer from './NewTaskFormContainer'
import { Droppable } from 'react-beautiful-dnd'

interface Props {
  tasks: TaskTypes[]
  block: BlockTypes
  changeTopBlock: () => void
  addTask: ActionCreatorWithPayload<{ title: string; block: BlockTypes }>
  activeBlock: number
}

export const Block: FunctionComponent<Props> = ({
  tasks,
  block,
  changeTopBlock,
  addTask,
  activeBlock
}) => {
  const isDropDisabled = tasks.length > 2 && activeBlock !== block.id
  const newTaskAllowed = tasks.length < 3
  console.log(activeBlock)
  return (
    <Droppable
      droppableId={block.id.toString()}
      isDropDisabled={isDropDisabled}
    >
      {(p, s) => (
        <div
          className={`flex flex-col max-w-xs mt-4 rounded-lg rounded-b bg-gray-90 md:mt-0 ${
            s.isDraggingOver
              ? isDropDisabled
                ? 'bg-red-10'
                : 'bg-gray-95'
              : ''
          } `}
        >
          <div className='h-32 overflow-hidden' />

          <div className='flex flex-col flex-grow p-2'>
            <h2
              className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'
              onClick={() => changeTopBlock()}
            >
              {block.title}
            </h2>
            <div
              {...p.droppableProps}
              ref={p.innerRef}
              className='flex flex-col flex-grow'
            >
              {tasks &&
                tasks.map((t, idx) => (
                  <TaskContainer key={t.id} {...t} idx={idx} />
                ))}
              {p.placeholder}
              {newTaskAllowed && (
                <NewTaskFormContainer block={block} addTask={addTask} />
              )}
            </div>
          </div>
        </div>
      )}
    </Droppable>
  )
}

const mapStateToProps = (
  state: RootState,
  {
    block,
    changeTopBlock
  }: { block: BlockTypes; changeTopBlock: (block: BlockTypes) => void }
) => ({
  tasks: block.taskList.map(id => state.tasks[id]),
  block: block,
  changeTopBlock: () => changeTopBlock(block)
})

const mapDispatchToProps = { addTask }

const ConnectedBlock = connect(mapStateToProps, mapDispatchToProps)(Block)

export default ConnectedBlock
