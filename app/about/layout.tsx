import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | NFT Subscription & Crypto Payment Platform',
  description: 'Learn about ExcellionDao - the leading NFT subscription platform and crypto payment gateway. We build secure cryptocurrency payment solutions, NFT subscription services, and crypto payment systems.',
  keywords: ['NFT subscription company', 'crypto payment company', 'NFT subscription platform about', 'crypto payment gateway about', 'blockchain payment company', 'crypto subscription company'],
  openGraph: {
    title: 'About ExcellionDao - Building Blockchain Payment Solutions',
    description: 'Learn about our mission, values, and team dedicated to making cryptocurrency payments accessible to everyone.',
    type: 'website',
    url: 'https://excelliondao.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ExcellionDao',
    description: 'Learn about our mission to build the future of blockchain payments.',
  },
  alternates: {
    canonical: 'https://excelliondao.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

