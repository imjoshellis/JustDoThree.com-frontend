import React, { Component } from 'react'
import { DotPropTypes, DotStateTypes } from './DotTypes'
import Dot from './DotView'

export class DotContainer extends Component<DotPropTypes, DotStateTypes> {
  constructor (props: DotPropTypes) {
    super(props)

    this.state = {
      hover: false,
      status: this.props.status
    }
  }

  hoverOn = () => this.setState({ hover: true })
  hoverOff = () => this.setState({ hover: false })
  changeStatus = () =>
    this.setState({ status: this.state.status === 'done' ? 'todo' : 'done' })

  render () {
    return (
      <div
        onClick={this.changeStatus}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <Dot hover={this.state.hover} status={this.state.status} />
      </div>
    )
  }
}

export default DotContainer
