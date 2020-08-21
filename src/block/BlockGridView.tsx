import React from 'react'
import BlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'

interface Props {
  topBlocks: BlockTypes[]
  bottomBlocks: BlockTypes[]
  setTopBlock: (topBlock: BlockTypes) => void
  sourceBlock: number
  destinationBlock: number
}

export const BlockGridView: React.FC<Props> = ({
  topBlocks,
  bottomBlocks,
  setTopBlock,
  sourceBlock,
  destinationBlock
}) => (
  <div className='flex flex-col'>
    <BlockRow
      blocks={topBlocks}
      sourceBlock={sourceBlock}
      destinationBlock={destinationBlock}
      setTopBlock={setTopBlock}
    />
    <BlockRow
      blocks={bottomBlocks}
      sourceBlock={sourceBlock}
      destinationBlock={destinationBlock}
      setTopBlock={setTopBlock}
    />
  </div>
)

export default BlockGridView
