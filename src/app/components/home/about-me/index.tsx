import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Reveal from "@/app/components/ui/reveal";
import AnimatedCounter from "@/app/components/ui/animated-counter";

const stats = [
  { count: 5, label: "Years of Experience", suffix: "+" },
  { count: 5, label: "Happy Clients", suffix: "+" },
  { count: 8, label: "Projects Completed", suffix: "+" },
];

const languages = ["English", "French", "Arabic"];

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="relative bg-softGray dark:bg-dark/50 py-16 md:py-28">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <h2>About Me</h2>
              <p className="section-number">( 01 )</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <Reveal direction="left" className="lg:col-span-2 space-y-6">
              <p className="text-base md:text-lg text-secondary dark:text-gray-400 leading-relaxed">
                Young, dynamic, and passionate web developer with a deep love for
                computer science and new technologies. I specialize in creating
                robust and scalable web applications using PHP and the Laravel
                framework.
              </p>
              <p className="text-base md:text-lg text-secondary dark:text-gray-400 leading-relaxed">
                With a keen eye for detail and a commitment to delivering
                high-quality code, I strive to build solutions that not only meet
                but exceed client expectations. My experience spans from
                e-commerce platforms to enterprise ERP systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-dark rounded-xl p-5 card-hover border border-mistGray dark:border-white/10"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                      >
                        <path
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      <AnimatedCounter target={stat.count} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm text-secondary dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" className="space-y-6">
              <div className="bg-white dark:bg-dark rounded-xl p-6 border border-mistGray dark:border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M5 8l6 6M4 14l6-6 8 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className="text-lg font-semibold text-dark dark:text-white">Languages</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="bg-softGray dark:bg-white/5 py-2 px-4 rounded-full text-sm font-medium text-dark dark:text-white"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block relative rounded-xl overflow-hidden h-[200px]">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="decorative"
                  width={303}
                  height={200}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
