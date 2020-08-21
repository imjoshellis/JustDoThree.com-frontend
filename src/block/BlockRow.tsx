import React from 'react'
import ConnectedBlock from './Block'
import { BlockTypes } from './blocksSlice'

interface Props {
  blocks: BlockTypes[]
  setTopBlock: (topBlock: BlockTypes) => void
  sourceBlock: number
  destinationBlock: number
}

export const BlockRow: React.FC<Props> = ({
  blocks,
  setTopBlock,
  sourceBlock,
  destinationBlock
}) => (
  <div className='flex flex-col mt-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
    {blocks.map((b: BlockTypes) => (
      <ConnectedBlock
        block={b}
        key={b.id}
        sourceBlock={sourceBlock}
        destinationBlock={destinationBlock}
        setTopBlock={setTopBlock}
      />
    ))}
  </div>
)

export default BlockRow
