import React from 'react'
import BlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'

interface Props {
  topBlocks: BlockTypes[]
  bottomBlocks: BlockTypes[]
  changeTopBlock: (block: BlockTypes) => void
  sourceBlock: number
  destinationBlock: number
}

export const BlockGridView: React.FC<Props> = ({
  topBlocks,
  bottomBlocks,
  changeTopBlock,
  sourceBlock,
  destinationBlock
}) => (
  <div className='flex flex-col'>
    <BlockRow
      blocks={topBlocks}
      sourceBlock={sourceBlock}
      destinationBlock={destinationBlock}
      changeTopBlock={changeTopBlock}
    />
    <BlockRow
      blocks={bottomBlocks}
      sourceBlock={sourceBlock}
      destinationBlock={destinationBlock}
      changeTopBlock={changeTopBlock}
    />
  </div>
)

export default BlockGridView
