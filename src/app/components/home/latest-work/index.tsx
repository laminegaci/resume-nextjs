"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { WorkData, WorkEntry } from "@/app/types/portfolio";
import Reveal from "@/app/components/ui/reveal";
import SectionLabel from "@/app/components/ui/section-label";

const bentoSpan = (i: number): string => {
  // Editorial bento: first tile is hero, then 2 medium, then a wide, then a tall, then squares.
  const patterns = [
    "md:col-span-4 md:row-span-2", // 0: large hero
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1", // wide
    "md:col-span-3 md:row-span-1", // wide
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
  ];
  return patterns[i % patterns.length];
};

const ProjectCard = ({ project, index }: { project: WorkEntry; index: number }) => {
  const isHero = index === 0;
  return (
    <Reveal delay={Math.min(index, 4) * 0.06}>
      <Link
        href={project.link && project.link !== "#" ? project.link : "#"}
        target={project.link && project.link !== "#" ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`group relative block h-full overflow-hidden rounded-2xl border border-mistGray/60 dark:border-white/10 bg-white dark:bg-white/[0.02] transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 ${
          isHero ? "min-h-[420px] md:min-h-[520px]" : "min-h-[260px]"
        }`}
        aria-label={`View project: ${project.title}`}
      >
        <Image
          src={getImgPath(project.image)}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          loading={isHero ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end text-white">
          <div className="flex items-center gap-2 mb-3 mono text-[10px] uppercase tracking-wider text-white/70">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-white/30" />
            <span>{project.client}</span>
          </div>

          <h5
            className={`text-white font-semibold display-tight mb-2 ${
              isHero ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h5>

          {project.description && isHero && (
            <p className="text-sm md:text-base text-white/75 max-w-md mb-4 leading-relaxed">
              {project.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-1">
            {project.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="mono text-[10px] uppercase tracking-wider text-white/70 px-2 py-1 rounded-full border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute top-5 right-5 md:top-7 md:right-7 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

const LatestWork = () => {
  const [workData, setWorkData] = useState<WorkEntry[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data: WorkData = await res.json();
        setWorkData(data?.workData);
      } catch {
        console.error("Error fetching work data");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="work" className="scroll-mt-24">
      <div className="border-t border-mistGray/60 dark:border-white/10 py-20 md:py-32">
        <div className="container">
          <SectionLabel number="04" eyebrow="Selected Work" title="Things I've shipped." />

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[200px] gap-4 md:gap-5">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`rounded-2xl bg-softGray dark:bg-white/[0.03] animate-pulse ${bentoSpan(i)} min-h-[260px]`}
                />
              ))}
            </div>
          )}

          {error && (
            <p className="text-center text-secondary py-12">
              Unable to load projects. Please try again later.
            </p>
          )}

          {!loading && !error && workData && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[180px] gap-4 md:gap-5">
                {workData.slice(0, 8).map((project, index) => (
                  <div key={project.slug} className={bentoSpan(index)}>
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12 md:mt-16">
                <Link
                  href="https://github.com/laminegaci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mono text-xs uppercase tracking-wider text-secondary dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
                  More on GitHub
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
