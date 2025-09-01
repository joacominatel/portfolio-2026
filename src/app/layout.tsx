import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joaquín Minatel | Backend Developer",
  description: "Backend developer. Clear APIs, reliable data. Python, REST, data workflows and a touch of AI.",
  metadataBase: new URL("https://fronterait.tech"),
  openGraph: {
    title: "Joaquín Minatel | Backend Developer",
    description: "Backend developer. Clear APIs, reliable data.",
    url: "https://fronterait.tech",
    siteName: "Joaquín Minatel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

// Prevent theme flash: inline script reads localStorage / media query before hydration
const noFlashScript = `(() => {try {const stored = localStorage.getItem('theme');const mql = window.matchMedia('(prefers-color-scheme: dark)');const system = mql.matches ? 'dark' : 'light';const theme = stored || system; if(theme === 'dark'){document.documentElement.classList.add('dark');} else {document.documentElement.classList.remove('dark');}} catch(_) {}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className={inter.className + " bg-[hsl(var(--color-bg))] text-[hsl(var(--color-fg))] antialiased min-h-screen flex flex-col"}>
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}