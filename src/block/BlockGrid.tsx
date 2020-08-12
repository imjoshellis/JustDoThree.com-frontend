import React, { FunctionComponent } from 'react'
import TaskBlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'

interface Props {
  blocks: BlockTypes[]
  level: number
}

export const BlockGrid: FunctionComponent<Props> = ({ blocks, level }) => {
  const topBlocks = blocks.filter(
    b => b.level === level || b.level === level + 1
  )
  const bottomBlocks = blocks.filter(b => b.level === level + 2)
  return (
    <div className='grid grid-rows-2 gap-4'>
      <TaskBlockRow blocks={topBlocks} />
      <TaskBlockRow blocks={bottomBlocks} />
    </div>
  )
}

export default BlockGrid
