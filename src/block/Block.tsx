import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FunctionComponent } from 'react'
import { Droppable } from 'react-beautiful-dnd'
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
          <div
            className={`flex flex-col max-w-xs flex-grow p-2 py-4 mt-4 rounded-lg md:mt-0 transition-all duration-200 ${
              s.isDraggingOver ? 'bg-gray-95' : 'bg-gray-90'
            }`}
          >
            <h2
              className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'
              onClick={() => changeTopBlock()}
            >
              {block.title}
            </h2>
            <div
              className='flex flex-col items-start flex-grow'
              {...p.droppableProps}
              ref={p.innerRef}
            >
              {tasks &&
                tasks.map((t, idx) => (
                  <TaskContainer {...t} idx={idx} key={t.id} />
                ))}
              {p.placeholder}
            </div>
            <AnimatePresence initial={false}>
              {newTaskAllowed && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 500,
                    damping: 20
                  }}
                >
                  <div
                    className={`transition duration-500 ${sourceBlock !== 0 &&
                      'opacity-25'}`}
                  >
                    <NewTaskFormContainer block={block} addTask={addTask} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
