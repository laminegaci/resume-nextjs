import { getImgPath } from "@/utils/image";
import Image from "next/image";
import ContactBar from "./contact-bar";

const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-28 md:pt-32 pb-8 md:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-softGray via-white to-softGray dark:from-dark/50 dark:via-dark dark:to-dark/50 opacity-50" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6 md:gap-8 animate-slide-up">
            <div className="flex items-center gap-3">
              <span className="inline-block w-12 h-0.5 bg-primary" />
              <span className="text-sm md:text-base font-medium text-secondary dark:text-gray-400 uppercase tracking-wider">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="leading-tight">
              <span className="block text-dark">Mohamed Lamine</span>
              <span className="block gradient-text">Gaci</span>
            </h1>

            <p className="text-base md:text-lg text-secondary dark:text-gray-400 max-w-lg leading-relaxed">
              Passionate web developer specializing in creating robust and scalable
              web applications using PHP, Laravel, and modern frontend frameworks.
              Turning ideas into powerful digital solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#work" className="btn-primary">
                <span className="text-base text-black group-hover:text-white">
                  View My Work
                </span>
              </a>
              <a href="#contact" className="btn-primary border-dark hover:border-primary">
                <span className="text-base text-dark group-hover:text-white">
                  Get In Touch
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <div className="wave">
                <Image
                  src={getImgPath("/images/home/banner/wave-icon.svg")}
                  alt="wave-icon"
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-sm text-secondary dark:text-gray-400">
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="relative lg:h-[500px] xl:h-[600px] flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
            <Image
              src={getImgPath("/images/home/banner/me.png")}
              alt="Mohamed Lamine Gaci"
              width={685}
              height={650}
              className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <ContactBar />
    </section>
  );
};

export default HeroSection;
