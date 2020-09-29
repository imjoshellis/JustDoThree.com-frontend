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
  apiKey: process.env.firebaseKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseURL: process.env.firebaseDatabaseURL,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseSenderId,
  appId: process.env.fierbaseAppId,
  measurementId: process.env.firebaseMeasurementId
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
