import React, { useState, useEffect, useRef } from "react";
import TypingGame from "./TypingGame";
import Timer from "./components/Timer";
import Splash from "./components/Splash";
import uniqueRandom from "unique-random";
import "./App.css";
const codeArray = [
  {
    code: `int main () { cout << "Hello World!"; return 0; }`,
    language: "cpp",
  },
  { code: `const person = {name:"Mussin", age:28};`, language: "javascript" },
  {
    code: `let arr = testArr.match("random", "code");`,
    language: "javascript",
  },
  {
    code: `let result = something.map(el => <span>yo</span>);`,
    language: "javascript",
  },
  {
    code: `x = lambda a : a + 10`,
    language: "python",
  },
  {
    code: `const code = codeArray[Math.floor(Math.random() * codeArray.length)];`,
    language: "javascript",
  },
];
const App = () => {
  const [gamePhase, setGamePhase] = useState(0);
  const [code, setCode] = useState("");
  const [renderKey, setRenderKey] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [testDuration, setTestDuration] = useState(500);
  const [expiryTime, setExpiryTime] = useState(null);
  const random = uniqueRandom(0, codeArray.length - 1);

  const addStartListeners = () => {
    console.log("starting");
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
    console.log(characters);
  };

  const updateKey = () => {
    setCodeSnippet();
    setRenderKey((oldKey) => (oldKey += 1));
  };

  const setCodeSnippet = () => {
    setCode(codeArray[random()]);
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
