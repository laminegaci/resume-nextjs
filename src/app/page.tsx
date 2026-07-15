import AboutMe from "./components/home/about-me";
import Contact from "./components/home/contact";
import EducationSkills from "./components/home/education-skills";
import ExperienceSec from "./components/home/experience-sec";
import HeroSection from "./components/home/hero-section";
import LatestWork from "./components/home/latest-work";

const page = () => {
  return (
    <>
      <main id="main-content" role="main">
        <HeroSection />
        <AboutMe />
        <EducationSkills />
        <ExperienceSec />
        <LatestWork />
        <Contact />
      </main>
    </>
  );
};

export default page;
