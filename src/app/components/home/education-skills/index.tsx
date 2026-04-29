"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { EducationData, Skill } from "@/app/types/portfolio";
import Reveal from "@/app/components/ui/reveal";
import SectionLabel from "@/app/components/ui/section-label";

const skills: Skill[] = [
  { name: "HTML5", icon: "/images/icon/html.svg", category: "frontend" },
  { name: "CSS3", icon: "/images/icon/css.svg", category: "frontend" },
  { name: "JavaScript", icon: "/images/icon/javascript.svg", category: "frontend" },
  { name: "TypeScript", icon: "/images/icon/typescript.svg", category: "frontend" },
  { name: "React", icon: "/images/icon/react.svg", category: "frontend" },
  { name: "Vue", icon: "/images/icon/vue.svg", category: "frontend" },
  { name: "Next.js", icon: "/images/icon/nextjs.svg", category: "frontend" },
  { name: "TailwindCSS", icon: "/images/icon/tailwind.svg", category: "frontend" },
  { name: "Bootstrap", icon: "/images/icon/bootstrap.svg", category: "frontend" },
  { name: "Semantic UI", icon: "/images/icon/semantic.svg", category: "frontend" },
  { name: "PHP", icon: "/images/icon/php.svg", category: "backend" },
  { name: "Laravel", icon: "/images/icon/laravel.svg", category: "backend" },
  { name: "Node.js", icon: "/images/icon/nodejs.svg", category: "backend" },
  { name: "MySQL", icon: "/images/icon/mysql.svg", category: "database" },
  { name: "Git", icon: "/images/icon/git.svg", category: "tools" },
  { name: "GitHub", icon: "/images/icon/github.svg", category: "tools" },
  { name: "GitLab", icon: "/images/icon/gitlab.svg", category: "tools" },
  { name: "Docker", icon: "/images/icon/docker.svg", category: "tools" },
  { name: "VS Code", icon: "/images/icon/vscode.svg", category: "tools" },
  { name: "Apache", icon: "/images/icon/apache.svg", category: "tools" },
  { name: "Nginx", icon: "/images/icon/nginx.svg", category: "tools" },
];

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & DevOps",
};

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<EducationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEducationData(data?.educationData);
      } catch {
        console.error("Error fetching education data:");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="border-t border-mistGray/60 dark:border-white/10 py-20 md:py-32">
        <div className="container">
          <SectionLabel number="03" eyebrow="Toolbox" title="What I reach for." />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {Object.entries(groupedSkills).map(([category, categorySkills], idx) => (
                  <Reveal key={category} delay={idx * 0.08}>
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="mono text-[11px] uppercase tracking-wider text-primary">
                          0{idx + 1}
                        </span>
                        <h5 className="text-base font-semibold text-dark dark:text-white">
                          {categoryLabels[category]}
                        </h5>
                        <span className="flex-1 h-px bg-mistGray/60 dark:bg-white/10" />
                        <span className="mono text-[11px] text-secondary/70 dark:text-gray-500">
                          {categorySkills.length}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                          <div
                            key={skill.name}
                            className="group inline-flex items-center gap-2 px-3 py-2 rounded-full border border-mistGray/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300"
                          >
                            <Image
                              src={getImgPath(skill.icon)}
                              alt=""
                              width={16}
                              height={16}
                              className="object-contain"
                              loading="lazy"
                            />
                            <span className="text-sm font-medium text-dark dark:text-white group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal direction="right" className="space-y-6">
              <div className="rounded-2xl border border-mistGray/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
                <p className="mono text-xs uppercase tracking-wider text-secondary dark:text-gray-500 mb-5">
                  Education
                </p>
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="h-20 bg-white dark:bg-dark rounded animate-pulse" />
                    ))}
                  </div>
                ) : educationData?.education?.length ? (
                  <div className="space-y-4">
                    {educationData!.education.map((edu, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-dark rounded-lg p-4 border border-mistGray dark:border-white/10"
                      >
                        <p className="text-sm font-semibold text-dark dark:text-white mb-1">
                          {edu.title}
                        </p>
                        <p className="text-xs text-secondary dark:text-gray-400 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-secondary dark:text-gray-400">
                    Education details coming soon.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
