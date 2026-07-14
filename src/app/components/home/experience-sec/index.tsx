"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    year: "2019",
    title: "Web Developer Intern",
    company: "Edisoft Cheraga",
    type: "Part-time",
    description:
      "Created a web application for customer management using PHP, gaining foundational experience in web development and database management.",
    isCurrent: false,
  },
  {
    year: "2020 - 2021",
    title: "ICT Help Desk Agent",
    company: "Amnal Staoueli",
    type: "Full-time, On Site",
    description:
      "Provided technical assistance to users, resolving hardware and software issues. Managed server support and database interactions.",
    isCurrent: false,
  },
  {
    year: "2021 - 2023",
    title: "Web Developer",
    company: "FB-Technologies Ouled Fayet",
    type: "Full-time, Remote",
    description:
      "Designed and developed new websites/web applications and maintained existing ones. Created PHP scripts to process large data volumes.",
    isCurrent: false,
  },
  {
    year: "2023 - Present",
    title: "Backend Developer",
    company: "Whitebay Limited",
    type: "Full-time, On Site",
    description:
      "Design, develop, and maintain scalable web applications using Laravel, Livewire, and Inertia.js. Build and optimize RESTful APIs, integrate third-party services (Stripe, PrestaShop), and automate business workflows.",
    isCurrent: true,
  },
];

const ExperienceSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="scroll-mt-24 relative py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="section-number">03</span>
            <span className="section-line" />
            <span className="section-eyebrow">Experience</span>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-white/5 to-transparent ml-1" />

            <div className="space-y-0">
              {experiences
                .slice()
                .reverse()
                .map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="group relative pl-8 pb-10 last:pb-0"
                  >
                    <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border-2 border-primary/50 group-hover:border-primary group-hover:shadow-[0_0_12px_rgba(254,67,0,0.4)] transition-all duration-300" />

                    <div className="rounded-xl p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 card-3d">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="mono text-xs text-white/40">
                          {exp.year}
                        </span>
                        {exp.isCurrent && (
                          <span className="mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>

                      <h5 className="text-xl md:text-2xl font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h5>
                      <p className="text-sm text-white/40 mb-3">
                        {exp.company}
                      </p>
                      <p className="mono text-[11px] uppercase tracking-wider text-white/30 mb-4">
                        {exp.type}
                      </p>
                      <p className="text-sm text-white/50 leading-relaxed max-w-3xl">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSec;
