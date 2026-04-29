import AboutMe from "./components/home/about-me";
import Contact from "./components/home/contact";
import EducationSkills from "./components/home/education-skills";
import ExperienceSec from "./components/home/experience-sec";
import HeroSection from "./components/home/hero-section";
import LatestWork from "./components/home/latest-work";
import ScrollProgress from "./components/layout/scroll-progress";
import BackToTop from "./components/layout/back-to-top";
import SkipLink from "./components/ui/skip-link";

const page = () => {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <main id="main-content" role="main">
        <HeroSection />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        <LatestWork />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};

export default page;
