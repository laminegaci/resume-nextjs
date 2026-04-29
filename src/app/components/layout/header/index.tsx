"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Logo from "../logo";
import ThemeToggle from "@/app/components/ui/theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", trapFocus);
      setTimeout(() => firstButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", trapFocus);
    };
  }, [mobileMenuOpen, trapFocus]);

  const handleDownloadPDF = () => {
    const pdfPath = "/files/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Mohamed_Lamine_Resume.pdf";
    link.click();
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEscKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-999 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      onKeyDown={handleEscKey}
    >
      <div className="container">
        <nav className="py-4 md:py-5" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <Logo />

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={handleDownloadPDF}
                className="btn-primary hidden sm:block"
              >
                <span className="text-sm md:text-base text-black group-hover:text-white">
                  Download CV
                </span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-softGray dark:hover:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span
                    className={`block h-0.5 w-full bg-dark dark:bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-dark dark:bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-dark dark:bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 top-[73px] bg-white dark:bg-dark z-998 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              ref={index === 0 ? firstButtonRef : null}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl font-semibold text-dark dark:text-white hover:text-primary transition-all duration-300"
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s ease-out ${index * 0.1}s`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleDownloadPDF}
            className="btn-primary mt-4"
          >
            <span className="text-lg text-black group-hover:text-white">
              Download CV
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
