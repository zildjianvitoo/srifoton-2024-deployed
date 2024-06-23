import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monument = LocalFont({
  src: "../public/fonts/MonumentExtended-Regular.woff2",
  variable: "--font-monument",
});

export const metadata: Metadata = {
  title: "SRIFOTON",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monument.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
