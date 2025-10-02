'use client';

import { Navigation } from '@/components/Navigation';
import { MobileNav } from '@/components/MobileNav';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { VaultCard } from '@/components/VaultCard';
import { Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { MOCK_VAULTS } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Community-Powered</span>
            <br />
            DeFi Safety & Yield
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Real-time liquidity pool safety scores, auto-optimized yield vaults, 
            and community-driven token discovery—all shareable as Farcaster frames.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-8 py-4">
              Scan Your First Pool
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              Explore Vaults
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">$2.4M</div>
            <div className="text-sm text-text-muted">Total Value Locked</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-success mb-2">8.4%</div>
            <div className="text-sm text-text-muted">Avg APY</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1,247</div>
            <div className="text-sm text-text-muted">Active Users</div>
          </Card>
          <Card className="text-center">
            <div className="text-3xl font-bold text-fg mb-2">342</div>
            <div className="text-sm text-text-muted">Pools Scanned</div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Ripple Finance?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-sm text-text-muted">
                Real-time rug pull detection and contract audits
              </p>
            </Card>
            <Card>
              <TrendingUp className="w-8 h-8 text-success mb-3" />
              <h3 className="text-lg font-semibold mb-2">Auto-Optimized</h3>
              <p className="text-sm text-text-muted">
                Vaults rebalance weekly for maximum yield
              </p>
            </Card>
            <Card>
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Community-Driven</h3>
              <p className="text-sm text-text-muted">
                Vote on strategies and discover gems together
              </p>
            </Card>
            <Card>
              <Zap className="w-8 h-8 text-warning mb-3" />
              <h3 className="text-lg font-semibold mb-2">Gas Efficient</h3>
              <p className="text-sm text-text-muted">
                Pool deposits to socialize transaction costs
              </p>
            </Card>
          </div>
        </div>

        {/* Top Vaults Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Top Performing Vaults</h2>
            <Button variant="secondary">View All</Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_VAULTS.map((vault) => (
              <VaultCard 
                key={vault.vaultId} 
                vault={vault}
                onJoin={() => console.log('Join vault:', vault.vaultId)}
              />
            ))}
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
