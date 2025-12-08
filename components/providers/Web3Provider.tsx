'use client';

// Simple provider wrapper - using native ethereum provider for wallet connection
// No wagmi needed for basic MetaMask connectivity

export default function Web3Provider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
