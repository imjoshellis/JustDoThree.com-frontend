import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import store from './app/store'
import './index.css'
import './tailwind.output.css'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebaseKey,
  authDomain: process.env.REACT_APP_firebaseAuthDomain,
  databaseURL: process.env.REACT_APP_firebaseDatabaseURL,
  projectId: process.env.REACT_APP_firebaseProjectId,
  storageBucket: process.env.REACT_APP_firebaseStorageBucket,
  messagingSenderId: process.env.REACT_APP_firebaseSenderId,
  appId: process.env.REACT_APP_firebaseAppId,
  measurementId: process.env.REACT_APP_firebaseMeasurementId
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
