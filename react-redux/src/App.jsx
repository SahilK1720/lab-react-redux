import { useState } from 'react'
import './App.css'
import LikeCounterApp from './LikeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LikeCounterApp/>
    </>
  )
}

export default App
