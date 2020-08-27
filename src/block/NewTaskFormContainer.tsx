import React, { Component } from 'react'
import { pushTask } from '../task/tasksSlice'
import { BlockTypes } from './blocksSlice'
import NewTaskFormView from './NewTaskFormView'
import { connect } from 'react-redux'

interface Props {
  pushTask: ({ title, block }: { title: string; block: BlockTypes }) => void
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
      this.props.pushTask({
        title: this.state.text.trim(),
        block: this.props.block
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

const mapDispatchToProps = { pushTask }
const ConnectedNewTaskFormContainer = connect(
  null,
  mapDispatchToProps
)(NewTaskFormContainer)
export default ConnectedNewTaskFormContainer
