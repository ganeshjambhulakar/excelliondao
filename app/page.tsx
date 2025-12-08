import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import Newsletter from '@/components/Newsletter';
import PricingCalculator from '@/components/PricingCalculator';
import VideoPlayer from '@/components/VideoPlayer';
import TestAppCTA from '@/components/TestAppCTA';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  // Get latest 3 blog posts
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <Features />
      <VideoPlayer title="ExcellionDao Demo" />
      <TestAppCTA />
      <PricingCalculator />
      <Testimonials />
      <BlogPreview posts={posts} />
      <Newsletter />
    </>
  );
}
