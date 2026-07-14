"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "../logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "-80px 0px 0px 0px",
    });

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-custom">
          <motion.div
            className={`mt-4 rounded-2xl transition-all duration-500 ${
              isScrolled
                ? "glass-strong shadow-2xl shadow-black/20"
                : "bg-transparent"
            }`}
          >
            <nav className="flex items-center justify-between px-6 py-4">
              <Link href="/" className="relative z-50">
                <Logo />
              </Link> 

              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link ${
                      activeSection === link.href.slice(1) ? "text-white" : ""
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="btn-primary text-sm py-2.5 px-5"
                >
                  Let&apos;s talk
                </a>
              </div>

              <button
                className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <motion.span
                    className="block h-px bg-white w-full origin-center"
                    animate={
                      mobileMenuOpen
                        ? { rotate: 45, y: 3.5 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block h-px bg-white w-full"
                    animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block h-px bg-white w-full origin-center"
                    animate={
                      mobileMenuOpen
                        ? { rotate: -45, y: -3.5 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </button>
            </nav>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-medium text-white hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn-primary mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              >
                Let&apos;s talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
