"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ContactBarData, ContactItem, SocialItem } from "@/app/types/portfolio";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<ContactBarData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section>
        <div className="border-t border-softGray dark:border-white/10">
          <div className="container">
            <div className="flex items-center justify-between py-6 md:py-7">
              <div className="flex gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="w-32 h-6 bg-softGray dark:bg-dark rounded animate-pulse" />
                ))}
              </div>
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-7 h-7 bg-softGray dark:bg-dark rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 lg:gap-10">
              {contactBarData?.contactItems?.map(
                (item: ContactItem, index: number) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="flex items-center gap-2 lg:gap-3 text-sm md:text-base group"
                  >
                    <Image
                      src={getImgPath(item.icon)}
                      alt={item.type}
                      width={20}
                      height={20}
                      className="min-w-[20px] min-h-[20px] group-hover:opacity-70 transition-opacity"
                    />
                    <span className="text-sm md:text-base text-secondary group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              {contactBarData?.socialItems?.map((item: SocialItem, index: number) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Image
                    src={getImgPath(item.icon)}
                    alt={item.platform}
                    width={24}
                    height={24}
                    className="hover:opacity-70 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
