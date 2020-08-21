import React from 'react'
import BlockRow from './BlockRow'
import { BlockTypes } from './blocksSlice'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

interface Props {
  topBlocks: BlockTypes[]
  bottomBlocks: BlockTypes[]
  setTopBlock: (topBlock: BlockTypes) => void
  sourceBlock: number
  setEditing: (n: number) => void
  destinationBlock: number
}

export const BlockGridView: React.FC<Props> = ({
  topBlocks,
  bottomBlocks,
  setTopBlock,
  sourceBlock,
  setEditing,
  destinationBlock
}) => (
  <div className='flex flex-col'>
    <AnimatePresence initial={false}>
      <AnimateSharedLayout>
        <BlockRow
          blocks={topBlocks.slice(0, 4)}
          sourceBlock={sourceBlock}
          destinationBlock={destinationBlock}
          setEditing={setEditing}
          setTopBlock={setTopBlock}
        />
        <BlockRow
          blocks={bottomBlocks}
          sourceBlock={sourceBlock}
          destinationBlock={destinationBlock}
          setEditing={setEditing}
          setTopBlock={setTopBlock}
        />
      </AnimateSharedLayout>
    </AnimatePresence>
  </div>
)

export default BlockGridView
