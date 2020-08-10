import React, { Component } from 'react'
import { DotPropTypes, DotStateTypes } from './DotTypes'
import Dot from './DotView'

export class DotContainer extends Component<DotPropTypes, DotStateTypes> {
  constructor (props: DotPropTypes) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <Dot hover={this.props.hover} completed={this.props.completed} />
      </div>
    )
  }
}

export default DotContainer