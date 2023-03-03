import { useState } from 'react'
import { PlayerCard } from './assets/PlayerCard'
import { Players } from './assets/Players'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Players stats
      <Players />
    </div>
  )
}

export default App
