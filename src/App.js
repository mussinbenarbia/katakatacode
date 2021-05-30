import React from "react";
import useTypingGame from "react-typing-game-hook";
import "./styles.css";

const TypingGameDemo = () => {
  let text = 'const person = {name:"Mussin", age:28};';
  const {
    states: {
      charsState,
      length,
      currIndex,
      currChar,
      correctChar,
      errorChar,
      phase,
      startTime,
      endTime,
    },
    actions: { insertTyping, resetTyping },
  } = useTypingGame(text, {
    skipCurrentWordOnSpace: false,
    pauseOnError: true,
    countErrors: "everytime",
  });

  const handleKey = (key) => {
    if (key === "Escape") {
      resetTyping();
    } else if (key.length === 1) {
      insertTyping(key);
    }
    console.log({
      charsState,
      length,
      currIndex,
      currChar,
      correctChar,
      errorChar,
      phase,
      startTime,
      endTime,
    });
  };

  return (
    <div className="wrapper">
      <div
        className="typing-test"
        onKeyDown={(e) => {
          handleKey(e.key);
          e.preventDefault();
        }}
        tabIndex={0}>
        {text.split("").map((char, index) => {
          let state = charsState[index];
          let color = state === 0 ? "" : state === 1 ? "green" : "red";
          return (
            <span
              key={char + index}
              style={{ color }}
              className={currIndex + 1 === index ? "curr-letter" : ""}>
              {"_"}
            </span>
          );
        })}
      </div>

      <code className="snippet language-javascript">{text}</code>
    </div>
  );
};

export default TypingGameDemo;
