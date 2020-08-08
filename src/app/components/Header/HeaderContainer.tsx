import React, { Component } from 'react'
import { HeaderPropTypes } from './HeaderTypes'
import HeaderView from './HeaderView'

export class HeaderContainer extends Component<HeaderPropTypes> {
  render () {
    return <HeaderView />
  }
}

export default HeaderContainer
