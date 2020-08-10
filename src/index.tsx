import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'
import * as serviceWorker from './serviceWorker'
import './tailwind.output.css'

const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_TASK = 'TOGGLE_TASK'

interface Action {
  type: string
  payload?: any
  id?: number
}

const task = ({ state = [], action }: { state: Array<object>; action: Action }) => {
  interface Task {
    id: number
  }
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]
    case REMOVE_TASK:
      return state.filter((task: { id?: number }): boolean => task.id !== action.id)
    case TOGGLE_TASK:
      return state.map((task: { id?: number }): any => {
        if (task.id === action.id) {
          return { ...task, completed: true }
        }
        return task
      })
    default:
      return state
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
