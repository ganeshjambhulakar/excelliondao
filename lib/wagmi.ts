import { http, createConfig } from 'wagmi';
import { mainnet, polygon, sepolia } from 'wagmi/chains';

export const config = createConfig({
  chains: [mainnet, polygon, sepolia],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
