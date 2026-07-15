"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { getDataPath } from "@/utils/image";
import Link from "next/link";
import type { ContactLinksData, SocialLink } from "@/app/types/portfolio";

const EMAIL = "mohamed61lamine@gmail.com";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [contactData, setContactData] = useState<ContactLinksData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/files/resume.pdf";
    link.download = "Mohamed_Lamine_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="scroll-mt-24 relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="section-number">05</span>
            <span className="section-line" />
            <span className="section-eyebrow">Contact</span>
          </div>

          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              <div className="lg:col-span-7">
                <p className="mono text-xs uppercase tracking-wider text-white/40 mb-3">
                  Drop me a line
                </p>
                <a
                  href={`mailto:${EMAIL}?subject=Hello%20Mohamed`}
                  className="group block"
                >
                  <h3 className="display-tight text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-white break-all sm:break-normal underline-offset-[8px] decoration-2 decoration-white/10 hover:decoration-primary group-hover:text-primary transition-all">
                    {EMAIL}
                  </h3>
                </a>

                <p className="text-white/50 max-w-xl mt-6 leading-relaxed">
                  Best for project inquiries, collaboration, or roles. I usually
                  reply within a day or two. If it&apos;s urgent, ping me on
                  LinkedIn.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <button onClick={handleDownloadPDF} className="btn-primary">
                    Download resume
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <a
                    href="#about"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    Back to top ↑
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-6 md:p-8">
                  <p className="mono text-xs uppercase tracking-wider text-white/40 mb-5">
                    Find me online
                  </p>
                  <ul className="divide-y divide-white/5">
                    {contactData?.socialLinks?.map((link: SocialLink) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between py-4 text-white hover:text-primary transition-colors"
                        >
                          <span className="font-medium">{link.title}</span>
                          <span
                            className="mono text-xs text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all"
                            aria-hidden
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  className="mt-6 rounded-2xl bg-white/[0.03] border border-white/5 p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="mono text-xs uppercase tracking-wider text-white/40 mb-4">
                    Stats
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-2xl font-semibold text-white display-tight">5+</p>
                      <p className="text-xs text-white/40 mt-1">Years experience</p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-white display-tight">9+</p>
                      <p className="text-xs text-white/40 mt-1">Projects shipped</p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-white display-tight">3</p>
                      <p className="text-xs text-white/40 mt-1">Languages spoken</p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-white display-tight">100%</p>
                      <p className="text-xs text-white/40 mt-1">Commitment</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
