import type { Metadata } from "next";
import { Unbounded, Geologica, Onest } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

const geologica = Geologica({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geologica",
  display: "swap",
});

const onest = Onest({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Объединение — закрытое сообщество подростков",
  description: "Место, где талантливые подростки находят единомышленников, учатся у практиков и вместе создают проекты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; }>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${geologica.variable} ${onest.variable}`}>
        <body>{children}</body>
    </html>
  );
}
