import React from "react";

export default function Header() {
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
      </div>
    </nav>
  );
}
