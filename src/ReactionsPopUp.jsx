import './styles/ReactionsPopUp.css'
import thumbsUp from './assets/hand-thumbs-up-fill.svg'
import thumbsUpHovered from './assets/hand-thumbs-up-fill-hovered.svg'
import thumbsDown from './assets/hand-thumbs-down-fill.svg'
import heart from './assets/heart-fill.svg'
import hate from './assets/emoji-angry-fill.svg'
import hateHovered from './assets/emoji-angry-fill-hovered.svg'
import { useState } from 'react'


export const ReactionsPopUp = () => {
  const [likeEmoji, setLikeEmoji] = useState(thumbsUp);
  const [hateEmoji, setHateEmoji] = useState(hate);

  
  const handleLikeHover = () => {
    setLikeEmoji(thumbsUpHovered);
  }
  
  const handleLikeLeave = () => {
    setLikeEmoji(thumbsUp);
  }
  
  
  const handleHateHover = () => {
    setHateEmoji(hateHovered);
  }

  const handleHateLeave = () => {
    setHateEmoji(hate);
  }

  return (
    <div className="reactions-container">
      <div className="reactions">
        <img src= { likeEmoji } alt="" onMouseOver={handleLikeHover} onMouseLeave={handleLikeLeave}/>
        <img src= { thumbsDown } alt="" />
        <img src= { heart } alt="" />
        <img src= { hateEmoji } alt="" onMouseOver={handleHateHover} onMouseLeave={handleHateLeave}/>
      </div>
    </div>
  )
}
