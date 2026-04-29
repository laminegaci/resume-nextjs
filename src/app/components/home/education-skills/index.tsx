"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { EducationData, Skill } from "@/app/types/portfolio";

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
      } catch (error) {
        console.error("Error fetching education data:", error);
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
      <div className="border-t border-softGray py-16 md:py-28">
        <div className="container">
          <div className="section-heading">
            <h2>Tech Stack</h2>
            <p className="section-number"></p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                  <div key={category}>
                    <h5 className="text-base font-semibold text-dark mb-4 uppercase tracking-wider">
                      {categoryLabels[category]}
                    </h5>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group flex flex-col items-center text-center card-hover"
                        >
                          <div className="p-4 bg-white rounded-xl shadow-sm border border-mistGray group-hover:border-primary/30 group-hover:shadow-md transition-all">
                            <Image
                              src={getImgPath(skill.icon)}
                              alt={skill.name}
                              width={40}
                              height={40}
                              className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <p className="mt-2 text-xs font-medium text-secondary group-hover:text-primary transition-colors">
                            {skill.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-softGray rounded-xl p-6">
                <h5 className="text-lg font-semibold text-dark mb-4">Education</h5>
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="h-20 bg-white rounded animate-pulse" />
                    ))}
                  </div>
                ) : educationData?.education?.length ? (
                  <div className="space-y-4">
                    {educationData!.education.map((edu, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 border border-mistGray"
                      >
                        <p className="text-sm font-semibold text-dark mb-1">
                          {edu.title}
                        </p>
                        <p className="text-xs text-secondary leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-secondary">
                    Education details coming soon.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
