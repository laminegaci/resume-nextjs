"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import type { WorkData, WorkEntry } from "@/app/types/portfolio";
import Reveal from "@/app/components/ui/reveal";

const LatestWork = () => {
  const [workData, setWorkData] = useState<WorkEntry[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data: WorkData = await res.json();
        setWorkData(data?.workData);
      } catch {
        console.error("Error fetching work data:");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const allTags = useMemo(() => {
    if (!workData) return [];
    const tagCounts = new Map<string, number>();
    workData.forEach((project) => {
      project.tags?.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    return Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([tag]) => tag);
  }, [workData]);

  const filteredProjects = useMemo(() => {
    if (!workData) return [];
    if (activeFilter === "All") return workData;
    return workData.filter((project) =>
      project.tags?.includes(activeFilter)
    );
  }, [workData, activeFilter]);

  if (loading) {
    return (
      <section id="work" className="scroll-mt-24">
        <div className="bg-softGray dark:bg-dark/50 py-16 md:py-28">
          <div className="container">
            <div className="section-heading">
              <h2>Latest Works</h2>
              <p className="section-number">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-64 bg-white dark:bg-dark rounded-xl animate-pulse" />
                  <div className="h-4 bg-white dark:bg-dark rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-white dark:bg-dark rounded w-1/2 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !workData) {
    return (
      <section id="work" className="scroll-mt-24">
        <div className="bg-softGray dark:bg-dark/50 py-16 md:py-28">
          <div className="container">
            <div className="section-heading">
              <h2>Latest Works</h2>
              <p className="section-number">( 04 )</p>
            </div>
            <p className="text-center text-secondary">
              Unable to load projects. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="scroll-mt-24">
      <div className="bg-softGray dark:bg-dark/50 py-16 md:py-28">
        <div className="container">
          <div className="section-heading">
            <h2>Latest Works</h2>
            <p className="section-number">( 04 )</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects">
            <button
              role="tab"
              aria-selected={activeFilter === "All"}
              onClick={() => setActiveFilter("All")}
              className={`filter-btn ${
                activeFilter === "All" ? "filter-btn-active" : "filter-btn-inactive"
              }`}
            >
              All
              <span className="ml-1.5 text-xs opacity-70">({workData.length})</span>
            </button>
            {allTags.map((tag) => {
              const count = workData.filter((p) => p.tags?.includes(tag)).length;
              return (
                <button
                  key={tag}
                  role="tab"
                  aria-selected={activeFilter === tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`filter-btn ${
                    activeFilter === tag ? "filter-btn-active" : "filter-btn-inactive"
                  }`}
                >
                  {tag}
                  <span className="ml-1.5 text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary">No projects found for this filter.</p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-4 text-primary hover:underline"
              >
                View all projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: WorkEntry, index: number) => (
                <Reveal key={project.slug} delay={index * 0.1}>
                  <Link
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group card-hover bg-white dark:bg-dark rounded-xl overflow-hidden border border-mistGray dark:border-white/10 block"
                    aria-label={`View project: ${project.title}`}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={getImgPath(project.image)}
                        alt={project.title}
                        width={570}
                        height={414}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <h5 className="text-lg font-semibold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h5>
                      {project.client && (
                        <p className="text-sm text-secondary dark:text-gray-400 mb-3">
                          {project.client}
                        </p>
                      )}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-softGray dark:bg-white/5 text-secondary dark:text-gray-400 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
