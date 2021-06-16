import React, { useEffect, useRef } from "react";
import useTypingGame from "react-typing-game-hook";
import "./TypingGame.css";

const TypingGame = ({ code, updateKey, increaseCharCount }) => {
  const {
    states: { charsState, currIndex, phase, correctChar },
    actions: { insertTyping, resetTyping },
  } = useTypingGame(code.code, {
    skipCurrentWordOnSpace: false,
    pauseOnError: true,
    countErrors: "everytime",
  });

  const typingTestDiv = useRef(null);
  useEffect(() => {
    window.Prism.highlightAll();
    typingTestDiv.current.focus();
  });

  useEffect(() => {
    if (phase === 2) {
      updateKey();
    }
  }, [phase]);

  useEffect(() => {
    if (correctChar !== 0) increaseCharCount();
  }, [correctChar]);

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
        ref={typingTestDiv}
        onKeyDown={(e) => {
          e.preventDefault();
          handleKey(e.key);
        }}
        tabIndex={0}>
        {code.code.split("").map((char, index) => {
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
        <code className={`lang-${code.language}`}>{code.code}</code>
        <code className={`lang-javascript`}>
          <span className="test">l</span>
          <span>e</span>
          <span>t</span>
        </code>
      </div>
    </div>
  );
};

export default TypingGame;
