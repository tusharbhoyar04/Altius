import { useState } from 'react'

import './App.css'
import LoginPage from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPage/>

    </>
  )
}

export default App
