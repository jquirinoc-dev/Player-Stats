import React from 'react'
import { PlayerCard } from './PlayerCard'
import './styles/Players.css'

export const Players = () => {
  return (
    <div className="players">
        <PlayerCard />
        <PlayerCard />
    </div>
  )
}
