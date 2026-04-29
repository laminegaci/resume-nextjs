"use client";

import { useEffect, useState } from "react";

type RotatingWordProps = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

const RotatingWord = ({ words, intervalMs = 2400, className = "" }: RotatingWordProps) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (words.length <= 1) return;
    let outTimer: ReturnType<typeof setTimeout>;
    const tick = setInterval(() => {
      setPhase("out");
      outTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("in");
      }, 280);
    }, intervalMs);
    return () => {
      clearInterval(tick);
      clearTimeout(outTimer);
    };
  }, [words.length, intervalMs]);

  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span
      className={`relative inline-block align-baseline overflow-hidden ${className}`}
      aria-live="polite"
    >
      <span className="invisible whitespace-nowrap" aria-hidden>
        {longest}
      </span>
      <span
        className="absolute inset-0 whitespace-nowrap text-primary transition-all"
        style={{
          opacity: phase === "in" ? 1 : 0,
          transform: phase === "in" ? "translateY(0)" : "translateY(-30%)",
          transitionDuration: "320ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
};

export default RotatingWord;
