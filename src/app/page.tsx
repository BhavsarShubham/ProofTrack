'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActiveAccount, ConnectButton } from 'thirdweb/react';
import { createWallet, walletConnect } from 'thirdweb/wallets';
import { client, activeChain } from '@/lib/client';
import { ArrowRight, Shield, CheckCircle2, Activity, Box } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Only safe wallets — no Coinbase Base Account (avoids @x402 broken deps)
const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const activeAccount = useActiveAccount();
  const isConnected = !!activeAccount;
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  if (isConnected) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center max-w-5xl mx-auto px-4 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
          <Box className="w-4 h-4" />
          <span>Web3 Provenance Engine</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.1]">
          Verify the journey of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            every product.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          ProofTrack records product lifecycle events immutably on-chain. 
          Create a transparent, verifiable history from the manufacturer directly to your customer's hands.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          {!mounted ? (
            <div className="w-52 h-14 bg-slate-800 rounded-full animate-pulse" />
          ) : (
            <ConnectButton
              client={client}
              chain={activeChain}
              wallets={wallets}
              connectButton={{
                label: "Connect to Get Started",
                className: "!rounded-full !px-8 !py-4 !font-semibold !bg-white !text-slate-950 hover:!bg-slate-200 !transition-all",
              }}
            />
          )}
          <Link 
            href="/verify" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-full font-medium transition-all backdrop-blur-sm flex items-center justify-center"
          >
            Verify a Product
          </Link>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full"
      >
        <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl backdrop-blur-sm text-left hover:bg-slate-900/60 transition-colors">
          <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Immutable Records</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every product creation and transfer is securely logged on the Ethereum blockchain, ensuring data cannot be tampered with.
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl backdrop-blur-sm text-left hover:bg-slate-900/60 transition-colors">
          <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4">
            <Activity className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Lifecycle Tracking</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Follow a product's exact journey through manufacturers, distributors, and retailers with precise timestamps and locations.
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl backdrop-blur-sm text-left hover:bg-slate-900/60 transition-colors">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Public Verification</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Anyone can verify a product's authenticity and provenance history instantly without needing a Web3 wallet.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
