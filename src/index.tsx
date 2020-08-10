import { configureStore, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './index.css'
import * as serviceWorker from './serviceWorker'
import './tailwind.output.css'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

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
