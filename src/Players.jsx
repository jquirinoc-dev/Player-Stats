import React from 'react'
import { PlayerCard } from './PlayerCard'
import './styles/Players.css'
import chicharito from './assets/img/javier-hernandez.jpg'
import jackGrealish from './assets/img/jack-grealish.jpg'
import lionelMessi from './assets/img/lionel-messi.jpg'
import kylianMbappe from './assets/img/kyllian-mbappe.jpg'
import cristianoRonaldo from './assets/img/cristiano-ronaldo.jpg'
import luisChavez from './assets/img/luis-chavez.jpg'
import kevinDeBruyne from './assets/img/kevin-debruyne.jpg'
import edenHazard from './assets/img/eden-hazard.jpg'
import sadioMane from './assets/img/sadio-mane.jpg'
import gavi from './assets/img/gavi.jpg'


export const Players = () => {

  const players = [
    {
      name: 'Javier Hernandez',
      position: 'Center Forward',
      img: chicharito,
      goals: 0
    },
    {
      name: 'Jack Grealish',
      position: 'Winger',
      img: jackGrealish,
      goals: 0
    },
    {
      name: 'Lionel Messi',
      position: 'Center Forward',
      img: lionelMessi,
      goals: 0
    },
    {
      name: 'Kylian Mbappe',
      position: 'Striker',
      img: kylianMbappe,
      goals: 0
    },
    {
      name: 'Cristiano Ronaldo',
      position: 'Striker',
      img: cristianoRonaldo,
      goals: 0
    },
    {
      name: 'Luis Chavez',
      position: 'Midfielder',
      img: luisChavez,
      goals: 0
    },
    {
      name: 'Kevin De Bruyne',
      position: 'Midfielder',
      img: kevinDeBruyne,
      goals: 0
    },
    {
      name: 'Eden Hazard',
      position: 'Winger',
      img: edenHazard,
      goals: 0
    },
    {
      name: 'Sadio Mane',
      position: 'Winger',
      img: sadioMane,
      goals: 0
    },
    {
      name: 'Gavi',
      position: 'Midfielder',
      img: gavi,
      goals: 0
    }
  ]

  return (
    <div className="players">
        {players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
    </div>
  )
}
