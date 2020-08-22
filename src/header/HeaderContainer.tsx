import React, { Component } from 'react'
import { HeaderPropTypes } from './HeaderTypes'
import HeaderView from './HeaderView'

export class HeaderContainer extends Component<HeaderPropTypes> {
  render (): JSX.Element {
    return <HeaderView />
  }
}

export default HeaderContainer
