import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
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
  const [direction, setDirection] = useState(0)

  const Btn = ({
    content,
    onClick,
    disabled
  }: {
    content: JSX.Element
    onClick: () => void
    disabled: boolean
  }) => (
    <button
      className={`p-2 py-1 m-1 text-sm font-bold tracking-wider rounded select-none transition duration-200 ${
        disabled
          ? 'bg-gray-70 cursor-not-allowed'
          : 'bg-blue-50 cursor-pointer hover:bg-blue-40'
      }`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {content}
    </button>
  )

  useEffect(() => {
    setInterval(() => setDirection(0), 1000)
  }, [direction])

  const IncIdxBtn = ({ disabled }: { disabled: boolean }) => (
    <Btn
      onClick={() => {
        setDirection(1)
        setIdx(idx + 1)
      }}
      content={<ArrowCircleRightIcon />}
      disabled={disabled}
    />
  )

  const DecIdxBtn = ({ disabled }: { disabled: boolean }) => (
    <Btn
      onClick={() => {
        setDirection(-1)
        setIdx(idx - 1)
      }}
      content={<ArrowCircleLeftIcon />}
      disabled={disabled}
    />
  )

  return (
    <div className='md:max-w-2xl lg:max-w-full'>
      <div className='flex flex-col mt-4 select-none md:grid md:grid-cols-2 md:content-between md:gap-4 lg:grid-cols-4'>
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

const ArrowCircleRightIcon: React.FC = props => {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='h-4'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M17 8l4 4m0 0l-4 4m4-4H3'
      />
    </svg>
  )
}

const ArrowCircleLeftIcon: React.FC = props => {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='h-4'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M7 16l-4-4m0 0l4-4m-4 4h18'
      />
    </svg>
  )
}
