import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import { TaskTypes } from '../task/tasksSlice'
import TaskContainer from '../task/TaskContainer'
import { BlockTypes } from './blocksSlice'

interface Props {
  tasks: TaskTypes[]
  title: string
}

export const Block: FunctionComponent<Props> = ({ tasks, title }) => {
  let classes = {
    base: 'bg-gray-90 rounded-lg rounded-b overflow-hidden',
    hover: ''
  }

  return (
    <div className={classes.base}>
      <div className='h-32 overflow-hidden' />

      <div className='p-2'>
        <h2 className='px-2 mb-2 text-sm font-bold tracking-wider uppercase'>
          {title}
        </h2>
        {tasks && tasks.map(t => <TaskContainer key={t.id} {...t} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (
  state: RootState,
  { block }: { block: BlockTypes }
) => ({
  tasks: state.tasks.filter(t => t.block === block.id),
  title: block.title
})

const ConnectedBlock = connect(mapStateToProps)(Block)

export default ConnectedBlock
