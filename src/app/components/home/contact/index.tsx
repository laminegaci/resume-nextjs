"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ContactLinksData, SocialLink, ContactInfo, FormData } from "@/app/types/portfolio";

const Contact = () => {
  const [contactData, setContactData] = useState<ContactLinksData | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setFormError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      setFormError("Message is required");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mohamed61lamine@gmail.com", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", number: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setFormError("Failed to send message. Please try again.");
      }
    } catch {
      setFormError("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <section id="contact" className="scroll-mt-24">
        <div className="container py-16 md:py-28">
            <div className="section-heading">
              <h2>Contact Me</h2>
              <p className="section-number">( 05 )</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 bg-softGray rounded animate-pulse" />
              ))}
            </div>
            <div className="space-y-6">
              <div className="h-10 bg-softGray rounded animate-pulse" />
              <div className="h-24 bg-softGray rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="container py-16 md:py-28">
        <div className="section-heading">
          <h2>Contact Me</h2>
          <p className="section-number">( 05 )</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h5 className="text-2xl md:text-3xl font-semibold text-dark mb-4">
              Let&apos;s work together
            </h5>
            <p className="text-secondary mb-8 leading-relaxed">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out. I&apos;m always open to new challenges and
              collaborations.
            </p>

            <div className="space-y-6 mb-8">
              {contactData?.contactInfo?.map((info: ContactInfo, index: number) => (
                <Link
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-softGray dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Image
                      src={getImgPath(
                        info.type === "email"
                          ? "/images/icon/mail-icon.svg"
                          : "/images/icon/call-icon.svg"
                      )}
                      alt={info.type}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-secondary uppercase tracking-wider">
                      {info.type}
                    </p>
                    <p className="text-base text-dark font-medium group-hover:text-primary transition-colors">
                      {info.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {contactData?.socialLinks?.map((link: SocialLink, index: number) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label">
                    Name *
                  </label>
                  <input
                    required
                    className="input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="label">
                    Phone
                  </label>
                  <input
                    className="input"
                    id="number"
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Your phone"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="label">
                  Email *
                </label>
                <input
                  required
                  className="input"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Message *
                </label>
                <textarea
                  required
                  className="input resize-none"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                />
              </div>

              {formError && (
                <p className="text-sm text-primary">{formError}</p>
              )}

              {submitted && (
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <Image
                    src={getImgPath("/images/icon/success-icon.svg")}
                    alt="success"
                    width={24}
                    height={24}
                  />
                  <p className="text-sm text-green-700">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-base text-black group-hover:text-white">
                  {submitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
