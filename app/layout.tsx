import type { Metadata } from "next";
import {fontVt} from "@/assets/fonts"
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pupunha Dev - Site Pessoal",
  description: "Meus estudos e projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col items-center ${fontVt.className} bg-slate-950 bg-hero-pattern bg-no-repeat bg-cover`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
