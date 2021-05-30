import React, { useState } from "react";
import TypingGame from "./TypingGame";
import "./App.css";

const App = () => {
  const codeArray = [
    { code: `const person = {name:"Mussin", age:28};`, language: "javascript" },
    {
      code: `let harus = harus.match("memesh", "grandeMemesh");`,
      language: "javascript",
    },
    {
      code: `let mussin = harus.map(mussin => "bravo", "bravissimo");`,
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
  const code = codeArray[Math.floor(Math.random() * codeArray.length)];

  return (
    <div id="app">
      <TypingGame code={code.code} language={code.language} />
    </div>
  );
};

export default App;
