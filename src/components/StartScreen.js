import React from 'react'

const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
         <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}> Começar o jogo agora </button>
    </div>
  )
}

export default StartScreen