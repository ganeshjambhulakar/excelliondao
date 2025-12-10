import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | NFT Subscription & Crypto Payment Support',
  description: 'Get in touch with ExcellionDao. Contact our team for support with NFT subscriptions, crypto payments, crypto payment gateway integration, or questions about our NFT subscription platform.',
  keywords: ['NFT subscription support', 'crypto payment support', 'crypto payment gateway support', 'NFT subscription platform contact', 'cryptocurrency payment support'],
  openGraph: {
    title: 'Contact ExcellionDao - Get in Touch',
    description: 'Reach out to our team for support, partnerships, or questions about blockchain payment solutions.',
    type: 'website',
    url: 'https://excelliondao.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ExcellionDao',
    description: 'Get in touch with our team.',
  },
  alternates: {
    canonical: 'https://excelliondao.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

