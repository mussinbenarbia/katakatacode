import React, { useState, useEffect } from "react";
import TypingGame from "./components/TypingGame";
import Timer from "./components/Timer";
import Splash from "./components/Splash";
import LanguageLogo from "./components/LanguageLogo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import codeSnippets from "./helpers/codeSnippets";
import "./App.css";

const App = () => {
  const [gamePhase, setGamePhase] = useState(0);
  const [code, setCode] = useState("");
  const [allSnippets, setAllSnippets] = useState(codeSnippets);
  const [renderKey, setRenderKey] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [testDuration, setTestDuration] = useState(60);
  const [expiryTime, setExpiryTime] = useState(null);

  const addStartListeners = () => {
    // document.addEventListener("click", startGame);
    document.addEventListener("keydown", function handler(e) {
      if (e.code === "Space") startGame();
      this.removeEventListener("keydown", handler);
    });
  };

  const calculateExpiryTime = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + testDuration); // 1 minutes time
    return time;
  };

  useEffect(() => {
    addStartListeners();
  }, []);

  const startGame = () => {
    setCodeSnippet();
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
      <Header />
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
              <LanguageLogo language={code.language} />
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
      <Footer />
    </div>
  );
};

export default App;
