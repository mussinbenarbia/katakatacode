import React, { useState, useEffect } from "react";
import TypingGame from "./components/TypingGame";
import Timer from "./components/Timer";
import Splash from "./components/Splash";
import "./App.css";
import codeSnippets from "./helpers/codeSnippets";

const App = () => {
  const [gamePhase, setGamePhase] = useState(0);
  const [code, setCode] = useState("");
  const [allSnippets, setAllSnippets] = useState(codeSnippets);
  const [renderKey, setRenderKey] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [testDuration, setTestDuration] = useState(60);
  const [expiryTime, setExpiryTime] = useState(null);

  const addStartListeners = () => {
    document.addEventListener("click", startGame);
    document.addEventListener("keydown", startGame);
  };

  const removeStartListeners = () => {
    document.removeEventListener("click", startGame);
    document.removeEventListener("keydown", startGame);
  };

  const calculateExpiryTime = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + testDuration); // 1 minutes time
    return time;
  };

  useEffect(() => {
    addStartListeners();
    setCodeSnippet();
  }, []);

  const startGame = () => {
    removeStartListeners();

    setExpiryTime(calculateExpiryTime());
    setGamePhase(1);
  };

  const increaseCharCount = () => {
    setCharacters((oldCharCount) => (oldCharCount += 1));
  };

  const updateKey = () => {
    setCodeSnippet();
    setRenderKey((oldKey) => (oldKey += 1));
  };

  const setCodeSnippet = () => {
    const random = Math.floor(Math.random() * allSnippets.length);
    setCode(allSnippets[random]);
    setAllSnippets((allSnippets) =>
      allSnippets.filter((snippet, index) => index !== random)
    );
  };

  return (
    <div id="app">
      {(() => {
        if (gamePhase === 0) {
          return <Splash setGamePhase={setGamePhase} />;
        }
        if (gamePhase === 1) {
          return (
            <div id="game">
              <Timer
                expiryTimestamp={expiryTime}
                autoStart={true}
                setGamePhase={setGamePhase}
              />
              <TypingGame
                code={code}
                updateKey={updateKey}
                key={renderKey}
                increaseCharCount={increaseCharCount}
              />
            </div>
          );
        }
        if (gamePhase === 2) {
          return (
            <div id="result">
              Awesome! Your typing speed is {characters} CPM 💪
            </div>
          );
        }
      })()}
    </div>
  );
};

export default App;
