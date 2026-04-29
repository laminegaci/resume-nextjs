import { getImgPath } from "@/utils/image";
import Image from "next/image";
import RotatingWord from "@/app/components/ui/rotating-word";

const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24 grain">
      <div className="absolute inset-0 -z-10 accent-glow opacity-70 dark:opacity-50" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col gap-7 md:gap-9 animate-slide-up">
            <div className="flex items-center gap-3">
              <span className="available-dot" aria-hidden />
              <span className="mono text-xs uppercase tracking-wider text-secondary dark:text-gray-400">
                Available for new projects
              </span>
            </div>

            <h1 className="display-tight text-[clamp(2.5rem,8vw,6rem)] leading-[1.02] font-semibold">
              <span className="block">Full-stack developer</span>
              <span className="block text-secondary dark:text-gray-500">
                building{" "}
                <RotatingWord
                  words={["products.", "tools.", "platforms.", "experiences."]}
                />
              </span>
            </h1>

            <p className="text-base md:text-lg text-secondary dark:text-gray-400 max-w-xl leading-relaxed">
              I&apos;m{" "}
              <span className="text-dark dark:text-white font-medium">
                Mohamed Lamine Gaci
              </span>
              {" "}— a backend-leaning developer shipping scalable web apps with
              Laravel, Livewire, Inertia, and React. Five years turning ambiguous
              ideas into production systems.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#work" className="btn-primary">
                <span className="text-base text-dark dark:text-white group-hover:text-white">
                  View selected work →
                </span>
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-dark dark:text-white underline-offset-4 hover:underline decoration-primary decoration-2"
              >
                Or get in touch
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 mono text-xs uppercase tracking-wider text-secondary dark:text-gray-500">
              <span>Algiers, DZ</span>
              <span className="h-px w-6 bg-mistGray dark:bg-white/20" />
              <span>5+ years building</span>
              <span className="h-px w-6 bg-mistGray dark:bg-white/20 hidden sm:inline-block" />
              <span className="hidden sm:inline">PHP · Laravel · React</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[360px] sm:h-[440px] lg:h-[560px] flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent rounded-[2rem] blur-3xl" />
            <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-mistGray/60 dark:border-white/10 bg-gradient-to-b from-softGray to-white dark:from-white/[0.03] dark:to-transparent">
              <Image
                src={getImgPath("/images/home/banner/me.png")}
                alt="Mohamed Lamine Gaci"
                width={685}
                height={650}
                className="w-full h-full object-contain object-bottom"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -left-3 chip mono">
              <span className="text-primary">●</span> Currently @ Whitebay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
