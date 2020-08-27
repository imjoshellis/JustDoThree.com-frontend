import React, { Component } from 'react'
import {
  DragDropContext,
  DragStart,
  DragUpdate,
  DropResult
} from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import { MoveTaskPayload } from '../api/jd3API'
import { RootState } from '../app/reducer'
import { AppDispatch } from '../app/store'
import { TaskObj, TaskTypes } from '../task/tasksSlice'
import BlockGridView from './BlockGridView'
import {
  BlockObj,
  BlockTypes,

  moveTaskThunk, tempMoveTask
} from './blocksSlice'
import EditTaskModal from './EditTaskModal'

interface Props {
  blocks: BlockObj
  tasks: TaskObj
  topBlock: BlockTypes
  moveTaskThunk: (payload: MoveTaskPayload) => void
  tempMoveTask: (payload: any) => void
}

interface State {
  topBlockId: string
  prevBlockList: string[]
  resetBlock: string
  sourceBlock: string
  destinationBlock: string
  editing: string
  editingTask: TaskTypes | null
}

export class BlockGridContainer extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      topBlockId: this.props.topBlock.id,
      prevBlockList: [this.props.topBlock.id],
      resetBlock: this.props.topBlock.id,
      sourceBlock: '',
      destinationBlock: '',
      editing: '',
      editingTask: null
    }
  }

  componentDidUpdate = (prevProps: Props): void => {
    if (prevProps.topBlock !== this.props.topBlock) {
      this.setState({ topBlockId: this.props.topBlock.id })
    }
  }

  setEditing = (id: string): void =>
    this.setState({ editing: id, editingTask: this.props.tasks[id] })

  generateBlockRows = (
    topBlockId: string
  ): { topBlocks: BlockTypes[]; bottomBlocks: BlockTypes[] } => {
    const topBlock = this.props.blocks[topBlockId]
    const topBlocks = [
      topBlock,
      ...topBlock.blockList
        .filter(id => Object.keys(this.props.blocks).includes(id))
        .map(id => this.props.blocks[id])
    ]
    const bottomBlocks = [] as BlockTypes[]
    topBlocks
      .slice(1)
      .forEach(b =>
        b.blockList.forEach((id: string) =>
          Object.keys(this.props.blocks).includes(id)
            ? bottomBlocks.push(this.props.blocks[id])
            : null
        )
      )
    return { topBlocks, bottomBlocks }
  }

  setTopBlock = (topBlockId: string): void => {
    this.setState(s => ({
      ...s,
      topBlockId,
      prevBlockList: [...s.prevBlockList, topBlockId]
    }))
  }

  back = (): void => {
    const prevBlockList = [...this.state.prevBlockList]
    if (prevBlockList.length > 1) {
      prevBlockList.pop()
    }
    const prevBlockId = prevBlockList[prevBlockList.length - 1]
    this.setState({ topBlockId: prevBlockId, prevBlockList: prevBlockList })
  }

  handleDragEnd = (r: DropResult): void => {
    const { source, destination } = r
    const draggableId = r.draggableId
    this.setState({ sourceBlock: '', destinationBlock: '' })

    if (destination === undefined || destination === null) {
      return
    }
    const start = this.props.blocks[source.droppableId]
    const end = this.props.blocks[destination.droppableId]
    this.props.tempMoveTask({
      id: draggableId,
      source,
      destination,
      start,
      end
    })

    this.props.moveTaskThunk({
      id: draggableId,
      source,
      destination,
      start,
      end
    })
  }

  handleDragStart = (s: DragStart): void => {
    this.setState({ sourceBlock: s.source.droppableId })
  }

  handleDragUpdate = (u: DragUpdate): void => {
    if (u.destination !== undefined && u.destination !== null) {
      this.setState({ destinationBlock: u.destination.droppableId })
    } else {
      this.setState({ destinationBlock: u.source.droppableId })
    }
  }

  render (): JSX.Element {
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
            setEditing={this.setEditing}
            {...this.generateBlockRows(this.state.topBlockId)}
          />
        </DragDropContext>
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
        {this.state.editing !== '' && (
          <EditTaskModal
            setEditing={this.setEditing}
            editingTask={this.state.editingTask}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = (
  state: RootState
): { blocks: BlockObj; tasks: TaskObj } => ({
  blocks: state.blocks,
  tasks: state.tasks
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  moveTaskThunk: (payload: MoveTaskPayload) => dispatch(moveTaskThunk(payload)),
  tempMoveTask: (payload: any) => dispatch(tempMoveTask(payload))
})

const ConnectedBlockGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockGridContainer)

export default ConnectedBlockGridContainer
