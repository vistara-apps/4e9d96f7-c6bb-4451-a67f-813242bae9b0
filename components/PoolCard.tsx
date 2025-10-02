import { Card } from './ui/Card';
import { SafetyScoreBadge } from './SafetyScoreBadge';
import { Lock, FileCheck, Droplets, TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import type { LiquidityPool } from '@/lib/types';

interface PoolCardProps {
  pool: LiquidityPool;
}

export function PoolCard({ pool }: PoolCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-fg">
            {pool.token0Symbol}/{pool.token1Symbol}
          </h3>
          <p className="text-sm text-text-muted capitalize">{pool.chain}</p>
        </div>
        <SafetyScoreBadge score={pool.safetyScore} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-primary" />
          <div>
            <div className="text-sm font-semibold">{formatCurrency(pool.tvl ?? 0)}</div>
            <div className="text-xs text-text-muted">TVL</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-success" />
          <div>
            <div className="text-sm font-semibold">{formatCurrency(pool.volume24h ?? 0)}</div>
            <div className="text-xs text-text-muted">24h Volume</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-accent" />
          <div>
            <div className="text-sm font-semibold">{pool.liquidityLockPercent}%</div>
            <div className="text-xs text-text-muted">Locked</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-success" />
          <div>
            <div className="text-sm font-semibold capitalize">{pool.auditStatus}</div>
            <div className="text-xs text-text-muted">Audit</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
