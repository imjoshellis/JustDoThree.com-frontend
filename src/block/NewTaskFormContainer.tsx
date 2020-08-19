import React, { Component } from 'react'
import { BlockTypes } from './blocksSlice'
import NewTaskFormView from './NewTaskFormView'

interface Props {
  addTask: ({
    title,
    block
  }: {
    title: string
    block: BlockTypes
    id: number
  }) => void
  block: BlockTypes
}

interface State {
  text: string
  valid: boolean
}

export class NewTaskFormContainer extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      text: '',
      valid: false
    }
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (this.state.text.trim()) {
      this.props.addTask({
        title: this.state.text.trim(),
        block: this.props.block,
        id: Math.floor(Math.random() * 77 + 70)
      })
      this.setState({ text: '' })
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value })
    this.setState({ valid: this.validate(e.target.value) })
  }

  validate = (t: string) => !!t.trim()

  render () {
    return (
      <NewTaskFormView
        text={this.state.text}
        valid={this.state.valid}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default NewTaskFormContainer
