import React from 'react'
import "./Game.css"


const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
        <p className="point">
          <span>Pontuação: 000</span>
        </p>
        <h1>Adivinha a palavra:</h1>
        <h3>
          Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blankSquare"></span>
        </div>
        <div>
          <div className="letterContainer">
            <p>Tente advinhar uma letra da palavra: </p>
            <form>
              <input type="text" name= "letter" maxLength="1" required />
              <button>Jogar !</button>
            </form>
          </div>
        </div>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas:</p>
          <span>a,</span>
          <span>b,</span>
        </div>
    </div>
  )
}

export default Game