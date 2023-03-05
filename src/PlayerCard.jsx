import React, { useState } from 'react'
import './styles/PlayerCard.css'
import dottedCircle from './assets/plus-circle-dotted.svg'
import dottedCircleHovered from './assets/plus-circle-dotted-hovered.svg'

import heartFill from './assets/heart-fill.svg'
import { ReactionsPopUp } from './ReactionsPopUp'


export const PlayerCard = ( {player} ) => {
    const [liked, setLiked] = useState(false);
    const [reactionButton, setReactionButton] = useState(dottedCircle);
    const [showReactions, setShowReactions] = useState(false);

    const handleReactionButton = () => {
        setShowReactions(!showReactions);
    }

    const reactionChoice = (reaction) => {
        setShowReactions(false);
        setReactionButton(reaction);
    }



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
                    <div className="card-back-content">
                        <div className="headers">
                            <h1>{ player.name }</h1>
                            <p>{ player.position }</p>
                            <h2>{ player.overall }</h2>
                        </div>
                        <div className="stats">
                            <div className='left'>
                                <div className="stat">
                                    <h3 className='value'>{ player.pace }</h3>
                                    <h3>PAC</h3>
                                </div>
                                <div className="stat">
                                    <h3 className='value'>{ player.shooting }</h3>
                                    <h3>SHO</h3>
                                </div>
                                <div className="stat">
                                    <h3 className='value'>{ player.passing }</h3>
                                    <h3>PAS</h3>
                                </div>
                            </div>

                            <div className="right">
                                <div className="stat">
                                    <h3 className='value'>{ player.dribbling }</h3>
                                    <h3>DRI</h3>
                                </div>
                                <div className="stat">
                                    <h3 className='value'>{ player.defending }</h3>
                                    <h3>DEF</h3>
                                </div>
                                <div className="stat">
                                    <h3 className='value'>{ player.physical }</h3>
                                    <h3>PHY</h3>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-reaction-button">
            <div className="reaction-button">
                <img onClick={ handleReactionButton } src={ reactionButton } alt="" onMouseEnter={handleReactionButtonHover} onMouseLeave={handleReactionButtonLeave}/>
            </div>
            <ReactionsPopUp show={ showReactions } onReactionClick={ reactionChoice }/>

        </div>
    </div>
    
  )
}
