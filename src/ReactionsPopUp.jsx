import './styles/ReactionsPopUp.css'
import thumbsUp from './assets/hand-thumbs-up-fill.svg'
import thumbsUpHovered from './assets/hand-thumbs-up-fill-hovered.svg'
import thumbsDown from './assets/hand-thumbs-down-fill.svg'
import thumbsDownHovered from './assets/hand-thumbs-down-fill-hovered.svg'
import heart from './assets/heart-fill.svg'
import heartHovered from './assets/heart-fill-hovered.svg'
import hate from './assets/emoji-angry-fill.svg'
import hateHovered from './assets/emoji-angry-fill-hovered.svg'
import { useState } from 'react'


export const ReactionsPopUp = ( {show, onReactionClick} ) => {
  const [likeEmoji, setLikeEmoji] = useState(thumbsUp);
  const [dislikeEmoji, setDislikeEmoji] = useState(thumbsDown);
  const [heartEmoji, setHeartEmoji] = useState(heart);
  const [hateEmoji, setHateEmoji] = useState(hate);
  const className = show ? "reactions-container active" : "reactions-container";


  const handleReactionClick = (reaction) => {
    onReactionClick(reaction);
  }


  
  const handleLikeHover = () => {
    setLikeEmoji(thumbsUpHovered);
  }
  
  const handleLikeLeave = () => {
    setLikeEmoji(thumbsUp);
  }

  const handleDislikeHover = () => {
    setDislikeEmoji(thumbsDownHovered);
  }

  const handleDislikeLeave = () => {
    setDislikeEmoji(thumbsDown);
  }

  const handleHeartHover = () => {
    setHeartEmoji(heartHovered);
  }

  const handleHeartLeave = () => {
    setHeartEmoji(heart);
  }
  
  
  const handleHateHover = () => {
    setHateEmoji(hateHovered);
  }

  const handleHateLeave = () => {
    setHateEmoji(hate);
  }

  return (
    <div className={ className }>
      <div className="reactions">
        <img src= { likeEmoji } alt="" onMouseOver={handleLikeHover} onMouseLeave={handleLikeLeave} onClick={() => handleReactionClick(thumbsUpHovered)}/>
        <img src= { dislikeEmoji } alt="" onMouseOver={handleDislikeHover} onMouseLeave={handleDislikeLeave} onClick={() => handleReactionClick(thumbsDownHovered)}/>
        <img src= { heartEmoji } alt="" onMouseOver={handleHeartHover} onMouseLeave={handleHeartLeave} onClick={() => handleReactionClick(heartHovered)}/>
        <img src= { hateEmoji } alt="" onMouseOver={handleHateHover} onMouseLeave={handleHateLeave} onClick={() => handleReactionClick(hateHovered)}/>
      </div>
    </div>
  )
}
