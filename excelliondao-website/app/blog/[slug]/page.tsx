// Blog utilities (for future dynamic content)
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

// Static blog data for demonstration
const staticPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: { name: string; avatar: string };
}> = {
  'introduction-to-nft-subscriptions': {
    title: 'Introduction to NFT-Based Subscriptions',
    excerpt: 'Learn how NFT technology is revolutionizing the subscription economy, enabling true digital ownership and transferability.',
      content: `
## What Are NFT Subscriptions?

NFT-based subscriptions represent a paradigm shift in how we think about subscription services. Instead of a traditional database entry that says "User X has access until Date Y," NFT subscriptions give users a verifiable, transferable token that proves their subscription status.

### The Traditional Subscription Model

In the conventional model, when you subscribe to a service:
- Your subscription exists only in the company's database
- You can't transfer your subscription to someone else
- If the company shuts down, your subscription disappears
- There's no secondary market for unused subscriptions

### The NFT Subscription Advantage

With NFT-based subscriptions:
- **True Ownership**: Your subscription is a token you own
- **Transferability**: Sell or gift your subscription
- **Permanence**: Exists on the blockchain forever
- **Transparency**: Anyone can verify subscription status

## How It Works

\`\`\`solidity
// Simplified NFT Subscription Contract
contract NFTSubscription is ERC721 {
    struct Subscription {
        uint256 planId;
        uint256 expiresAt;
        bool isActive;
    }
    
    mapping(uint256 => Subscription) public subscriptions;
    
    function subscribe(uint256 planId) external payable {
        // Mint NFT to subscriber
        // Store subscription details
    }
}
\`\`\`

## Real-World Applications

### Media & Content Platforms
Imagine owning your Netflix subscription as an NFT. If you're going on vacation, you could lend it to a friend or even sell it on a marketplace.

### Software Licenses
Enterprise software licenses become tradeable assets. Companies can resell unused licenses rather than letting them expire.

### Membership Programs
Gym memberships, club access, and loyalty programs all become transferable assets with real market value.

## Getting Started with ExcellionDao

Ready to implement NFT subscriptions in your platform? Our elite-pass npm package makes it simple:

1. Install the package: \`npm install elite-pass\`
2. Configure your plans
3. Deploy to testnet
4. Go live on mainnet

Contact us for a demo and see how NFT subscriptions can transform your business model.
    `,
    date: 'December 1, 2024',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['NFT', 'Subscriptions', 'Web3', 'Smart Contracts'],
    author: { name: 'Alex Thompson', avatar: 'AT' },
  },
  'why-blockchain-payments-future': {
    title: 'Why Blockchain Payments Are the Future',
    excerpt: 'Explore the advantages of cryptocurrency payments over traditional systems: lower fees, instant settlement, and global reach.',
    content: `
## The Case for Blockchain Payments

The global payments industry processes over $2 quadrillion annually. Yet, the underlying infrastructure—credit cards, wire transfers, and clearinghouses—was designed decades ago. Blockchain technology offers a fundamental reimagining of how money moves.

### Problems with Traditional Payments

#### High Fees
Credit card processors charge 2-3% per transaction. For a business doing $1M in annual revenue, that's $20,000-30,000 lost to fees.

#### Slow Settlement
Credit card settlements take 2-3 business days. International wire transfers can take up to a week.

#### Chargebacks
Merchants face significant risk from fraudulent chargebacks, often losing both the product and the payment.

#### Limited Global Access
1.7 billion adults worldwide remain unbanked, unable to participate in the digital economy.

## Blockchain Payment Advantages

### Lower Fees
Cryptocurrency transactions typically cost a fraction of credit card fees, especially on Layer 2 networks like Polygon.

| Payment Method | Typical Fee |
|---------------|-------------|
| Credit Card | 2.5-3% |
| Wire Transfer | $25-50 |
| Crypto (L1) | $1-5 |
| Crypto (L2) | $0.01-0.10 |

### Instant Settlement
Blockchain transactions settle in minutes, not days. Funds are available immediately.

### No Chargebacks
Blockchain transactions are final. Once confirmed, they cannot be reversed without the recipient's consent.

### Global Access
Anyone with a smartphone can receive cryptocurrency payments, no bank account required.

## The ExcellionDao Approach

We've built our payment infrastructure to maximize blockchain's advantages while minimizing complexity:

- **Multi-chain Support**: Choose the network that fits your needs
- **Fiat On-ramps**: Coming soon - let customers pay with cards, settle in crypto
- **Instant Conversion**: Lock in prices at checkout, avoid volatility
- **Developer-First**: Clean APIs and an elite-pass npm package with framework-specific examples

## The Road Ahead

Blockchain payments are still early. But the trajectory is clear: lower fees, faster settlement, and global access are too compelling to ignore. The businesses that adopt crypto payments now will have a significant advantage as the technology matures.

Ready to future-proof your payment stack? [Contact us](/contact) to learn more.
    `,
    date: 'November 25, 2024',
    readTime: '6 min read',
    category: 'Industry',
    tags: ['Blockchain', 'Payments', 'Future', 'Finance'],
    author: { name: 'Sarah Chen', avatar: 'SC' },
  },
  'getting-started-excelliondao-checkout': {
    title: 'Getting Started with ExcellionDao Checkout',
    excerpt: 'A step-by-step guide to integrating our crypto checkout system into your e-commerce platform.',
      content: `
## Quick Start Guide

This tutorial will walk you through integrating ExcellionDao Checkout into your application. By the end, you'll be accepting cryptocurrency payments in your app.

### Prerequisites

- Node.js 18+ installed
- An ExcellionDao account (sign up at excelliondao.com)
- Your API keys (found in the dashboard)

### Step 1: Install the elite-pass package

\`\`\`bash
npm install elite-pass
# or
yarn add elite-pass
\`\`\`

### Step 2: Initialize the Client

\`\`\`javascript
import { createElitePassClient } from 'elite-pass';

const checkout = createElitePassClient({
  apiKey: process.env.EXCELLION_API_KEY,
  network: 'polygon', // or 'ethereum'
  environment: 'production', // or 'sandbox' for testing
});
\`\`\`

### Step 3: Create a Payment Session

\`\`\`javascript
const session = await checkout.createSession({
  amount: 99.99,
  currency: 'USD',
  acceptedCrypto: ['ETH', 'USDT', 'MATIC'],
  metadata: {
    orderId: 'order_123',
    customerId: 'cust_456'
  },
  successUrl: 'https://yoursite.com/success',
  cancelUrl: 'https://yoursite.com/cancel'
});

// Redirect to hosted checkout
window.location.href = session.url;
\`\`\`

### Step 4: Handle Webhooks

Set up a webhook endpoint to receive payment notifications:

\`\`\`javascript
// pages/api/webhooks/excellion.js (Next.js example)
import { ExcellionCheckout } from '@excelliondao/checkout';

export default async function handler(req, res) {
  const checkout = new ExcellionCheckout({
    apiKey: process.env.EXCELLION_API_KEY
  });

  const event = checkout.verifyWebhook(
    req.body,
    req.headers['x-excellion-signature']
  );

  switch (event.type) {
    case 'payment.completed':
      // Fulfill the order
      await fulfillOrder(event.data.metadata.orderId);
      break;
    case 'payment.failed':
      // Handle failure
      break;
  }

  res.status(200).json({ received: true });
}
\`\`\`

### Step 5: Embedded Checkout (Optional)

For a seamless experience, embed the checkout directly in your page:

\`\`\`jsx
import { CheckoutEmbed } from '@excelliondao/checkout/react';

function CheckoutPage({ orderId }) {
  return (
    <CheckoutEmbed
      apiKey={process.env.NEXT_PUBLIC_EXCELLION_KEY}
      amount={99.99}
      currency="USD"
      onSuccess={(payment) => {
        console.log('Payment successful:', payment.txHash);
      }}
      onError={(error) => {
        console.error('Payment failed:', error);
      }}
    />
  );
}
\`\`\`

## Testing

Use our sandbox environment to test without real funds:

1. Set \`environment: 'sandbox'\` in your config
2. Use test API keys from the dashboard
3. Connect a wallet to the testnet
4. Get test tokens from the faucet

## Going Live

Before going live, ensure you:

- [ ] Switch to production API keys
- [ ] Set up webhook endpoints
- [ ] Configure your wallet address for receiving payments
- [ ] Test the full flow with real (small) transactions

## Need Help?

- 📚 [Full Documentation](https://docs.excelliondao.com)
- 💬 [Discord Community](https://discord.gg/excelliondao)
- 📧 [Email Support](mailto:connect@excelliondao.com)

Happy building! 🚀
    `,
    date: 'November 18, 2024',
    readTime: '10 min read',
    category: 'Tutorial',
    tags: ['Tutorial', 'Integration', 'Checkout', 'elite-pass'],
    author: { name: 'Michael Roberts', avatar: 'MR' },
  },
};

export async function generateStaticParams() {
  return Object.keys(staticPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = staticPosts[params.slug];
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = staticPosts[params.slug];
  
  if (!post) {
    notFound();
  }

  const relatedSlugs = Object.keys(staticPosts).filter(s => s !== params.slug).slice(0, 2);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden pb-12">
        <div className="absolute inset-0 animated-bg" />
        <div className="absolute inset-0 network-bg opacity-30" />
        
        <div className="relative container-custom">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-dark-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30 mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-responsive-lg font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-dark-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                {post.author.avatar}
              </div>
              <span className="text-white">{post.author.name}</span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <article className="prose-web3 prose prose-lg max-w-none">
            {/* Render markdown content */}
            <div 
              className="text-dark-300 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-12 mb-4">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-white mt-8 mb-3">$1</h3>')
                  .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-medium text-white mt-6 mb-2">$1</h4>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="bg-primary-500/10 text-primary-400 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-dark-800 border border-dark-700 rounded-xl p-4 overflow-x-auto my-6"><code class="text-sm text-dark-300 font-mono">$2</code></pre>')
                  .replace(/^\| (.+) \|$/gm, (match) => {
                    const cells = match.slice(1, -1).split('|').map(c => c.trim());
                    return `<tr class="border-b border-dark-700">${cells.map(c => `<td class="px-4 py-2 text-dark-400">${c}</td>`).join('')}</tr>`;
                  })
                  .replace(/^\- (.+)$/gm, '<li class="text-dark-400 ml-4">$1</li>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-400 hover:text-primary-300 underline">$1</a>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
              }}
            />
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-dark-800">
            <Tag className="w-4 h-4 text-dark-500" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-dark-800 text-dark-400 rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 mt-8">
            <span className="text-dark-500 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share:
            </span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://excelliondao.com/blog/${params.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 text-dark-400 hover:text-white hover:bg-blue-500/20 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://excelliondao.com/blog/${params.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 text-dark-400 hover:text-white hover:bg-blue-600/20 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://excelliondao.com/blog/${params.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-800 text-dark-400 hover:text-white hover:bg-blue-500/20 transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedSlugs.map((slug) => {
              const relatedPost = staticPosts[slug];
              return (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="glass-card glass-card-hover p-6 group"
                >
                  <span className="text-primary-400 text-sm">{relatedPost.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-primary-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-dark-400 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  <span className="text-primary-400 text-sm mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

