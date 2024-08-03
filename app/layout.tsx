import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const monument = LocalFont({
  src: "../public/fonts/MonumentExtended-Regular.woff2",
  variable: "--font-monument",
});

const ponnala = LocalFont({
  src: "../public/fonts/Ponnala-Regular.ttf",
  variable: "--font-ponnala",
});

export const metadata: Metadata = {
  title: "SRIFOTON 2024",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monument.variable} ${inter.variable} ${ponnala.variable} ${poppins.variable} overflow-x-hidden`}
      >
        <NextTopLoader color="#fff8f0" initialPosition={0.3} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster theme="light" position="top-right" richColors />
      </body>
    </html>
  );
}
