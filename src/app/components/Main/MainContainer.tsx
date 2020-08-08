import React, { Component } from 'react'
import { MainPropTypes, MainStateTypes } from './MainTypes'
import MainView from './MainView'

export class MainContainer extends Component<MainPropTypes, MainStateTypes> {
  constructor (props: MainPropTypes) {
    super(props)

    this.state = {}
  }

  render () {
    return <MainView />
  }
}

export default MainContainer
