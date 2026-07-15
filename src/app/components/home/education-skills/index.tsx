"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { getImgPath } from "@/utils/image";

const skills = [
  { name: "PHP", icon: "/images/icon/php.svg", category: "backend" },
  { name: "Laravel", icon: "/images/icon/laravel.svg", category: "backend" },
  { name: "React", icon: "/images/icon/react.svg", category: "frontend" },
  { name: "Next.js", icon: "/images/icon/nextjs.svg", category: "frontend" },
  { name: "TypeScript", icon: "/images/icon/typescript.svg", category: "frontend" },
  { name: "JavaScript", icon: "/images/icon/javascript.svg", category: "frontend" },
  { name: "Vue", icon: "/images/icon/vue.svg", category: "frontend" },
  { name: "TailwindCSS", icon: "/images/icon/tailwind.svg", category: "frontend" },
  { name: "HTML5", icon: "/images/icon/html.svg", category: "frontend" },
  { name: "CSS3", icon: "/images/icon/css.svg", category: "frontend" },
  { name: "Node.js", icon: "/images/icon/nodejs.svg", category: "backend" },
  { name: "MySQL", icon: "/images/icon/mysql.svg", category: "database" },
  { name: "Docker", icon: "/images/icon/docker.svg", category: "tools" },
  { name: "Git", icon: "/images/icon/git.svg", category: "tools" },
  { name: "Nginx", icon: "/images/icon/nginx.svg", category: "tools" },
  { name: "Apache", icon: "/images/icon/apache.svg", category: "tools" },
];

const categoryOrder = ["backend", "frontend", "database", "tools"];
const categoryLabels: Record<string, string> = {
  backend: "Backend",
  frontend: "Frontend",
  database: "Database",
  tools: "Tools & DevOps",
};

const EducationSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const groupedSkills = categoryOrder.reduce<Record<string, typeof skills>>((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat);
    return acc;
  }, {});

  return (
    <section id="skills" className="scroll-mt-24 relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="section-number">02</span>
            <span className="section-line" />
            <span className="section-eyebrow">Toolbox</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {categoryOrder.map((category, idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="mono text-[11px] uppercase tracking-wider text-primary">
                        0{idx + 1}
                      </span>
                      <h5 className="text-base font-semibold text-white">
                        {categoryLabels[category]}
                      </h5>
                      <span className="flex-1 h-px bg-white/5" />
                      <span className="mono text-[11px] text-white/30">
                        {groupedSkills[category].length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {groupedSkills[category].map((skill) => (
                        <motion.div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
                            hoveredSkill === skill.name
                              ? "border-primary/40 bg-primary/10"
                              : "border-white/8 bg-white/[0.02]"
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Image
                            src={getImgPath(skill.icon)}
                            alt=""
                            width={16}
                            height={16}
                            className="object-contain"
                            loading="lazy"
                          />
                          <span className={`text-sm font-medium transition-colors ${
                            hoveredSkill === skill.name ? "text-primary" : "text-white/70"
                          }`}>
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="rounded-2xl glass p-6 md:p-8 card-3d">
                <p className="mono text-xs uppercase tracking-wider text-white/40 mb-5">
                  Education
                </p>
                <div className="space-y-4">
                  <div className="bg-white/[0.03] rounded-lg p-4 border border-white/5">
                    <p className="text-sm font-semibold text-white mb-1">
                      Bachelor&apos;s in Computer Science
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Foundation in software engineering, algorithms, and web development technologies.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-4 border border-white/5">
                    <p className="text-sm font-semibold text-white mb-1">
                      Professional Web Development Certification
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Specialized training in modern web frameworks, PHP/Laravel ecosystem, and full-stack development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSkills;
