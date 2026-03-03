import type { Metadata } from "next";
import { Inter, Libre_Bodoni } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wole Badmus | Industrial Capacity & Performance Strategist",
  description:
    "Wole Badmus specializes in structural capacity recovery within material handling systems. Expert in maintenance reliability, throughput economics, and capital decision discipline.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libreBodoni.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
