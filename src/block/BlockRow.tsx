import React, { FunctionComponent } from 'react'
import ConnectedBlock from './Block'
import { BlockTypes } from './blocksSlice'

interface Props {
  blocks: BlockTypes[]
  changeTopBlock: (block: BlockTypes) => void
}

export const BlockRow: FunctionComponent<Props> = ({
  blocks,
  changeTopBlock
}) => (
  <div className='flex flex-col mt-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
    {blocks.map((b: BlockTypes) => (
      <ConnectedBlock block={b} key={b.id} changeTopBlock={changeTopBlock} />
    ))}
  </div>
)

export default BlockRow
