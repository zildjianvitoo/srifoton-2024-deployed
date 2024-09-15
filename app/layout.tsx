import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";
import { Poppins } from "next/font/google";

const monument = LocalFont({
  src: "../public/fonts/MonumentExtended-Regular.woff2",
  variable: "--font-monument",
});

const ponnala = LocalFont({
  src: "../public/fonts/Ponnala-Regular.ttf",
  variable: "--font-ponnala",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SRIFOTON 2024",
  description:
    "SRIFOTON 2024 adalah kompetisi IT nasional yang diselenggarakan oleh Himpunan Mahasiswa Informatika Unsri.",
  icons: {
    apple: "/img/logo-srifoton.png",
    icon: "/img/logo-srifoton.png",
    shortcut: "/img/logo-srifoton.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="SRIFOTON 2024" />
        <meta
          property="og:description"
          content="SRIFOTON 2024 adalah kompetisi IT nasional yang diselenggarakan oleh Himpunan Mahasiswa Informatika Unsri."
        />
        <meta property="og:image" content="/img/logo-srifoton.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SRIFOTON 2024" />
        <meta
          name="twitter:description"
          content="SRIFOTON 2024 adalah kompetisi IT nasional yang diselenggarakan oleh Himpunan Mahasiswa Informatika Unsri."
        />
        <meta name="twitter:image" content="/img/logo-srifoton.png" />
      </head>
      <body
        className={`${monument.variable} ${ponnala.variable} ${poppins.variable} overflow-x-hidden scroll-smooth`}
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
        <Toaster theme="light" position="top-center" richColors />
      </body>
    </html>
  );
}
