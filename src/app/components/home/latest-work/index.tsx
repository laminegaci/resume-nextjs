"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { getDataPath, getImgPath } from "@/utils/image";
import type { WorkData, WorkEntry } from "@/app/types/portfolio";

const ProjectCard = ({ project, index }: { project: WorkEntry; index: number }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isLink = project.link && project.link !== "#";

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * -10, y: x * 10 });
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={cardRef}
      href={isLink ? project.link : undefined}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: Math.min(index, 5) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s ease-out",
        transformStyle: "preserve-3d",
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 block"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(254, 67, 0, 0.08), transparent 60%)`,
        }}
      />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={getImgPath(project.image)}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          loading={index < 3 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </div>

      <div className="relative p-5 md:p-6">
        <div className="flex items-center gap-2 mb-3 mono text-[10px] uppercase tracking-wider text-white/40">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-4 bg-white/10" />
          <span>{project.client}</span>
        </div>

        <h5 className="text-lg md:text-xl font-semibold text-white mb-2 display-tight group-hover:text-primary transition-colors">
          {project.title}
        </h5>

        {project.description && (
          <p className="text-sm text-white/40 mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {project.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white" />
        </svg>
      </div>
    </motion.a>
  );
};

const LatestWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [workData, setWorkData] = useState<WorkEntry[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data: WorkData = await res.json();
        setWorkData(data?.workData);
      } catch {
        console.error("Error fetching work data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="work" className="scroll-mt-24 relative py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span className="section-number">04</span>
            <span className="section-line" />
            <span className="section-eyebrow">Selected Work</span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-surface border border-white/5 animate-pulse aspect-[4/3]"
                />
              ))}
            </div>
          ) : workData ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {workData.slice(0, 12).map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>

              <motion.div
                className="flex justify-center mt-12 md:mt-16"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://github.com/laminegaci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group"
                >
                  View more on GitHub
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            </>
          ) : (
            <p className="text-center text-white/40 py-12">
              Unable to load projects. Please try again later.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestWork;
