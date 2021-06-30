import React from "react";
import axios from "axios";

export default function Header() {
  const loginClick = async () => {
    const temp = await axios.get("http://localhost:8000/auth");
    console.log(temp);
  };
  return (
    <nav className="font-sans flex flex-col text-white sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <span className="text-2xl no-underline">KataKata Code</span>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mussinbenarbia/katakatacode"
          className="text-lg cursor-pointer no-underline ml-2">
          About
        </a>
        <button onClick={loginClick}>Test</button>
      </div>
    </nav>
  );
}
