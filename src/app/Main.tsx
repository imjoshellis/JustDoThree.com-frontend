import React, { FunctionComponent } from 'react'
import ConnectedBlockGridContainer from '../block/BlockGridContainer'

export const Main: FunctionComponent = () => {
  let classes = {
    base: 'm-8 p-8'
  }

  return (
    <section className={classes.base}>
      <ConnectedBlockGridContainer />
    </section>
  )
}

export default Main
