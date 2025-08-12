import type { Metadata } from "next";
import { Inder, Raleway, Kaisei_HarunoUmi } from "next/font/google";
import "./globals.css";

const inder = Inder({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inder",
});

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

const kaisei = Kaisei_HarunoUmi({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kaisei",
});

export const metadata: Metadata = {
  title: "Lisa Wan - Portfolio",
  description: "Computer Science student at Northeastern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inder.variable} ${raleway.variable} ${kaisei.variable} font-sans bg-[#EDEDED]`}>
        {children}
      </body>
    </html>
  );
}