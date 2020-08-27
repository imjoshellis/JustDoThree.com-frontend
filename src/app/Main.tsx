import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import ConnectedBlockGridContainer from '../block/BlockGridContainer'
import { BlockTypes, fetchBlocks } from '../block/blocksSlice'
import { fetchTasks } from '../task/tasksSlice'
import { RootState } from './reducer'
import { motion, AnimatePresence } from 'framer-motion'
import { SyncLoader } from 'react-spinners'

export const Main: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [todayBlock, setTodayBlock] = useState<BlockTypes | undefined>(
    undefined
  )
  const [monthBlock, setMonthBlock] = useState<BlockTypes | undefined>(
    undefined
  )
  const [topBlock, setTopBlock] = useState<BlockTypes | undefined>(undefined)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlocks())
    dispatch(fetchTasks())
  }, [dispatch])

  const blocks = useSelector((state: RootState) => state.blocks)
  const tasks = useSelector((state: RootState) => state.tasks)

  const today = moment()

  useEffect(() => {
    if (Object.keys(blocks).length > 0 && Object.keys(tasks).length > 0) {
      setLoading(false)
      const tb = Object.values(blocks).filter(
        b =>
          moment(b.startDate).format('YYYY-MM-DD') ===
            today.format('YYYY-MM-DD') && b.kind === 'day'
      )[0]
      setTodayBlock(tb)

      const mb = Object.values(blocks).filter(
        b =>
          moment(b.startDate).format('YYYY-MM-DD') <=
            today.format('YYYY-MM-DD') &&
          b.kind === 'month' &&
          moment(b.endDate).format('YYYY-MM-DD') >= today.format('YYYY-MM-DD')
      )[0]
      setMonthBlock(mb)
      setTopBlock(Object.values(blocks).filter(b => b.kind === 'life')[0])
    }
  }, [blocks, tasks, setLoading, setTodayBlock, today])

  return (
    <section className='p-8 m-8'>
      {loading ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center justify-center gap-4 '
        >
          <SyncLoader size={8} color='#8d8d8d' />
          <div className='text-gray-30'>Loading Data...</div>
        </motion.div>
      ) : (
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path='/today'>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    exit={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {todayBlock !== undefined && (
                      <ConnectedBlockGridContainer topBlock={todayBlock} />
                    )}
                  </motion.div>
                </Route>
                <Route path='/all'>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    exit={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {topBlock !== undefined && (
                      <ConnectedBlockGridContainer topBlock={topBlock} />
                    )}
                  </motion.div>
                </Route>
                <Route path='/'>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    exit={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {monthBlock !== undefined && (
                      <ConnectedBlockGridContainer topBlock={monthBlock} />
                    )}
                  </motion.div>
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      )}
    </section>
  )
}

export default Main
