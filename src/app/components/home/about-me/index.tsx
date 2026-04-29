import { getImgPath } from "@/utils/image";
import Image from "next/image";

const stats = [
  { count: "5+", label: "Years of Experience", icon: "⚡" },
  { count: "5+", label: "Happy Clients", icon: "😊" },
  { count: "8+", label: "Projects Completed", icon: "🚀" },
];

const languages = ["English", "French", "Arabic"];

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="relative bg-softGray py-16 md:py-28">
        <div className="container">
          <div className="section-heading">
            <h2>About Me</h2>
            <p className="section-number">( 01 )</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-base md:text-lg text-secondary leading-relaxed">
                Young, dynamic, and passionate web developer with a deep love for
                computer science and new technologies. I specialize in creating
                robust and scalable web applications using PHP and the Laravel
                framework.
              </p>
              <p className="text-base md:text-lg text-secondary leading-relaxed">
                With a keen eye for detail and a commitment to delivering
                high-quality code, I strive to build solutions that not only meet
                but exceed client expectations. My experience spans from
                e-commerce platforms to enterprise ERP systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 card-hover border border-mistGray"
                  >
                    <span className="text-2xl mb-2 block">{stat.icon}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.count}
                    </h3>
                    <p className="text-sm text-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-mistGray">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={getImgPath("/images/icon/lang-icon.svg")}
                    alt="languages"
                    width={24}
                    height={24}
                  />
                  <h5 className="text-lg font-semibold text-dark">Languages</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="bg-softGray py-2 px-4 rounded-full text-sm font-medium text-dark"
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
