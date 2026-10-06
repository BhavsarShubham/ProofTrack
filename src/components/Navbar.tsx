'use client';

import Link from 'next/link';
import { useActiveAccount, ConnectButton } from 'thirdweb/react';
import { client, activeChain } from '@/lib/client';
import { createWallet, walletConnect, inAppWallet } from 'thirdweb/wallets';
import { Wallet, Package, PackagePlus, ArrowRightLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Only include wallets that don't have broken peer deps
const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  createWallet("com.trustwallet.app"),
  createWallet("app.phantom"),
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const activeAccount = useActiveAccount();
  const isConnected = !!activeAccount;
  const pathname = usePathname();

  const navLinks = [
    { name: 'Verify', path: '/verify', icon: Package },
    { name: 'Dashboard', path: '/dashboard', icon: Wallet },
    { name: 'Create', path: '/create', icon: PackagePlus },
    { name: 'Transfer', path: '/transfer', icon: ArrowRightLeft },
  ];

  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-500">
              <Package className="w-6 h-6" />
              ProofTrack
            </Link>
            
            <div className="hidden md:flex gap-1">
              {navLinks.map((link) => {
                if (!isConnected && link.path !== '/verify') return null;
                
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-blue-500/10 text-blue-400' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!mounted ? (
              <div className="w-24 h-9 bg-slate-800 rounded-md animate-pulse" />
            ) : (
              <ConnectButton
                client={client}
                chain={activeChain}
                wallets={wallets}
                connectButton={{
                  label: "Connect Wallet",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
