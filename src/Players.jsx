import { useState, useEffect } from 'react'
import { PlayerCard } from './PlayerCard'
import { players } from './Helpers/Players'
import plus from './assets/plus.svg'
import x from './assets/x.svg'
import './styles/Players.css'
import { PlayerForm } from './PlayerForm'
import { handleMove } from './Helpers/HandleMove'


export const Players = () => {

  const [playerState, setPlayersState] = useState([]);
  const [playerFormState, setPlayerFormState] = useState(false);
  

  const handlePlayerForm = () => {
    setPlayerFormState(!playerFormState);
  }

  const addPlayer = ( newPlayer ) => {
    setPlayersState([...playerState, newPlayer]);
    setPlayerFormState(!playerFormState);
  }

  useEffect(() => {
    setPlayersState(players);
  }, []);

  return (
    <>
    
      <div className="players">
          {playerState.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
      </div>

      <div className="add-player">
        <button className={`add-player-button ${playerFormState ? 'red' : 'green'}`} onClick={handlePlayerForm}>
          <img src={ playerFormState ? x : plus } alt=""/>
        </button>
      </div>

      <PlayerForm show={playerFormState} onPlayerSubmit={addPlayer}/>
    </>
  )
}
