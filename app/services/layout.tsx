import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NFT Subscription Service & Crypto Payment Gateway | Services',
  description: 'Best NFT subscription service and crypto payment gateway. Accept cryptocurrency payments, create NFT subscriptions, manage crypto subscriptions, and process crypto transactions. Leading blockchain payment solutions.',
  keywords: ['NFT subscription service', 'NFT subscription platform', 'crypto subscription service', 'crypto payment gateway', 'cryptocurrency payment gateway', 'NFT subscriptions', 'crypto payments', 'cryptocurrency payments', 'crypto checkout', 'NFT checkout', 'blockchain payment', 'crypto subscription platform'],
  openGraph: {
    title: 'ExcellionDao Services - Blockchain Payment Solutions',
    description: 'NFT subscriptions, crypto checkout, and blockchain payment services for modern businesses.',
    type: 'website',
    url: 'https://excelliondao.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExcellionDao Services',
    description: 'Blockchain payment solutions for your business.',
  },
  alternates: {
    canonical: 'https://excelliondao.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

