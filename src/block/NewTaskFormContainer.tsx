import React, { Component } from 'react'
import { BlockTypes } from './blocksSlice'
import NewTaskFormView from './NewTaskFormView'

interface Props {
  addTask: ({ title, block }: { title: string; block: BlockTypes }) => void
  block: BlockTypes
}

interface State {
  text: string
}

export class NewTaskFormContainer extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (this.state.text.trim()) {
      this.props.addTask({
        title: this.state.text.trim(),
        block: this.props.block
      })
      this.setState({ text: '' })
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value })
  }

  render () {
    return (
      <NewTaskFormView
        text={this.state.text}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default NewTaskFormContainer
