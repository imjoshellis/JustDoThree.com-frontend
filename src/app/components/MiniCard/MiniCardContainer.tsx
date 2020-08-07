import React, { Component } from 'react'
import { MiniCardPropTypes } from './MiniCardTypes'
import MiniCardView from './MiniCardView'

export class MiniCardContainer extends Component<MiniCardPropTypes> {
  render () {
    return <MiniCardView kind={this.props.kind} />
  }
}

export default MiniCardContainer
