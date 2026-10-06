'use client';

import { useState } from 'react';
import { useReadContract } from 'thirdweb/react';
import { proofTrackContract } from '@/lib/client';
import { Search, ShieldCheck, ShieldAlert, Package, MapPin, Building, ArrowRight, Clock, Box } from 'lucide-react';
import { format } from 'date-fns';

export default function VerifyProduct() {
  const [searchId, setSearchId] = useState('');
  const [queriedId, setQueriedId] = useState('');

  const { data: productData, isLoading: isLoadingProduct, isError: isProductError } = useReadContract({
    contract: proofTrackContract,
    method: "function getProduct(string _id) view returns (string id, string name, string manufacturer, string category, string description, address currentOwner, bool exists)",
    params: [queriedId],
    queryOptions: {
      enabled: !!queriedId,
      retry: false
    }
  });

  const { data: historyData, isLoading: isLoadingHistory } = useReadContract({
    contract: proofTrackContract,
    method: "function getProductHistory(string _id) view returns ((string eventType, address from, address to, uint256 timestamp, string location, string note)[])",
    params: [queriedId],
    queryOptions: {
      enabled: !!queriedId && !!productData?.[6], // productData[6] is the `exists` boolean
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQueriedId(searchId);
  };

  // thirdweb's useReadContract with a tuple returns an array of values
  const product = productData ? {
    id: productData[0],
    name: productData[1],
    manufacturer: productData[2],
    category: productData[3],
    description: productData[4],
    currentOwner: productData[5],
    exists: productData[6]
  } : null;

  const history = historyData as any[];
  
  const isLoading = isLoadingProduct || isLoadingHistory;
  const isNotFound = queriedId && (isProductError || (product && !product.exists));

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Verify Product Provenance</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Enter a Product ID to verify its authenticity and trace its entire journey on the blockchain.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 mb-12 shadow-xl max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Enter Product ID (e.g. PROD-001)"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !searchId}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white px-8 rounded-xl font-medium transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
      </div>

      {isNotFound && (
        <div className="flex flex-col items-center justify-center p-12 bg-red-500/5 border border-red-500/20 rounded-2xl text-center">
          <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-red-400 mb-2">✕ PRODUCT NOT FOUND</h2>
          <p className="text-slate-400">The product ID "{queriedId}" does not exist on the blockchain.</p>
        </div>
      )}

      {product && product.exists && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Status Banner */}
          <div className="flex items-center justify-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 py-4 rounded-xl font-semibold tracking-wide">
            <ShieldCheck className="w-6 h-6" />
            ✓ VERIFIED ON-CHAIN
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Product Details Card */}
            <div className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 self-start sticky top-24">
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-500">Product Name</div>
                <div className="text-xl font-bold text-slate-200 flex items-center gap-2">
                  <Box className="w-5 h-5 text-blue-400" />
                  {product.name}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-500">Product ID</div>
                <div className="font-mono text-slate-300">{product.id}</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-500">Manufacturer</div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Building className="w-4 h-4 text-slate-500" />
                  {product.manufacturer}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-500">Category</div>
                <div className="inline-flex px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700">
                  {product.category}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-medium text-slate-500">Current Owner</div>
                <div className="font-mono text-sm text-slate-300 break-all bg-slate-950 p-3 rounded-lg border border-slate-800">
                  {product.currentOwner}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-200 mb-8 flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" />
                Product History
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-slate-700 before:to-slate-800">
                {history?.map((event: any, idx: number) => {
                  const isCreation = event.eventType === 'CREATED';
                  return (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      
                      {/* Icon */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {isCreation ? <Package className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </div>

                      {/* Card */}
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
                        <div className="flex flex-col gap-3">
                          <div className="flex justify-between items-start">
                            <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${isCreation ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
                              {isCreation ? 'Created' : 'Transferred'}
                            </span>
                            <span className="text-xs text-slate-500 whitespace-nowrap">
                              {format(new Date(Number(event.timestamp) * 1000), 'MMM d, yyyy HH:mm')}
                            </span>
                          </div>

                          <div className="space-y-2">
                            {isCreation ? (
                              <div className="text-sm font-medium text-slate-300">
                                {product.manufacturer}
                              </div>
                            ) : (
                              <div className="flex flex-col gap-1 text-sm font-mono text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                                <div className="flex items-center gap-2">
                                  <span className="text-slate-600">From:</span>
                                  <span className="truncate" title={event.from}>{event.from.slice(0, 8)}...{event.from.slice(-6)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-slate-600">To:&nbsp;&nbsp;</span>
                                  <span className="text-slate-300 truncate" title={event.to}>{event.to.slice(0, 8)}...{event.to.slice(-6)}</span>
                                </div>
                              </div>
                            )}
                            
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                              <MapPin className="w-4 h-4 text-slate-500" />
                              {event.location}
                            </div>
                            
                            {event.note && (
                              <div className="text-sm text-slate-500 italic mt-2 border-l-2 border-slate-800 pl-2">
                                "{event.note}"
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
