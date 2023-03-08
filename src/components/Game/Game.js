import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PrevGuesses from "../PrevGuesses/PrevGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { HappyBanner, SadBanner } from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isWon, setIsWon] = React.useState(false);
  const isLost = guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const isGameOver = isWon || isLost;

  const addGuess = (tempGuess) => {
    if (isGameOver) return;
    if (tempGuess === answer) setIsWon(true);
    setGuesses([...guesses, tempGuess]);
  };

  return (
    <>
      <PrevGuesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} isGameOver={isGameOver} />
      {isWon && <HappyBanner noOfGuesses={guesses.length} />}
      {isLost && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
