import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { TrendingUp, Users, Calendar } from 'lucide-react';
import { formatCurrency, formatPercent } from '@/lib/utils';
import type { Vault } from '@/lib/types';

interface VaultCardProps {
  vault: Vault;
  onJoin?: () => void;
}

export function VaultCard({ vault, onJoin }: VaultCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-fg">{vault.name}</h3>
          <p className="text-sm text-text-muted mt-1">{vault.description}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent">{vault.currentAPY}%</div>
          <div className="text-xs text-text-muted">APY</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-accent" />
          <div>
            <div className="text-sm font-semibold">{formatCurrency(vault.totalDeposits)}</div>
            <div className="text-xs text-text-muted">TVL</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-success" />
          <div>
            <div className="text-sm font-semibold">{vault.performanceFee}%</div>
            <div className="text-xs text-text-muted">Fee</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <div>
            <div className="text-sm font-semibold capitalize">{vault.rebalanceFrequency}</div>
            <div className="text-xs text-text-muted">Rebalance</div>
          </div>
        </div>
      </div>

      <Button onClick={onJoin} className="w-full">
        Join Vault
      </Button>
    </Card>
  );
}
