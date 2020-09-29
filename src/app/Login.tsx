import firebase from 'firebase'
import React from 'react'

export const Login: React.FC = () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {})
    .catch(function (error) {
      console.error(error)
    })

  return (
    <>
      <div>login page</div>
    </>
  )
}

export default Login
