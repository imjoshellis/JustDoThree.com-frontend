import React, { Component } from 'react'
import { FooterPropTypes, FooterStateTypes } from './FooterTypes'
import FooterView from './FooterView'

export class FooterContainer extends Component<FooterPropTypes, FooterStateTypes> {
  constructor (props: FooterPropTypes) {
    super(props)

    this.state = {}
  }

  render () {
    return <FooterView />
  }
}

export default FooterContainer
