import React, { Component } from 'react'
import { MiniCardPropTypes } from './MiniCardTypes'
import MiniCardView from './MiniCardView'

export class MiniCardContainer extends Component<MiniCardPropTypes> {
  render () {
    return <MiniCardView {...this.props} />
  }
}

export default MiniCardContainer
