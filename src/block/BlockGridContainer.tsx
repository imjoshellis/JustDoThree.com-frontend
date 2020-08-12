import React, { Component } from 'react'
import { BlockTypes } from './blocksSlice'
import BlockGridView from './BlockGridView'
import { RootState } from '../reducers'
import { connect } from 'react-redux'

interface Props {
  blocks: BlockTypes[]
  topBlock: BlockTypes
}

interface State {
  topBlock: BlockTypes
  resetBlock: BlockTypes
}

export class BlockGridContainer extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      topBlock: this.props.topBlock,
      resetBlock: this.props.topBlock
    }
  }

  changeTopBlock = (block: BlockTypes) => {
    this.setState({ topBlock: block })
  }

  reset = () => {
    this.setState({ topBlock: this.state.resetBlock })
  }

  render () {
    let topBlocks = [] as BlockTypes[]
    topBlocks.push(
      this.props.blocks.filter(b => b.id === this.state.topBlock.id)[0]
    )
    topBlocks = topBlocks.concat(
      this.props.blocks.filter(b => b.level === this.state.topBlock.level + 1)
    )
    const bottomBlocks = this.props.blocks.filter(
      b => b.level === this.state.topBlock.level + 2
    )
    return (
      <>
        <BlockGridView
          changeTopBlock={this.changeTopBlock}
          topBlocks={topBlocks}
          bottomBlocks={bottomBlocks}
        />
        <div>Current Level: {this.state.topBlock.level}</div>
        <button onClick={this.reset}>Reset</button>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  topBlock: state.blocks.filter(b => b.level === 0)[0],
  blocks: state.blocks
})

const ConnectedBlockGridContainer = connect(mapStateToProps)(BlockGridContainer)

export default ConnectedBlockGridContainer
