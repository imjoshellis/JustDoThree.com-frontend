import React, { Component } from 'react'
import { DragDropContext, DropResult, DragStart } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import { RootState } from '../reducers'
import BlockGridView from './BlockGridView'
import { BlockObj, BlockTypes, moveTask } from './blocksSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

interface Props {
  blocks: BlockObj
  topBlock: BlockTypes
  moveTask: ActionCreatorWithPayload<{
    id: number
    source: DropResult['source']
    destination: DropResult['destination']
    start: BlockTypes
    end: BlockTypes
  }>
}

interface State {
  topBlock: BlockTypes
  resetBlock: BlockTypes
  activeBlock: number
}

export class BlockGridContainer extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      topBlock: this.props.topBlock,
      resetBlock: this.props.topBlock,
      activeBlock: 0
    }
  }

  changeTopBlock = (block: BlockTypes) => {
    this.setState({ topBlock: block })
  }

  reset = () => {
    this.setState({ topBlock: this.state.resetBlock })
  }

  handleDragEnd = (r: DropResult) => {
    const { source, destination } = r
    const draggableId = parseInt(r.draggableId)
    this.setState({ activeBlock: 0 })

    if (!destination) {
      return
    }
    const start = this.props.blocks[parseInt(source.droppableId)]
    const end = this.props.blocks[parseInt(destination.droppableId)]
    this.props.moveTask({
      id: draggableId,
      source,
      destination,
      start,
      end
    })
  }

  handleDragStart = (s: DragStart) => {
    Object.values(this.props.blocks).forEach(b =>
      b.taskList.includes(parseInt(s.draggableId))
        ? this.setState({ activeBlock: b.id })
        : null
    )
  }

  render () {
    let topBlocks = [] as BlockTypes[]
    const blockArray = Object.values(this.props.blocks)
    topBlocks.push(blockArray.filter(b => b.id === this.state.topBlock.id)[0])
    topBlocks = topBlocks.concat(
      blockArray.filter(b => b.level === this.state.topBlock.level + 1)
    )
    const bottomBlocks = blockArray.filter(
      b => b.level === this.state.topBlock.level + 2
    )
    return (
      <>
        <DragDropContext
          onDragEnd={this.handleDragEnd}
          onDragStart={this.handleDragStart}
        >
          <BlockGridView
            changeTopBlock={this.changeTopBlock}
            topBlocks={topBlocks}
            bottomBlocks={bottomBlocks}
            activeBlock={this.state.activeBlock}
          />
        </DragDropContext>
        <div>Current Level: {this.state.topBlock.level}</div>
        <button onClick={this.reset}>Reset</button>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  topBlock: Object.values(state.blocks).filter(b => b.level === 0)[0],
  blocks: state.blocks
})

const mapDispatchToProps = { moveTask }

const ConnectedBlockGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockGridContainer)

export default ConnectedBlockGridContainer
