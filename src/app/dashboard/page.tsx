'use client';

import { useActiveAccount } from 'thirdweb/react';
import { Wallet, Package, Activity, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const activeAccount = useActiveAccount();
  const address = activeAccount?.address;
  const isConnected = !!activeAccount;

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertCircle className="w-16 h-16 text-slate-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Wallet Not Connected</h2>
        <p className="text-slate-400">Please connect your wallet to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Wallet className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-slate-400 font-mono text-sm mt-1">{address}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link href="/create" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
            Create Product
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-400">Network Status</div>
              <div className="text-2xl font-bold text-slate-200">Connected</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-400">Active Network</div>
              <div className="text-2xl font-bold text-slate-200">Localhost / Sepolia</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
          <h3 className="text-slate-300 font-medium mb-2">Quick Actions</h3>
          <div className="flex gap-2">
            <Link href="/transfer" className="flex-1 text-center px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors border border-slate-700">
              Transfer
            </Link>
            <Link href="/verify" className="flex-1 text-center px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm transition-colors border border-slate-700">
              Verify
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
        <p>In a full production application, this dashboard would query a Subgraph (The Graph) or a backend database to display a list of products currently owned by {address?.slice(0, 6)}...{address?.slice(-4)}.</p>
        <p className="mt-2 text-sm text-slate-500">For this MVP, please use the Verify tab to check specific Product IDs.</p>
      </div>
    </div>
  );
}
