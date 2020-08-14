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
}) => {
  const classes = {
    row: 'flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 mt-4'
  }

  return (
    <div className={classes.row}>
      {blocks.map((b: BlockTypes) => (
        <>
          {b && (
            <ConnectedBlock
              block={b}
              key={b.id}
              changeTopBlock={changeTopBlock}
            />
          )}
        </>
      ))}
    </div>
  )
}

export default BlockRow
