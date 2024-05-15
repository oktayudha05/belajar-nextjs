'use client';
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviders from "./AuthProviders";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Welcome!",
//   description: "Website to learn",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-blue-950 ${inter.className}`}>
        <AuthProviders>
          {children}
        </AuthProviders>
      </body>
    </html>
  );
}
