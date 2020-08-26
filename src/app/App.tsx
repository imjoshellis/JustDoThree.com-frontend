import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header'
import Footer from './Footer'
import Main from './Main'
import { fetchBlocks } from '../block/blocksSlice'
import { RootState } from './reducer'
import { fetchTasks } from '../task/tasksSlice'

function App (): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlocks())
    dispatch(fetchTasks())
  }, [dispatch])

  const blocks = useSelector((state: RootState) => state.blocks)
  const tasks = useSelector((state: RootState) => state.tasks)

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 pt-8'>
      <Header />
      {Object.keys(blocks).length > 0 && Object.keys(tasks).length > 0 ? (
        <Main />
      ) : (
        'Loading Data...'
      )}
      <Footer />
    </div>
  )
}

export default App
