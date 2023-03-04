import React, { useState } from 'react'
import './styles/PlayerCard.css'
import dottedCircle from './assets/plus-circle-dotted.svg'
import dottedCircleHovered from './assets/plus-circle-dotted-hovered.svg'

import heartFill from './assets/heart-fill.svg'
import { ReactionsPopUp } from './ReactionsPopUp'


export const PlayerCard = ( {player} ) => {
    const [liked, setLiked] = useState(false);
    const [reactionButton, setReactionButton] = useState(dottedCircle);

    const handleReactionButtonHover = () => {
        if (reactionButton === dottedCircle) {
            setReactionButton(dottedCircleHovered);
        }
    }

    const handleReactionButtonLeave = () => {
        if (reactionButton === dottedCircleHovered) {
            setReactionButton(dottedCircle);
        }
    }




  return (
    <div className="element">
        <div className="card-wrapper">
            <div className="player-card-container">
                <div className="card-front">
                    <img src={ player.img } alt="" />
                </div>
                <div className="card-back">
                    Back of card
                </div>
            </div>
        </div>
        <div className="bottom-reaction-button">
            <div className="reaction-button">
                <img src={ reactionButton } alt="" onMouseEnter={handleReactionButtonHover} onMouseLeave={handleReactionButtonLeave}/>
            </div>
            <ReactionsPopUp />

        </div>
    </div>
    
  )
}
