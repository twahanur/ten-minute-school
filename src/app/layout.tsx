// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "10 Minute School Product Page",
  description: "IELTS Course by Munzereen Shahid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
