"use client";

import { useState } from "react";

export function ThemeToggle() {

  const [light, setLight] = useState(false);


  function toggleTheme() {

    const root = document.documentElement;

    if (light) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    setLight(!light);
  }


  return (
    <button
      className="themeToggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className={light ? "themeIcon rotate" : "themeIcon"}>
        {light ? "☀" : "☾"}
      </span>
    </button>
  );
}