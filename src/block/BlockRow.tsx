import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import ConnectedBlock from './Block'
import { BlockTypes } from './blocksSlice'

interface Props {
  blocks: BlockTypes[]
  setTopBlock: (topBlock: BlockTypes) => void
  sourceBlock: number
  destinationBlock: number
  setEditing: (n: number) => void
}

export const BlockRow: React.FC<Props> = ({
  blocks,
  setTopBlock,
  sourceBlock,
  destinationBlock,
  setEditing
}) => {
  const [idx, setIdx] = useState(0)
  const [direction, setDirection] = useState(1)

  const Btn = ({
    text,
    onClick,
    disabled
  }: {
    text: string
    onClick: () => void
    disabled: boolean
  }) => (
    <button
      className={`p-2 py-1 m-1 text-sm font-bold tracking-wider rounded select-none ${
        disabled
          ? 'bg-gray-70 pointer-events-none cursor-not-allowed'
          : 'bg-blue-50 cursor-pointer'
      }`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  )

  const IncIdxBtn = ({ disabled }: { disabled: boolean }) => (
    <Btn
      onClick={() => {
        setDirection(1)
        setIdx(idx + 1)
      }}
      text='increment'
      disabled={disabled}
    />
  )

  const DecIdxBtn = ({ disabled }: { disabled: boolean }) => (
    <Btn
      onClick={() => {
        setDirection(-1)
        setIdx(idx - 1)
      }}
      text='decrement'
      disabled={disabled}
    />
  )

  return (
    <div className='md:max-w-2xl lg:max-w-full'>
      <div className='flex flex-col mt-4 md:grid md:grid-cols-2 md:content-between md:gap-4 lg:grid-cols-4'>
        <AnimateSharedLayout>
          {blocks.slice(idx, idx + 4).map((b: BlockTypes) => (
            <motion.div
              key={b.id}
              layoutId={b.id.toString()}
              initial={{ opacity: 0, x: direction * 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeOut' }}
              className='flex'
            >
              <ConnectedBlock
                block={b}
                sourceBlock={sourceBlock}
                destinationBlock={destinationBlock}
                setTopBlock={setTopBlock}
                setEditing={setEditing}
              />
            </motion.div>
          ))}
        </AnimateSharedLayout>
      </div>
      {blocks.length > 4 && (
        <div className='flex justify-between mt-1'>
          <DecIdxBtn disabled={idx === 0} />
          <IncIdxBtn disabled={idx > blocks.length - 5} />
        </div>
      )}
    </div>
  )
}

export default BlockRow
