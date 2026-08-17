import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saad Ahmed — Software Engineer & Web Developer",
  description:
    "Software Developer crafting web applications, C++ games, and digital experiences. Based in Islamabad, Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${grotesk.variable}`}>
      <body className="bg-base text-cream antialiased" suppressHydrationWarning>
        {/* Film grain noise overlay — fixed, pointer-events: none */}
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}