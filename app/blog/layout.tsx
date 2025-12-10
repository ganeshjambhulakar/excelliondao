import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights on blockchain payments, NFT subscriptions, Web3 technology, and ExcellionDao product updates.',
  keywords: ['blockchain blog', 'crypto payment news', 'web3 articles', 'NFT subscriptions blog', 'blockchain technology'],
  openGraph: {
    title: 'ExcellionDao Blog - Blockchain Payment Insights',
    description: 'Latest insights on blockchain payments, Web3 technology, and payment solutions.',
    type: 'website',
    url: 'https://excelliondao.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExcellionDao Blog',
    description: 'Latest insights on blockchain payments.',
  },
  alternates: {
    canonical: 'https://excelliondao.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

