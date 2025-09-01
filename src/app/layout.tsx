import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minatel | Backend Dev",
  description: "Joaquin Portfolio's Backend Development Projects | Python, C#, API's, Node.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}