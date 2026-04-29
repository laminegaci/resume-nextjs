import Reveal from "@/app/components/ui/reveal";
import SectionLabel from "@/app/components/ui/section-label";

const facts = [
  { label: "Based in", value: "Algiers, DZ" },
  { label: "Years building", value: "5+" },
  { label: "Speaks", value: "EN · FR · AR" },
  { label: "Open to", value: "Remote roles" },
];

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="relative py-20 md:py-32">
        <div className="container">
          <SectionLabel number="01" eyebrow="About" title="A quick introduction." />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal direction="left" className="lg:col-span-7 space-y-6">
              <p className="text-lg md:text-xl text-dark dark:text-white leading-relaxed font-medium">
                I&apos;m a backend-leaning full-stack developer focused on
                <span className="text-primary"> shipping production systems </span>
                that don&apos;t just work — they hold up under real users, real
                data, and real deadlines.
              </p>
              <p className="text-base md:text-lg text-secondary dark:text-gray-400 leading-relaxed">
                Currently at <span className="text-dark dark:text-white font-medium">Whitebay Limited</span>, I design and maintain
                Laravel applications with Livewire and Inertia, build RESTful APIs,
                and integrate third-party services like Stripe and PrestaShop.
                Before that, five years across e-commerce platforms, ERP systems,
                and internal tools.
              </p>
              <p className="text-base md:text-lg text-secondary dark:text-gray-400 leading-relaxed">
                I care about clean data models, predictable APIs, and code that
                a future me (or a teammate) can read without grimacing. Outside
                work, I tinker with side projects and keep up with the React /
                Next.js side of the world.
              </p>
            </Reveal>

            <Reveal direction="right" className="lg:col-span-5">
              <div className="rounded-2xl border border-mistGray/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
                <p className="mono text-xs uppercase tracking-wider text-secondary dark:text-gray-500 mb-6">
                  Quick facts
                </p>
                <dl className="divide-y divide-mistGray/60 dark:divide-white/10">
                  {facts.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-baseline justify-between py-3.5"
                    >
                      <dt className="text-sm text-secondary dark:text-gray-400">
                        {f.label}
                      </dt>
                      <dd className="text-sm font-medium text-dark dark:text-white text-right">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
