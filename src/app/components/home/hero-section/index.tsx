"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import RotatingWord from "@/app/components/ui/rotating-word";
import { getImgPath } from "@/utils/image";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
      style={{ y: springY, opacity, scale }}
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #FE4300, transparent)",
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-10"
          style={{
            background: "radial-gradient(circle, #FF6B33, transparent)",
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a_70%)]" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="available-dot" aria-hidden />
              <span className="mono text-xs uppercase tracking-wider text-white/50">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="display-tight text-[clamp(2.5rem,7vw,5.5rem)] font-semibold mb-6"
            >
              <span className="block gradient-text-subtle">Full-stack</span>
              <span className="block gradient-text-subtle">developer</span>
              <span className="block text-white/40 text-[clamp(1.5rem,4vw,3rem)] mt-2">
                building{" "}
                <RotatingWord
                  words={["products.", "tools.", "platforms.", "experiences."]}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-10"
            >
              I&apos;m{" "}
              <span className="text-white font-medium">
                Mohamed Lamine Gaci
              </span>
              {" "}-- a backend-leaning developer shipping scalable web apps with
              Laravel, Livewire, Inertia, and React. Five years turning ambiguous
              ideas into production systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#work" className="btn-primary">
                View selected work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-6 mt-12 mono text-xs uppercase tracking-wider text-white/30"
            >
              <span>Algiers, DZ</span>
              <span className="h-px w-6 bg-white/10" />
              <span>5+ years</span>
              <span className="h-px w-6 bg-white/10 hidden sm:inline-block" />
              <span className="hidden sm:inline">PHP . Laravel . React</span>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative h-[400px] sm:h-[480px] lg:h-[560px]"
              style={{
                perspective: "1000px",
              }}
            >
              <div
                className="absolute inset-0 transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-4 rounded-3xl overflow-hidden glass-strong">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={getImgPath("/images/home/banner/me.png")}
                        alt="Profile"
                        width={400}
                        height={400}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(40px)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary/60">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full glass"
                  style={{
                    animation: "float-delayed 5s ease-in-out infinite",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(30px)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/40">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/3 -right-8 w-16 h-16 rounded-xl glass"
                  style={{
                    animation: "float 7s ease-in-out infinite 1s",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(50px)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary/50">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -left-6 w-14 h-14 rounded-lg glass"
                  style={{
                    animation: "float-delayed 6s ease-in-out infinite 0.5s",
                    transformStyle: "preserve-3d",
                    transform: "translateZ(35px)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary/40">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 mono text-xs text-white/60 whitespace-nowrap"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(60px)",
                }}
              >
                <span className="text-primary">.</span> Currently @ Whitebay
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
