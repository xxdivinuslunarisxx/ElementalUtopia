"use client";

import { useState } from "react";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const email = "xxdivinuslunarisxx@gmail.com";

  async function copyEmail() {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button className="emailCopy" onClick={copyEmail}>
      {copied ? "Copied ✓" : email}
    </button>
  );
}