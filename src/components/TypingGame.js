import React, { useEffect, useRef, useState } from "react";
import useTypingGame from "react-typing-game-hook";
import { buildCharClassLookup } from "../helpers/functions";
import "./TypingGame.css";

const TypingGame = ({ code, updateKey, increaseCharCount }) => {
  const [charClassLookup, setCharClassLookup] = useState({});
  useEffect(() => {
    setCharClassLookup(buildCharClassLookup(code));
  }, []);

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
    if (key === "Enter") {
      insertTyping("\n");
    } else if (key === "Tab") {
      insertTyping("\t");
    } else if (key === "Escape") {
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
          let rightOrWrong = state === 0 ? "" : state === 1 ? "" : "wrong";
          let tabOrBreak = char === "\n" || char === "\t";
          return (
            <span
              key={char + index}
              className={`${currIndex + 1 === index ? "curr-letter" : ""} ${
                charClassLookup[index]
              } ${rightOrWrong} ${tabOrBreak ? "tab-return" : ""} `}>
              {char === "\n" ? " ↩ \n" : char === "\t" ? "→\t" : char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TypingGame;
