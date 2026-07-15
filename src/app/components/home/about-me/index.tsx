"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const facts = [
  { label: "Based in", value: "Algiers, DZ" },
  { label: "Years building", value: "5+" },
  { label: "Speaks", value: "EN . FR . AR" },
  { label: "Open to", value: "Remote roles" },
];

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-24 relative py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="section-number">01</span>
            <span className="section-line" />
            <span className="section-eyebrow">About</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-white leading-relaxed font-medium"
              >
                I&apos;m a backend-leaning full-stack developer focused on
                <span className="text-primary"> shipping production systems </span>
                that don&apos;t just work -- they hold up under real users, real
                data, and real deadlines.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-white/50 leading-relaxed"
              >
                Currently at <span className="text-white font-medium">Whitebay Limited</span>, I design and maintain
                Laravel applications with Livewire and Inertia, build RESTful APIs,
                and integrate third-party services like Stripe and PrestaShop.
                Before that, five years across e-commerce platforms, ERP systems,
                and internal tools.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-white/50 leading-relaxed"
              >
                I care about clean data models, predictable APIs, and code that
                a future me (or a teammate) can read without grimacing. Outside
                work, I tinker with side projects and keep up with the React /
                Next.js side of the world.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl glass p-6 md:p-8 card-3d">
                <p className="mono text-xs uppercase tracking-wider text-white/40 mb-6">
                  Quick facts
                </p>
                <dl className="divide-y divide-white/5">
                  {facts.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-baseline justify-between py-3.5"
                    >
                      <dt className="text-sm text-white/50">
                        {f.label}
                      </dt>
                      <dd className="text-sm font-medium text-white text-right">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
