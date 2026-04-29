"use client";
import { getDataPath } from "@/utils/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ContactLinksData, SocialLink, ContactInfo } from "@/app/types/portfolio";
import SectionLabel from "@/app/components/ui/section-label";

const EMAIL = "mohamed61lamine@gmail.com";

const Contact = () => {
  const [contactData, setContactData] = useState<ContactLinksData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/files/resume.pdf";
    link.download = "Mohamed_Lamine_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="border-t border-mistGray/60 dark:border-white/10 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 accent-glow opacity-40" />

        <div className="container relative">
          <SectionLabel number="05" eyebrow="Contact" title="Let's build something." />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <a
                href={`mailto:${EMAIL}?subject=Hello%20Mohamed`}
                className="group block"
              >
                <p className="mono text-xs uppercase tracking-wider text-secondary dark:text-gray-500 mb-3">
                  Drop me a line
                </p>
                <h3 className="display-tight text-[clamp(1.75rem,5vw,3.5rem)] font-semibold text-dark dark:text-white break-all sm:break-normal underline-offset-[10px] decoration-2 decoration-mistGray dark:decoration-white/20 hover:decoration-primary group-hover:text-primary transition-all">
                  {EMAIL}
                </h3>
                <span className="inline-flex items-center gap-2 mt-5 mono text-xs uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all">
                  Compose email <span aria-hidden>↗</span>
                </span>
              </a>

              <p className="text-secondary dark:text-gray-400 max-w-xl mt-10 leading-relaxed">
                Best for project inquiries, collaboration, or roles. I usually
                reply within a day or two. If it&apos;s urgent, ping me on
                LinkedIn.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <button onClick={handleDownloadPDF} className="btn-primary">
                  <span className="text-base text-dark dark:text-white group-hover:text-white">
                    Download résumé →
                  </span>
                </button>
                {contactData?.contactInfo
                  ?.find((i: ContactInfo) => i.type === "phone")
                  ?.link && (
                  <Link
                    href={
                      contactData.contactInfo.find(
                        (i: ContactInfo) => i.type === "phone"
                      )!.link
                    }
                    className="text-base font-medium text-dark dark:text-white underline-offset-4 hover:underline decoration-primary decoration-2"
                  >
                    Or call directly
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-mistGray/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
                <p className="mono text-xs uppercase tracking-wider text-secondary dark:text-gray-500 mb-5">
                  Find me online
                </p>
                <ul className="divide-y divide-mistGray/60 dark:divide-white/10">
                  {contactData?.socialLinks?.map((link: SocialLink) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4 text-dark dark:text-white hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{link.title}</span>
                        <span
                          className="mono text-xs text-secondary dark:text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
