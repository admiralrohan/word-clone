import React from "react";

function Banner({ status, children }) {
  return (
    <div className={"banner " + status}>
      <p>{children}</p>
    </div>
  );
}

function HappyBanner({ noOfGuesses }) {
  return (
    <Banner status="happy">
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{noOfGuesses} guesses</strong>.
    </Banner>
  );
}

function SadBanner({ answer }) {
  return (
    <Banner status="sad">
      Sorry, the correct answer is <strong>{answer}</strong>.
    </Banner>
  );
}

export default Banner;
export { HappyBanner, SadBanner };
