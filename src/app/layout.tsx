import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import CursorGlow from "./components/ui/cursor-glow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Lamine Gaci | Full-Stack Developer",
  description: "Portfolio of Mohamed Lamine Gaci, a Full-Stack Web Developer specializing in PHP Laravel, React, and modern web technologies. Explore my projects, skills, and experience.",
  icons: {
    icon: "/favicon-s.ico",
  },
  openGraph: {
    title: "Mohamed Lamine Gaci | Full-Stack Developer",
    description: "Portfolio showcasing projects, skills, and experience in web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans bg-[#0a0a0a]`}>
        <Header />
        <CursorGlow />
        {children}
        <Footer />
      </body>
    </html>
  );
}
