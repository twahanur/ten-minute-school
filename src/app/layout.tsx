import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "10 Minute School Product Page",
  description: "IELTS Course by Munzereen Shahid",
};

// FIX: Update the props to accept params
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // ⚠️ DO NOT wrap with <html> here
}