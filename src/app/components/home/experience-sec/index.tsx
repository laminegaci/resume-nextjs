import type { Experience } from "@/app/types/portfolio";

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
      <div className="py-16 md:py-28">
        <div className="container">
          <div className="section-heading">
            <h2>Experience</h2>
            <p className="section-number">( 02 )</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-mistGray transform md:-translate-x-px" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`hidden md:flex absolute left-4 md:left-1/2 top-0 transform -translate-x-1/2 z-10`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                        exp.isCurrent
                          ? "border-primary shadow-lg shadow-primary/30"
                          : "border-mistGray"
                      }`}
                    >
                      {exp.isCurrent && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`card-hover bg-white rounded-xl p-6 border ${
                      exp.isCurrent
                        ? "border-primary/30 shadow-lg shadow-primary/10"
                        : "border-mistGray"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className={`text-sm font-mono font-semibold px-3 py-1 rounded-full ${
                          exp.isCurrent
                            ? "bg-primary/10 text-primary"
                            : "bg-softGray text-secondary"
                        }`}
                      >
                        {exp.year}
                      </span>
                      <span className="text-xs text-secondary">{exp.type}</span>
                    </div>

                    <h5 className="text-lg md:text-xl font-semibold text-dark mb-2">
                      {exp.title}
                    </h5>

                    <p className="text-sm font-medium text-primary mb-3">
                      {exp.company}
                    </p>

                    <p className="text-sm text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
