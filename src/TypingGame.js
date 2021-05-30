import React from "react";
import useTypingGame from "react-typing-game-hook";
import "./TypingGame.css";

const TypingGame = ({ code, language }) => {
  let text = code;
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
  };

  return (
    <div className="typing-game-wrapper">
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
      <div className="snippet">
        <code className={`lang-${language}`}>{text}</code>
      </div>
    </div>
  );
};

export default TypingGame;
