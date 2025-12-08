import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Web3Provider from "@/components/providers/Web3Provider";
import { ToastProvider } from "@/components/Toast";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://excelliondao.com'),
  title: {
    default: "ExcellionDao - Blockchain Payment Solutions",
    template: "%s | ExcellionDao",
  },
  description: "Building the future of blockchain payments. NFT subscriptions, crypto checkout systems, and seamless payment solutions for modern businesses.",
  keywords: ["blockchain", "crypto payments", "NFT subscriptions", "web3", "decentralized", "cryptocurrency", "ethereum", "payment gateway"],
  authors: [{ name: "ExcellionDao" }],
  creator: "ExcellionDao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://excelliondao.com",
    siteName: "ExcellionDao",
    title: "ExcellionDao - Blockchain Payment Solutions",
    description: "Building the future of blockchain payments. NFT subscriptions, crypto checkout systems, and seamless payment solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ExcellionDao - Blockchain Payment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExcellionDao - Blockchain Payment Solutions",
    description: "Building the future of blockchain payments. NFT subscriptions and crypto checkout systems.",
    images: ["/og-image.png"],
    creator: "@excelliondao",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Web3Provider>
          <ToastProvider>
            <div className="min-h-screen flex flex-col bg-dark-950 light:bg-gray-50 transition-colors duration-300">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ToastProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
