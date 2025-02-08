import { useState } from 'react'
import './App.css'
import Coin from './componenets/Coin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <Coin />
      </div>
    </>
  )
}

export default App
