"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { WorkData, WorkEntry } from "@/app/types/portfolio";

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
      } catch (error) {
        console.error("Error fetching work data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="work" className="scroll-mt-24">
        <div className="bg-softGray py-16 md:py-28">
          <div className="container">
            <div className="section-heading">
              <h2>Latest Works</h2>
              <p className="section-number">( 09 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-64 bg-white rounded-xl animate-pulse" />
                  <div className="h-4 bg-white rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-white rounded w-1/2 animate-pulse" />
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
        <div className="bg-softGray py-16 md:py-28">
          <div className="container">
            <div className="section-heading">
              <h2>Latest Works</h2>
              <p className="section-number">( 09 )</p>
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
      <div className="bg-softGray py-16 md:py-28">
        <div className="container">
          <div className="section-heading">
            <h2>Latest Works</h2>
            <p className="section-number">( 09 )</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workData.map((project: WorkEntry, index: number) => (
              <Link
                key={index}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-hover bg-white rounded-xl overflow-hidden border border-mistGray"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={getImgPath(project.image)}
                    alt={project.title}
                    width={570}
                    height={414}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <h5 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h5>
                  {project.client && (
                    <p className="text-sm text-secondary mb-3">
                      {project.client}
                    </p>
                  )}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-softGray text-secondary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
