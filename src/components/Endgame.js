import React, { useEffect } from "react";

const Endgame = ({ newGame, totalScore, highScore }) => {
  useEffect(() => {
    localStorage.setItem("Highscore", JSON.stringify(highScore));
  }, [highScore]);
  useEffect(() => {
    localStorage.setItem("Total score", JSON.stringify(totalScore));
  }, [totalScore]);

  return (
    <div>
      <h2>Game over!</h2>
      <h2>Highscore: {highScore}</h2>
      <h3>Score: {totalScore}</h3>
      <button onClick={newGame} className="btn roll-btn">
        New game
      </button>
    </div>
  );
};

export default Endgame;
