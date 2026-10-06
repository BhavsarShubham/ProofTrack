import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { PROOF_TRACK_ABI } from "./contract";

// Create the thirdweb client
// Replace with your actual Client ID from thirdweb dashboard
export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "351a44c7d0d08a542b8dd82d6d02951f", // Demo fallback
});

// Define the chain (Localhost 31337)
export const activeChain = defineChain({
  id: Number(process.env.NEXT_PUBLIC_CHAIN_ID || 31337),
  rpc: process.env.NEXT_PUBLIC_RPC_URL || "http://127.0.0.1:8545",
});

// Create the contract reference
export const proofTrackContract = getContract({
  client,
  chain: activeChain,
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
  abi: PROOF_TRACK_ABI as any,
});
