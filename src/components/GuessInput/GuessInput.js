import React from "react";

const WORD_LENGTH = 5;

function GuessInput({ addGuess, isGameOver }) {
  const [tempGuess, setTempGuess] = React.useState("");

  const onInputChangeHandler = (e) => {
    const upperCasedWord = e.target.value.toUpperCase();
    setTempGuess(upperCasedWord);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(tempGuess);
    addGuess(tempGuess);
    setTempGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={isGameOver}
        value={tempGuess}
        onChange={onInputChangeHandler}
      />
    </form>
  );
}

export default GuessInput;
