"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/siteConfig";

type CopyStatus = "idle" | "copied" | "failed";

export function CopyEmail() {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <span className="emailCopyWrap">
      <button
        type="button"
        className="emailCopy"
        onClick={copyEmail}
        aria-label={`Copy email address ${CONTACT_EMAIL}`}
      >
        {status === "copied" ? "Copied ✓" : CONTACT_EMAIL}
      </button>

      <span className="emailCopyStatus" role="status" aria-live="polite">
        {status === "copied" && "Email address copied to your clipboard."}
        {status === "failed" &&
          "Couldn't copy automatically. Please select the address and copy it."}
      </span>
    </span>
  );
}
