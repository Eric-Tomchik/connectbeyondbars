import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ConnectBeyond Bars — Safe, Meaningful Prison Pen Pal Connections",
  description:
    "Connect with incarcerated individuals through safe, managed correspondence. Your address stays 100% private. Verified profiles. Real human connection.",
  keywords: [
    "prison pen pal",
    "write to a prisoner",
    "inmate pen pal",
    "prison correspondence",
    "pen pal program",
    "criminal justice",
    "reduce recidivism",
  ],
  openGraph: {
    title: "ConnectBeyond Bars",
    description: "Safe, meaningful prison pen pal connections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <ConvexClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
