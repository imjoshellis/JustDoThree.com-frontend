import React, { Component } from 'react'
import { TemplatePropTypes, TemplateStateTypes } from './TemplateTypes'
import TemplateView from './TemplateView'

export class TemplateContainer extends Component<TemplatePropTypes, TemplateStateTypes> {
  constructor (props: TemplatePropTypes) {
    super(props)

    this.state = {}
  }

  render () {
    return <TemplateView />
  }
}

export default TemplateContainer
