import { http, createConfig } from 'wagmi';
import { hardhat, sepolia } from 'wagmi/chains';

export const config = createConfig({
  chains: [hardhat, sepolia],
  transports: {
    [hardhat.id]: http(process.env.NEXT_PUBLIC_RPC_URL || 'http://127.0.0.1:8545'),
    [sepolia.id]: http(),
  },
});
