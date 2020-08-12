import React, { FunctionComponent } from 'react'
import TaskBlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'

interface Props {
  topBlocks: BlockTypes[]
  bottomBlocks: BlockTypes[]
}

export const BlockGridView: FunctionComponent<Props> = ({
  topBlocks,
  bottomBlocks
}) => {
  return (
    <div className='grid grid-rows-2 gap-4'>
      <TaskBlockRow blocks={topBlocks} />
      <TaskBlockRow blocks={bottomBlocks} />
    </div>
  )
}

export default BlockGridView
