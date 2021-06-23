import React from "react";

export default function Footer() {
  return (
    <nav className="footer font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-center py-2 px-6 shadow sm:items-baseline w-full">
      <div>
        <span className="text-sm no-underline text-white">
          Made with{" "}
          <span role="img" aria-label="Heart">
            ♥
          </span>{" "}
          in Japan
        </span>
      </div>
    </nav>
  );
}
