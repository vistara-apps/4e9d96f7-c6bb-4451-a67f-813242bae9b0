'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { MobileNav } from '@/components/MobileNav';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PoolCard } from '@/components/PoolCard';
import { Search, TrendingUp } from 'lucide-react';
import { MOCK_POOLS } from '@/lib/constants';

export default function ScannerPage() {
  const [poolAddress, setPoolAddress] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate API call
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Pool Safety Scanner</h1>
          <p className="text-lg text-text-muted">
            Scan any liquidity pool for rug pull risks, audit status, and safety metrics
          </p>
        </div>

        {/* Scanner Input */}
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Pool Contract Address</label>
              <input
                type="text"
                value={poolAddress}
                onChange={(e) => setPoolAddress(e.target.value)}
                placeholder="0x..."
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-fg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleScan}
                disabled={isScanning || !poolAddress}
                className="w-full md:w-auto flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                {isScanning ? 'Scanning...' : 'Scan Pool'}
              </Button>
            </div>
          </div>
        </Card>

        {/* Trending Pools */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-accent" />
            <h2 className="text-2xl font-bold">Trending Pools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {MOCK_POOLS.map((pool) => (
              <PoolCard key={pool.address} pool={pool} />
            ))}
          </div>
        </div>

        {/* How It Works */}
        <Card>
          <h3 className="text-xl font-bold mb-4">How Safety Scoring Works</h3>
          <div className="space-y-3 text-sm text-text-muted">
            <p>
              <strong className="text-fg">Liquidity Lock:</strong> Checks if LP tokens are locked in a time-lock contract
            </p>
            <p>
              <strong className="text-fg">Team Concentration:</strong> Analyzes token distribution among team wallets
            </p>
            <p>
              <strong className="text-fg">Contract Audit:</strong> Verifies if the contract has been audited by reputable firms
            </p>
            <p>
              <strong className="text-fg">Historical Patterns:</strong> Compares against known rug pull signatures
            </p>
          </div>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
