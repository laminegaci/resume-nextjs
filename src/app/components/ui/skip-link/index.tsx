"use client";

import { useEffect, useState } from "react";

const SkipLink = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleFocus = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setVisible(true);
      }
    };
    const handleBlur = () => setVisible(false);

    window.addEventListener("keydown", handleFocus);
    document.addEventListener("focusin", handleBlur);
    return () => {
      window.removeEventListener("keydown", handleFocus);
      document.removeEventListener("focusin", handleBlur);
    };
  }, []);

  return (
    <a
      href="#main-content"
      className={`fixed top-4 left-4 z-[9999] bg-primary text-white px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      Skip to content
    </a>
  );
};

export default SkipLink;
