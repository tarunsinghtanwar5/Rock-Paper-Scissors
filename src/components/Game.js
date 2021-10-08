import React, { useState } from 'react'
import "./Game.css";


const ROCK = 'Rock',
  PAPER = 'Paper',
  SCISSOR = 'Scissor';

const STATES = {
  WIN: 'win',
  DRAW: 'draw',
  LOSE: 'lose',
  INIT : ''
};

const CHOICES = [ROCK, PAPER, SCISSOR];

const IMAGES = {
  [ROCK]: "https://i.imgur.com/TONXH9s.png",
  [PAPER]: "https://i.imgur.com/t2154qR.png",
  [SCISSOR]: "https://i.imgur.com/SXstPKk.png"
};

function Game() {
  const [userChoice, setUserChoice] = useState('');
  const [cpuChoice, setCPUChoice] = useState('');

  const inputHandler = (e) => {
      setUserChoice(e.target.dataset.id);
      setCPUChoice(getCPURandomChoice());
  }

  const onResetHandler = () => {
      setUserChoice('');
      setCPUChoice('');
  }

  const getCPURandomChoice = () => {
      return CHOICES[Math.floor(Math.random() * CHOICES.length)];
  };

  const getResult = () => {
      if(!userChoice || !cpuChoice){
          return STATES.INIT
      }
      if (userChoice === "Rock" && cpuChoice === "Scissors") {
          return STATES.WIN;
      }
      if (userChoice === "Rock" && cpuChoice === "Paper") {
          return STATES.LOSE;
      }
      if (userChoice === "Scissors" && cpuChoice === "Paper") {
          return STATES.WIN;
      }
      if (userChoice === "Scissors" && cpuChoice === "Rock") {
          return STATES.LOSE;
      }
      if (userChoice === "Paper" && cpuChoice === "Rock") {
          return STATES.WIN;
      }
      if (userChoice === "Paper" && cpuChoice === "Scissors") {
          return STATES.LOSE;
      }

      return STATES.DRAW;
  };

    return (
      <>
        {/* Game Selection Area */}
        <div className='game'>
          <img src={IMAGES[ROCK]} onClick={inputHandler} data-id={ROCK} />
          <img src={IMAGES[PAPER]} onClick={inputHandler} data-id={PAPER} />
          <img src={IMAGES[SCISSOR]} onClick={inputHandler} data-id={SCISSOR} />
        </div>

        {/* Result Display */}
        { 
          userChoice && 
          <h2>You Picked <img src={IMAGES[userChoice]}/></h2> 
        }
        { 
          cpuChoice && 
          <h2>Opponent picked <img src={IMAGES[cpuChoice]} /></h2> 
        }
        { 
          !userChoice && !cpuChoice && 
          <h2>Select a card to play the game</h2> 
        }

        <h2>{getResult().toUpperCase()} </h2>
        <div className="button">
        <button onClick={onResetHandler}>Reset</button>
        </div>
      </>
  )
}

export default Game