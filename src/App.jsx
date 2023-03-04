import { useState } from 'react'
import { PlayerCard } from './PlayerCard'
import { Players } from './Players'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Players />
    </div>
  )
}

export default App
