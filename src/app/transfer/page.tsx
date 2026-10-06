'use client';

import { useState } from 'react';
import { useActiveAccount, useSendTransaction } from 'thirdweb/react';
import { prepareContractCall } from 'thirdweb';
import { proofTrackContract } from '@/lib/client';
import { ArrowRightLeft, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function TransferProduct() {
  const activeAccount = useActiveAccount();
  const isConnected = !!activeAccount;

  const [formData, setFormData] = useState({
    id: '',
    to: '',
    location: '',
    note: '',
  });

  const { mutateAsync: sendTx, isPending } = useSendTransaction();
  const [hash, setHash] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;
    
    setError(null);
    setIsConfirming(false);
    setIsConfirmed(false);
    setHash('');
    
    try {
      const tx = prepareContractCall({
        contract: proofTrackContract,
        method: "function transferProduct(string _id, address _to, string _location, string _note) public",
        params: [
          formData.id,
          formData.to,
          formData.location,
          formData.note
        ]
      });

      const receipt = await sendTx(tx);
      setHash(receipt.transactionHash);
      setIsConfirmed(true);
    } catch (err: any) {
      console.error(err);
      setError(err);
    }
  };

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertCircle className="w-16 h-16 text-slate-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Wallet Not Connected</h2>
        <p className="text-slate-400">Please connect your wallet to transfer a product.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
          <ArrowRightLeft className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transfer Product</h1>
          <p className="text-slate-400">Transfer ownership of a product to a new address.</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Product ID <span className="text-red-400">*</span></label>
            <input
              required
              type="text"
              placeholder="e.g. PROD-001"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.id}
              onChange={e => setFormData({ ...formData, id: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">New Owner Address <span className="text-red-400">*</span></label>
            <input
              required
              type="text"
              placeholder="0x..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono"
              value={formData.to}
              onChange={e => setFormData({ ...formData, to: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Location <span className="text-red-400">*</span></label>
            <input
              required
              type="text"
              placeholder="e.g. Pune Logistics Hub"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.location}
              onChange={e => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Note (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Received for distribution"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.note}
              onChange={e => setFormData({ ...formData, note: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isPending || isConfirming}
            className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {isPending ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Awaiting Wallet Approval...</>
            ) : isConfirming ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Confirming Transaction...</>
            ) : (
              'Transfer Ownership On-Chain'
            )}
          </button>
        </form>

        {hash && (
          <div className="mt-6 p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
            <h4 className="text-sm font-medium text-slate-400">Transaction Status</h4>
            {isConfirming && <div className="text-yellow-400 flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Transaction Pending...</div>}
            {isConfirmed && <div className="text-emerald-400 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Product transferred successfully!</div>}
            <div className="text-sm text-slate-500 break-all font-mono">
              Hash: <a href={`https://sepolia.etherscan.io/tx/${hash}`} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">{hash}</a>
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
