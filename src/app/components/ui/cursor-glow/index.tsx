"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isActive) setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isActive]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] cursor-glow"
      animate={{
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          left: position.x - 300,
          top: position.y - 300,
          background: "radial-gradient(circle, rgba(254, 67, 0, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
