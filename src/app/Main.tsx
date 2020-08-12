import React, { FunctionComponent } from 'react'
import BlockGridView from '../block/BlockGrid'
import { TaskPropTypes } from '../task/TaskContainer'
import { connect } from 'react-redux'
import { RootState } from '../reducers'

interface Props {
  tasks?: TaskPropTypes[]
}

export const Main: FunctionComponent<Props> = () => {
  let classes = {
    base: 'm-8 p-8'
  }

  return (
    <section className={classes.base}>
      <ConnectedBlockGrid />
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  topBlocks: state.blocks,
  bottomBlocks: state.blocks
})

const ConnectedBlockGrid = connect(mapStateToProps)(BlockGridView)

export default Main
