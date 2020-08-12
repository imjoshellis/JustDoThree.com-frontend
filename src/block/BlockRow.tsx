import React, { FunctionComponent } from 'react'
import TaskBlock from './Block'
import { BlockTypes } from './blocksSlice'

interface Props {
  blocks: BlockTypes[]
}

export const TaskBlockRow: FunctionComponent<Props> = ({ blocks }) => {
  const classes = {
    row: 'grid grid-cols-4 gap-4'
  }

  return (
    <div className={classes.row}>
      {blocks.map((b: BlockTypes) => (
        <TaskBlock block={b.id} />
      ))}
    </div>
  )
}

export default TaskBlockRow
