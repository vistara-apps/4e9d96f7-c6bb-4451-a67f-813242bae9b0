'use client';

import { Navigation } from '@/components/Navigation';
import { MobileNav } from '@/components/MobileNav';
import { VaultCard } from '@/components/VaultCard';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Users, Calendar } from 'lucide-react';
import { MOCK_VAULTS } from '@/lib/constants';

export default function VaultsPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Social Yield Vaults</h1>
          <p className="text-lg text-text-muted">
            Pool your deposits to socialize gas costs and earn optimized yields
          </p>
        </div>

        {/* Vault Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-fg mb-2">8.4%</div>
            <div className="text-sm text-text-muted">Average APY</div>
          </Card>
          <Card className="text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-fg mb-2">847</div>
            <div className="text-sm text-text-muted">Active Depositors</div>
          </Card>
          <Card className="text-center">
            <Calendar className="w-8 h-8 text-success mx-auto mb-3" />
            <div className="text-3xl font-bold text-fg mb-2">Mon 10am</div>
            <div className="text-sm text-text-muted">Next Rebalance</div>
          </Card>
        </div>

        {/* Vaults Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {MOCK_VAULTS.map((vault) => (
            <VaultCard 
              key={vault.vaultId} 
              vault={vault}
              onJoin={() => console.log('Join vault:', vault.vaultId)}
            />
          ))}
        </div>

        {/* How Vaults Work */}
        <Card>
          <h3 className="text-xl font-bold mb-4">How Social Vaults Work</h3>
          <div className="space-y-4 text-sm text-text-muted">
            <div>
              <strong className="text-fg">1. Pool Deposits:</strong> Users deposit $100-$2K into shared vaults
            </div>
            <div>
              <strong className="text-fg">2. Auto-Rebalance:</strong> Vaults automatically rebalance weekly across top Base protocols
            </div>
            <div>
              <strong className="text-fg">3. Community Governance:</strong> Vote on strategy changes and new protocol integrations
            </div>
            <div>
              <strong className="text-fg">4. Socialized Gas:</strong> Transaction costs are split among all depositors
            </div>
            <div>
              <strong className="text-fg">5. Performance Fee:</strong> Only 0.3% fee on profits (no management fees)
            </div>
          </div>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
