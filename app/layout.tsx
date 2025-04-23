import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Manage your finances with ease",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />

        <Navbar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 bg-gradient-to-r from-cyan-300 to-yellow-200 shadow-md">
          {children}
        </main>

        <footer className="bg-teal-100 text-center py-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Finance Tracker. All rights reserved.
        </footer>
      </body>
    </html>
  );
}