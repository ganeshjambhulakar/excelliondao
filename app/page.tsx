import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import TrustBadges from '@/components/TrustBadges';
import CustomerLogos from '@/components/CustomerLogos';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import SecurityTransparency from '@/components/SecurityTransparency';
import Guarantees from '@/components/Guarantees';
import FAQ from '@/components/FAQ';
import BlogPreview from '@/components/BlogPreview';
import Newsletter from '@/components/Newsletter';
import PricingCalculator from '@/components/PricingCalculator';
import KeywordRichContent from '@/components/KeywordRichContent';
import InternalLinks from '@/components/InternalLinks';
import SupportedChains from '@/components/SupportedChains';
// import VideoPlayer from '@/components/VideoPlayer';
import TestAppCTA from '@/components/TestAppCTA';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NFT Subscription Platform | Crypto Payment Gateway | ExcellionDao',
  description: 'Best NFT subscription platform and crypto payment gateway. Accept cryptocurrency payments, manage NFT subscriptions, process crypto transactions. Secure blockchain payment solutions for businesses.',
  keywords: ['NFT subscription', 'NFT subscriptions', 'crypto subscription', 'cryptocurrency subscription', 'crypto payment', 'cryptocurrency payment', 'crypto payments', 'NFT payment', 'crypto checkout', 'cryptocurrency checkout', 'crypto gateway', 'blockchain payment'],
  openGraph: {
    title: 'NFT Subscription Platform | Crypto Payment Gateway',
    description: 'Leading NFT subscription platform and crypto payment gateway. Accept cryptocurrency payments and manage NFT subscriptions securely.',
  },
  alternates: {
    canonical: 'https://excelliondao.com',
  },
};

export default function Home() {
  // Get latest 3 blog posts
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <Stats />
      <KeywordRichContent />
      <Features />
      <SupportedChains />
      <InternalLinks />
      <TrustBadges />
      <CustomerLogos />
      {/* <VideoPlayer title="ExcellionDao Demo" /> */}
      <TestAppCTA />
      <PricingCalculator />
      <Testimonials />
      <CaseStudies />
      <SecurityTransparency />
      <Guarantees />
      <FAQ />
      <BlogPreview posts={posts} />
      <Newsletter />
    </>
  );
}
