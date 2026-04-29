import type { Experience } from "@/app/types/portfolio";
import SectionLabel from "@/app/components/ui/section-label";
import Reveal from "@/app/components/ui/reveal";

const experiences: Experience[] = [
  {
    year: "2019",
    title: "Web Developer Intern",
    company: "Edisoft Chéraga",
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
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="border-t border-mistGray/60 dark:border-white/10 py-20 md:py-32">
        <div className="container">
          <SectionLabel number="02" eyebrow="Experience" title="Where I've been working." />

          <ol className="relative">
            {experiences
              .slice()
              .reverse()
              .map((exp, index) => (
                <Reveal key={index} delay={index * 0.06}>
                  <li className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-t border-mistGray/60 dark:border-white/10 transition-colors hover:bg-softGray/40 dark:hover:bg-white/[0.02] rounded-lg px-2 md:px-4 -mx-2 md:-mx-4">
                    <div className="md:col-span-3 flex items-center gap-3">
                      <span className="mono text-xs uppercase tracking-wider text-secondary dark:text-gray-500">
                        {exp.year}
                      </span>
                      {exp.isCurrent && (
                        <span className="chip mono !text-[10px] !px-2 !py-0.5 !text-emerald-600 dark:!text-emerald-400 border-emerald-500/30">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-9">
                      <h5 className="text-xl md:text-2xl font-semibold text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">
                        {exp.title}{" "}
                        <span className="text-secondary dark:text-gray-500 font-normal">
                          · {exp.company}
                        </span>
                      </h5>
                      <p className="mono text-[11px] uppercase tracking-wider text-secondary/80 dark:text-gray-500 mb-3">
                        {exp.type}
                      </p>
                      <p className="text-sm md:text-base text-secondary dark:text-gray-400 leading-relaxed max-w-3xl">
                        {exp.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            <li className="border-t border-mistGray/60 dark:border-white/10" aria-hidden />
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
