import React, { FunctionComponent } from 'react'
import BlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'

interface Props {
  blocks: BlockTypes[]
  level: number
}

export const BlockGrid: FunctionComponent<Props> = ({ blocks, level }) => {
  const topBlocks = [] as BlockTypes[]
  topBlocks.push(blocks.filter(b => b.level === level)[0])
  topBlocks.concat(blocks.filter(b => b.level === level + 1))
  const bottomBlocks = blocks.filter(b => b.level === level + 2)
  return (
    <div className='grid grid-rows-2 gap-4'>
      <BlockRow blocks={topBlocks} />
      <BlockRow blocks={bottomBlocks} />
    </div>
  )
}

export default BlockGrid
