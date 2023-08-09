import { useState } from 'react'
import Authenticate from './components/Authenticate'

import './App.css'
import SignUpForm from './components/SignUpForm'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm setToken={ setToken} />
      <Authenticate token={token } />
    </>
  )
}

export default App
