import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "../Components/Footer/page"
import Navbar from "../Components/Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techlab",
  description: "Promoting sustainability through tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
  <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white pb-0`}
    >
      <Navbar />
      <main className="w-full flex-grow px-6 bg-white pt-18 pb-0">
        {children}
      </main>
      <Footer />
    </body>
  </html>
);
}
