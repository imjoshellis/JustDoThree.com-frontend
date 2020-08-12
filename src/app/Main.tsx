import React, { FunctionComponent } from 'react'
import BlockGrid from '../block/BlockGrid'
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
      <ConnectedBlockGrid level={0} />
    </section>
  )
}

const mapStateToProps = (state: RootState, ownProps: { level: number }) => ({
  blocks: state.blocks,
  ...ownProps
})

const ConnectedBlockGrid = connect(mapStateToProps)(BlockGrid)

export default Main
