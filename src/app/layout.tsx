import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
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
      <body className={`${bricolageGrotesque.variable} ${geistMono.variable} font-sans`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
