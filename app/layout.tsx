import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Web3Provider from "@/components/providers/Web3Provider";
import { ToastProvider } from "@/components/Toast";
import StructuredData from "@/components/StructuredData";
import ScrollButtons from "@/components/ScrollButtons";
import ChatBot from "@/components/ChatBot";
import CookieConsent from "@/components/CookieConsent";
import { ChatProvider } from "@/components/contexts/ChatContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://excelliondao.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  title: {
    default: "NFT Subscription Platform | Crypto Payment Solutions | ExcellionDao",
    template: "%s | NFT Subscription & Crypto Payments | ExcellionDao",
  },
  description: "Leading NFT subscription platform and crypto payment gateway. Accept cryptocurrency payments, manage NFT subscriptions, and process crypto transactions with our secure blockchain payment solutions.",
  keywords: ["NFT subscription", "NFT subscriptions", "crypto subscription", "cryptocurrency subscription", "blockchain subscription", "crypto payment", "cryptocurrency payment", "crypto payments", "NFT payment", "blockchain payment", "crypto checkout", "cryptocurrency checkout", "NFT checkout", "crypto gateway", "blockchain gateway", "web3 payment", "decentralized payment", "ethereum payment", "polygon payment", "crypto subscription service", "NFT subscription service"],
  authors: [{ name: "ExcellionDao" }],
  creator: "ExcellionDao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://excelliondao.com",
    siteName: "ExcellionDao",
    title: "NFT Subscription Platform | Crypto Payment Solutions | ExcellionDao",
    description: "Leading NFT subscription platform and crypto payment gateway. Accept cryptocurrency payments, manage NFT subscriptions, and process crypto transactions securely.",
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
    title: "NFT Subscription Platform | Crypto Payment Solutions",
    description: "Leading NFT subscription platform and crypto payment gateway. Accept cryptocurrency payments and manage NFT subscriptions.",
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
    icon: "/icon.svg",
  },
  alternates: {
    canonical: 'https://excelliondao.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <body className={`${inter.variable} font-sans antialiased`} style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <StructuredData />
        <Web3Provider>
          <ToastProvider>
            <ChatProvider>
              <div className="min-h-screen flex flex-col bg-dark-950">
                <Navbar />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
                <ScrollButtons />
                <ChatBot />
                <CookieConsent />
              </div>
            </ChatProvider>
          </ToastProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
