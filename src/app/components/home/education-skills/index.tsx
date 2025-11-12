"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Tech Stack</h2>
              <p className="text-xl text-orange-500"></p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-8 justify-items-center">
            {[
              // --- Frontend ---
              { name: "HTML5", icon: "/images/icon/html.svg" },
              { name: "CSS3", icon: "/images/icon/css.svg" },
              { name: "JavaScript", icon: "/images/icon/javascript.svg" },
              { name: "TypeScript", icon: "/images/icon/typescript.svg" },
              { name: "React", icon: "/images/icon/react.svg" },
              { name: "Vue", icon: "/images/icon/vue.svg" },
              { name: "Next.js", icon: "/images/icon/nextjs.svg" },
              { name: "TailwindCSS", icon: "/images/icon/tailwind.svg" },
              { name: "Bootstrap", icon: "/images/icon/bootstrap.svg" },
              { name: "Semantic", icon: "/images/icon/semantic.svg" },

              // --- Backend ---
              { name: "PHP", icon: "/images/icon/php.svg" },
              { name: "Laravel", icon: "/images/icon/laravel.svg" },
              { name: "Node.js", icon: "/images/icon/nodejs.svg" },

              // --- Database ---
              { name: "MySQL", icon: "/images/icon/mysql.svg" },

              // --- Tools & DevOps ---
              { name: "Git", icon: "/images/icon/git.svg" },
              { name: "GitHub", icon: "/images/icon/github.svg" },
              { name: "GitHub", icon: "/images/icon/gitlab.svg" },
              { name: "Docker", icon: "/images/icon/docker.svg" },
              { name: "VS Code", icon: "/images/icon/vscode.svg" },
              { name: "Apache", icon: "/images/icon/apache.svg" },
              { name: "Nginx", icon: "/images/icon/nginx.svg" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center text-center transition-transform hover:-translate-y-2"
              >
                <div className="p-4 bg-gray-100 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={getImgPath(skill.icon)}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-orange-500">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default EducationSkills;
