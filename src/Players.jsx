import { useState, useEffect } from 'react'
import { PlayerCard } from './PlayerCard'
import { players } from './Helpers/Players'
import './styles/Players.css'


export const Players = () => {

  const [playerState, setPlayersState] = useState([]);

  useEffect(() => {
    setPlayersState(players);
  }, []);

  return (
    <div className="players">
        {players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
    </div>
  )
}
