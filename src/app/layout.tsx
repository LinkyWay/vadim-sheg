import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="container">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
