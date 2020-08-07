import React, { Component } from 'react'
import { CardPropTypes } from './CardTypes'
import CardView from './CardView'

export class CardContainer extends Component<CardPropTypes> {
  render () {
    return <CardView kind={this.props.kind} />
  }
}

export default CardContainer
