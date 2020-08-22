import React, { Component } from 'react'
import { BlockTypes } from './blocksSlice'
import NewTaskFormView from './NewTaskFormView'
import shortid from 'shortid'

interface Props {
  addTask: ({
    title,
    block
  }: {
    title: string
    block: BlockTypes
    id: string
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

  handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (this.state.text.trim().length > 0) {
      this.props.addTask({
        title: this.state.text.trim(),
        block: this.props.block,
        id: shortid.generate()
      })
      this.setState({ text: '', valid: false })
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      text: e.target.value,
      valid: this.validate(e.target.value)
    })
  }

  validate = (t: string): boolean => t.trim().length > 0

  render (): JSX.Element {
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
