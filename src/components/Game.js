import React, { useState } from "react";
import Dice from "./Dice";
import Score from "./Score";
import Endgame from "./Endgame";

function Game() {
  let [turn, setTurn] = useState(0);
  let [totalScore, setTotalScore] = useState(0);
  let [roll, setRoll] = useState([0, 0, 0, 0, 0]);
  let [hold, setHold] = useState([false, false, false, false, false]);
  let [rollCount, setRollCount] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [gameCount, setGameCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);
  const [finalRoll, setFinalRoll] = useState(false);

  let takeTurn = (score) => {
    if (turn === 12) {
      if (highScore < totalScore) {
        setHighScore(totalScore + score);
      }
      setDisabledButton(true);
      setTotalScore(totalScore + score);
      setTurn(turn + 1);
      setRoll([0, 0, 0, 0, 0]);
      setHold([false, false, false, false, false]);
      setRollCount(0);
    } else {
      setTotalScore(totalScore + score);
      setTurn(turn + 1);
      setRoll([0, 0, 0, 0, 0]);
      setHold([false, false, false, false, false]);
      setRollCount(0);
      setDisabledButton(true);
    }
  };

  let newGame = () => {
    setTotalScore(0);
    setTurn(0);
    setRoll([0, 0, 0, 0, 0]);
    setHold([false, false, false, false, false]);
    setRollCount(0);
    setGameCount(gameCount + 1);
  };

  return (
    <div className="App">
      <header className="game-header">
        <h2>Yatzy</h2>
        <h3 className="header-item pull-left">Turns: {turn} of 13</h3>
        <h3 className="header-item pull-right">Your score: {totalScore}</h3>
      </header>

      <div className="container">
        {turn >= 13 ? (
          <Endgame
            newGame={newGame}
            totalScore={totalScore}
            highScore={highScore}
          />
        ) : (
          <Dice
            roll={roll}
            setRoll={setRoll}
            hold={hold}
            setHold={setHold}
            rollCount={rollCount}
            setRollCount={setRollCount}
            setDisabledBtn={setDisabledButton}
            disabledBtn={disabledButton}
            finalRoll={finalRoll}
            setFinalRoll={setFinalRoll}
          />
        )}
        <hr />
        <Score
          roll={roll}
          takeTurn={takeTurn}
          key={gameCount}
          disabledBtn={disabledButton}
          setFinalRoll={setFinalRoll}
        />
      </div>
    </div>
  );
}

export default Game;
