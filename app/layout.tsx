import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const font = Nunito({ subsets: ["latin"] });

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
      <body className={`${font.className} bg-slate-950`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
