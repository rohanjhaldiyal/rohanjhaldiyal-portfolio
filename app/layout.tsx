import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohan Jhaldiyal",
  description: "Personal Portfolio Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohanjhaldiyal.tech",
    siteName: "Rohan Jhaldiyal",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "Rohan Jhaldiyal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
