import React, { Component } from 'react'
import {
  DragDropContext,
  DropResult,
  DragStart,
  DragUpdate
} from 'react-beautiful-dnd'
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
  prevBlockList: BlockTypes[]
  resetBlock: BlockTypes
  sourceBlock: number
  destinationBlock: number
}

export class BlockGridContainer extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      topBlock: this.props.topBlock,
      prevBlockList: [this.props.topBlock],
      resetBlock: this.props.topBlock,
      sourceBlock: 0,
      destinationBlock: 0
    }
  }

  generateBlockRows = (topBlock: BlockTypes) => {
    const topBlocks = [
      topBlock,
      ...topBlock.blockList.map(id => this.props.blocks[id])
    ]
    const bottomBlocks = [] as BlockTypes[]
    topBlocks
      .slice(1)
      .forEach(b =>
        b.blockList.forEach(id => bottomBlocks.push(this.props.blocks[id]))
      )
    return { topBlocks, bottomBlocks }
  }

  setTopBlock = (topBlock: BlockTypes) => {
    this.setState(s => ({
      ...s,
      topBlock,
      prevBlockList: [...s.prevBlockList, s.topBlock]
    }))
  }

  back = () => {
    const prevBlockList = [...this.state.prevBlockList]
    const prevBlock = prevBlockList[prevBlockList.length - 1]
    this.setTopBlock(prevBlock)

    if (prevBlockList.length > 1) {
      prevBlockList.pop()
    }
    this.setState({ prevBlockList: prevBlockList })
  }

  handleDragEnd = (r: DropResult) => {
    const { source, destination } = r
    const draggableId = parseInt(r.draggableId)
    this.setState({ sourceBlock: 0, destinationBlock: 0 })

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
    this.setState({ sourceBlock: parseInt(s.source.droppableId) })
  }

  handleDragUpdate = (u: DragUpdate) => {
    if (u.destination) {
      this.setState({ destinationBlock: parseInt(u.destination.droppableId) })
    } else {
      this.setState({ destinationBlock: parseInt(u.source.droppableId) })
    }
  }

  render () {
    return (
      <>
        <DragDropContext
          onDragEnd={this.handleDragEnd}
          onDragStart={this.handleDragStart}
          onDragUpdate={this.handleDragUpdate}
        >
          <BlockGridView
            setTopBlock={this.setTopBlock}
            sourceBlock={this.state.sourceBlock}
            destinationBlock={this.state.destinationBlock}
            {...this.generateBlockRows(this.state.topBlock)}
          />
        </DragDropContext>
        <div>Current Level: {this.state.topBlock.level}</div>
        <button
          className='p-2 py-1 m-1 text-sm font-bold tracking-wider rounded bg-blue-50'
          onClick={() => this.setTopBlock(this.state.resetBlock)}
        >
          Reset
        </button>
        <button
          className='p-2 py-1 m-1 text-sm font-bold tracking-wider rounded bg-blue-50'
          onClick={this.back}
        >
          Back
        </button>
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
