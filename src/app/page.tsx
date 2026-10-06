import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-4xl mx-auto space-y-16">
      
      {/* Hero Section */}
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Verify the journey of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            every product.
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          ProofTrack records important product lifecycle events on-chain, creating a transparent and verifiable history from manufacturer to customer.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link 
            href="/create" 
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:gap-3"
          >
            Create Product <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/verify" 
            className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-medium transition-all"
          >
            Verify Product
          </Link>
        </div>
      </div>

      {/* Visual Journey */}
      <div className="w-full max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm animate-in fade-in duration-1000 delay-300">
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10 -translate-y-1/2"></div>
          
          <Step icon={CheckCircle2} title="Manufacturer" delay="delay-100" />
          <div className="h-8 w-0.5 md:hidden bg-slate-800 my-2"></div>
          <Step icon={Activity} title="Distributor" delay="delay-200" />
          <div className="h-8 w-0.5 md:hidden bg-slate-800 my-2"></div>
          <Step icon={Shield} title="Retailer" delay="delay-300" />
          <div className="h-8 w-0.5 md:hidden bg-slate-800 my-2"></div>
          <Step icon={CheckCircle2} title="Customer" delay="delay-400" />
        </div>
        
        <div className="mt-12 text-sm text-slate-500 font-mono flex items-center justify-center gap-2 bg-slate-950/50 py-3 rounded-lg border border-slate-800/50">
          <Shield className="w-4 h-4 text-emerald-500" />
          Secured and Verified by Ethereum Blockchain
        </div>
      </div>
    </div>
  );
}

function Step({ icon: Icon, title, delay }: { icon: any, title: string, delay: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 bg-slate-900 md:bg-transparent px-4 py-2 ${delay} animate-in zoom-in duration-500`}>
      <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <Icon className="w-6 h-6" />
      </div>
      <span className="font-medium text-slate-300">{title}</span>
    </div>
  );
}
