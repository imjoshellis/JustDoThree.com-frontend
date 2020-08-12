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
    row: 'grid grid-cols-4 gap-4'
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
