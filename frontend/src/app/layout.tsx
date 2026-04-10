import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Global3DBackground from "@/components/canvas/Global3DBackground";
import SystemLoader from "@/components/canvas/SystemLoader";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafsan Rohan | Visual Strategist",
  description: "Designing Visual Stories that Make Brands Clearer, Stronger, and Harder to Ignore. Portfolio of Rafsan Rohan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark scroll-smooth`}>
      <body suppressHydrationWarning className="bg-transparent text-brand-light-gray min-h-full flex flex-col font-sans selection:bg-brand-silver selection:text-brand-black">
        <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('contextmenu', e => e.preventDefault());` }} />
        <SystemLoader />
        <Global3DBackground />
        <Navbar />
        <main className="flex-grow z-10 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
