'use client';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ExcellionDao',
    url: 'https://excelliondao.com',
    logo: 'https://excelliondao.com/logo.png',
    description: 'Leading NFT subscription platform and crypto payment gateway. Best NFT subscription service for accepting cryptocurrency payments, creating NFT subscriptions, and managing crypto subscriptions.',
    slogan: 'Leading NFT Subscription Platform and Crypto Payment Gateway',
    knowsAbout: ['NFT Subscription', 'NFT Subscriptions', 'Crypto Payment', 'Cryptocurrency Payment', 'Crypto Subscription', 'Blockchain Payment'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'connect@excelliondao.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://twitter.com/excelliondao',
      'https://github.com/excelliondao',
      'https://linkedin.com/company/excelliondao',
      'https://discord.gg/excelliondao',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ExcellionDao',
    url: 'https://excelliondao.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://excelliondao.com/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

