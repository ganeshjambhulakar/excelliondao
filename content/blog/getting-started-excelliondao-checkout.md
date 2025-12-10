---
title: "Getting Started with ExcellionDao Checkout"
excerpt: "A step-by-step guide to integrating our crypto checkout system into your e-commerce platform."
date: "2024-11-18"
category: "Tutorial"
tags: ["Tutorial", "Integration", "Checkout", "elite-pass"]
author:
  name: "Michael Roberts"
  avatar: "https://i.pravatar.cc/150?img=12"
coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop&q=80"
---

## Quick Start Guide

This tutorial will walk you through integrating ExcellionDao Checkout into your application. By the end, you'll be accepting cryptocurrency payments in your app.

### Prerequisites

- Node.js 18+ installed
- An ExcellionDao account (sign up at excelliondao.com)
- Your API keys (found in the dashboard)

### Step 1: Install the elite-pass package

```bash
npm install elite-pass
# or
yarn add elite-pass
```

### Step 2: Initialize the Client

```javascript
import { createElitePassClient } from 'elite-pass';

const checkout = createElitePassClient({
  apiKey: process.env.EXCELLION_API_KEY,
  network: 'polygon', // or 'ethereum'
  environment: 'production' // or 'sandbox' for testing
});
```

### Step 3: Create a Payment Session

```javascript
const session = await checkout.createSession({
  amount: 99.99,
  currency: 'USD',
  acceptedCrypto: ['ETH', 'MATIC', 'USDT'],
  metadata: {
    orderId: 'order_123',
    customerId: 'cust_456'
  },
  successUrl: 'https://yoursite.com/success',
  cancelUrl: 'https://yoursite.com/cancel'
});

// Redirect to hosted checkout
window.location.href = session.url;
```

### Step 4: Handle Webhooks

Set up a webhook endpoint to receive payment notifications:

```javascript
// pages/api/webhooks/excellion.js (Next.js example)
import { createElitePassClient } from 'elite-pass';

export default async function handler(req, res) {
  const checkout = createElitePassClient({
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
```

### Step 5: Embedded Checkout (Optional)

For a seamless experience, embed the checkout directly in your page:

```jsx
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
```

## Testing

Use our sandbox environment to test without real funds:

1. Set `environment: 'sandbox'` in your config
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

