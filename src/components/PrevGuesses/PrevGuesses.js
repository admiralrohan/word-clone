import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function PrevGuesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guesses[index] ? checkGuess(guesses[index], answer) : [];
        return <Guess key={index} guess={guess} />;
      })}
    </div>
  );
}

export default PrevGuesses;
