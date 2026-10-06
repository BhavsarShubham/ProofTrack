# ProofTrack

ProofTrack makes product history verifiable by recording important ownership and lifecycle events on-chain.

## Problem
Modern supply chains are complex and opaque. When a customer buys a product, they often have no way to verify its origin, authenticity, or the journey it took from the manufacturer to the retail shelf.

## Solution
ProofTrack solves this by recording key lifecycle events (creation, transfers, and location updates) directly on an Ethereum-compatible blockchain. By relying on smart contracts, product provenance becomes decentralized, immutable, and independently verifiable.

## Architecture

```text
Next.js (App Router, Tailwind)
   │
   ↓
wagmi / viem (React Hooks for Web3)
   │
   ↓
Ethereum (Localhost/Testnet)
   │
   ↓
ProofTrack Smart Contract (Solidity)
```

## Features
- **Create Product:** Mint a new product on-chain with metadata.
- **Transfer Product:** securely transfer ownership to a new wallet.
- **Verification Page:** Publicly accessible page to verify the complete journey of a product.
- **Timeline UI:** Beautiful visualization of a product's lifecycle.

## Tech Stack
- **Frontend:** Next.js 14, React, Tailwind CSS, Lucide Icons.
- **Web3 Integration:** Wagmi v2, Viem.
- **Smart Contracts:** Solidity, Hardhat.

## Smart Contract
The `ProofTrack.sol` contract exposes methods to create and transfer products. It uses mappings to store product metadata and an array of `HistoryEvent` structs to preserve an immutable timeline of transfers. Events (`ProductCreated`, `ProductTransferred`) are emitted for off-chain indexing.

## How to Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Blockchain
Start a local Hardhat node in one terminal:
```bash
npx hardhat node
```

### 3. Deploy Smart Contract
In a second terminal, deploy the contract to the local network:
```bash
npx hardhat run scripts/deploy.ts --network localhost
```
*Note the deployed contract address from the output.*

### 4. Configure Environment
Create a `.env.local` file in the root directory and add the required variables (replace with your deployed address):
```env
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourDeployedContractAddress
NEXT_PUBLIC_CHAIN_ID=31337
```

### 5. Start Frontend
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

## Testing
Run the Hardhat test suite (if configured) using:
```bash
npx hardhat test
```

## Future Improvements
- QR-code product verification
- IoT event integration
- Batch tracking
- Role-based organizations
- IPFS metadata storage for large descriptions
- Multi-chain support
