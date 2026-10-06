'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { PROOF_TRACK_ABI } from '@/lib/contract';
import { PackagePlus, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { parseAbi } from 'viem';

// We could import PROOF_TRACK_ABI but since it's very large, we can just use the specific functions we need via human-readable ABI to save context.
const contractAbi = parseAbi([
  'function createProduct(string _id, string _name, string _manufacturer, string _category, string _description, string _location) public',
]);

export default function CreateProduct() {
  const { isConnected } = useAccount();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    manufacturer: '',
    category: '',
    description: '',
    location: '',
  });

  const { writeContract, data: hash, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ hash });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;
    
    writeContract({
      address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
      abi: contractAbi,
      functionName: 'createProduct',
      args: [
        formData.id,
        formData.name,
        formData.manufacturer,
        formData.category,
        formData.description,
        formData.location,
      ],
    });
  };

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertCircle className="w-16 h-16 text-slate-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Wallet Not Connected</h2>
        <p className="text-slate-400">Please connect your wallet to create a product.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
          <PackagePlus className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Product</h1>
          <p className="text-slate-400">Register a new product on the blockchain.</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Product ID <span className="text-red-400">*</span></label>
              <input
                required
                type="text"
                placeholder="e.g. PROD-001"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={formData.id}
                onChange={e => setFormData({ ...formData, id: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Product Name <span className="text-red-400">*</span></label>
              <input
                required
                type="text"
                placeholder="e.g. Smart Device X"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Manufacturer <span className="text-red-400">*</span></label>
              <input
                required
                type="text"
                placeholder="e.g. ABC Manufacturing"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={formData.manufacturer}
                onChange={e => setFormData({ ...formData, manufacturer: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Category <span className="text-red-400">*</span></label>
              <input
                required
                type="text"
                placeholder="e.g. Electronics"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-300">Initial Location <span className="text-red-400">*</span></label>
              <input
                required
                type="text"
                placeholder="e.g. Mumbai Manufacturing Facility"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-300">Description (Optional)</label>
              <textarea
                placeholder="Additional details about the product..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all min-h-[100px]"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending || isConfirming}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {isPending ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Awaiting Wallet Approval...</>
            ) : isConfirming ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Confirming Transaction...</>
            ) : (
              'Create Product On-Chain'
            )}
          </button>
        </form>

        {/* Transaction Status */}
        {hash && (
          <div className="mt-6 p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
            <h4 className="text-sm font-medium text-slate-400">Transaction Status</h4>
            {isConfirming && <div className="text-yellow-400 flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Transaction Pending...</div>}
            {isConfirmed && <div className="text-emerald-400 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Product created successfully!</div>}
            <div className="text-sm text-slate-500 break-all font-mono">
              Hash: <a href={`https://sepolia.etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{hash}</a>
            </div>
          </div>
        )}
        
        {error && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Transaction Failed</p>
              <p className="opacity-80 mt-1">{(error as any).shortMessage || error.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
