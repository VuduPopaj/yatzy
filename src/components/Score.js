import React from "react";
import text from "./Constants"
import TableScores from './TableScores'
const Score = ({ roll, takeTurn, disabledBtn, setFinalRoll }) => {
  const submitScore = (category) => {
    takeTurn(category(roll));
  };

  return (
    <div>
      <h2>Score</h2>
      <TableScores
        disabledBtn={disabledBtn}
        roll={roll}
        section={text.upperSection}
        submitScore={submitScore}
        setFinalRoll={setFinalRoll}
      />
      <TableScores
        disabledBtn={disabledBtn}
        roll={roll}
        section={text.lowerSection}
        submitScore={submitScore}
        setFinalRoll={setFinalRoll}
      />
    </div>
  );
};

export default Score;
