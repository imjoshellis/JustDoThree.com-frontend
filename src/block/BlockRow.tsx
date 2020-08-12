import React, { FunctionComponent } from 'react'
import ConnectedBlock from './Block'
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
        <ConnectedBlock block={b} />
      ))}
    </div>
  )
}

export default TaskBlockRow
