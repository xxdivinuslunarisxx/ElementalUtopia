"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "eu-theme";

function applyTheme(isLight: boolean) {
  const root = document.documentElement;
  root.classList.toggle("light", isLight);
  root.classList.toggle("dark", !isLight);
}

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  // Start from the saved choice, or the device setting, so the first click always changes something.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const isLight = saved ? saved === "light" : prefersLight;
    applyTheme(isLight);
    setLight(isLight);
  }, []);

  function toggleTheme() {
    const next = !light;
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
    setLight(next);
  }

  return (
    <button
      type="button"
      className="themeToggle"
      onClick={toggleTheme}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={light}
    >
      <span className={light ? "themeIcon rotate" : "themeIcon"}>
        {light ? "☀" : "☾"}
      </span>
    </button>
  );
}
