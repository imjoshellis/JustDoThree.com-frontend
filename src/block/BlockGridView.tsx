import React, { FunctionComponent } from 'react'
import BlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'

interface Props {
  topBlocks: BlockTypes[]
  bottomBlocks: BlockTypes[]
  changeTopBlock: (block: BlockTypes) => void
}

export const BlockGridView: FunctionComponent<Props> = ({
  topBlocks,
  bottomBlocks,
  changeTopBlock
}) => (
  <div className='flex flex-col'>
    <BlockRow blocks={topBlocks} changeTopBlock={changeTopBlock} />
    <BlockRow blocks={bottomBlocks} changeTopBlock={changeTopBlock} />
  </div>
)

export default BlockGridView
