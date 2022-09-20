import React from 'react'
import "./GameOver.css"


const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game over</h1>
      <button onClick={retry}>Reset the game</button>
    </div>
  )
}

export default GameOver