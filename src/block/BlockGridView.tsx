import React, { FunctionComponent } from 'react'
import BlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'

interface Props {
  topBlocks: BlockTypes[]
  bottomBlocks: BlockTypes[]
  changeTopBlock: (block: BlockTypes) => void
  activeBlock: number
}

export const BlockGridView: FunctionComponent<Props> = ({
  topBlocks,
  bottomBlocks,
  changeTopBlock,
  activeBlock
}) => (
  <div className='flex flex-col'>
    <BlockRow
      blocks={topBlocks}
      activeBlock={activeBlock}
      changeTopBlock={changeTopBlock}
    />
    <BlockRow
      blocks={bottomBlocks}
      activeBlock={activeBlock}
      changeTopBlock={changeTopBlock}
    />
  </div>
)

export default BlockGridView
