import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body //${poppins.variable} ${inter.variable}
        className={`${monument.variable} ${ponnala.variable} overflow-x-hidden scroll-smooth`}
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
