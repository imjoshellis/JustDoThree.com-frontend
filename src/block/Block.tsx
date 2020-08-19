import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import TaskContainer from '../task/TaskContainer'
import { addTask, TaskTypes } from '../task/tasksSlice'
import { BlockTypes } from './blocksSlice'
import NewTaskFormContainer from './NewTaskFormContainer'
import { Droppable } from 'react-beautiful-dnd'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  tasks: TaskTypes[]
  block: BlockTypes
  changeTopBlock: () => void
  addTask: ActionCreatorWithPayload<{ title: string; block: BlockTypes }>
  sourceBlock: number
  destinationBlock: number
}

export const Block: FunctionComponent<Props> = ({
  tasks,
  block,
  changeTopBlock,
  addTask,
  sourceBlock,
  destinationBlock
}) => {
  const isDropDisabled = tasks.length > 2 && sourceBlock !== block.id
  return (
    <Droppable
      droppableId={block.id.toString()}
      isDropDisabled={isDropDisabled}
    >
      {(p, s) => {
        const tasksFull = tasks.length === 3
        const tasksTempFull =
          tasks.length === 2 && s.isDraggingOver && sourceBlock !== block.id
        const newTaskAllowed = !tasksFull && !tasksTempFull

        return (
          <motion.div
            className={`flex flex-col max-w-xs mt-4 rounded-lg md:mt-0 transition-all duration-500 ${
              s.isDraggingOver ? 'bg-gray-95' : 'bg-gray-90'
            }`}
          >
            <div className='flex flex-col flex-grow p-2 py-4'>
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
              </div>
              <AnimatePresence>
                {newTaskAllowed && sourceBlock === 0 && (
                  <motion.div
                    initial={{ y: -10, opacity: 0, height: 0 }}
                    animate={{ y: 0, opacity: 1, height: '100%' }}
                    exit={{ y: -10, opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <NewTaskFormContainer block={block} addTask={addTask} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )
      }}
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
