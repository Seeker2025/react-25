import { useState } from 'react'

import { Test } from './Components/Test';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>This's Vine</p>
      <Test/>
    </>
  )
}

export default App
