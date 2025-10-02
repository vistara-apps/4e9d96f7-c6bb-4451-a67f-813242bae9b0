import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { SafetyScoreBadge } from './SafetyScoreBadge';
import { TrendingUp, TrendingDown, Search, Share2 } from 'lucide-react';
import { formatCurrency, formatPercent, formatDate } from '@/lib/utils';
import type { Token } from '@/lib/types';

interface TokenCardProps {
  token: Token;
  onScan?: () => void;
  onShare?: () => void;
}

export function TokenCard({ token, onScan, onShare }: TokenCardProps) {
  const isPriceUp = (token.priceChange24h ?? 0) >= 0;

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{token.logo}</div>
          <div>
            <h3 className="text-lg font-bold text-fg">{token.symbol}</h3>
            <p className="text-sm text-text-muted">{token.name}</p>
          </div>
        </div>
        <SafetyScoreBadge score={token.safetyScore} size="sm" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-text-muted mb-1">Market Cap</div>
          <div className="text-sm font-semibold">{formatCurrency(token.marketCap)}</div>
        </div>
        <div>
          <div className="text-xs text-text-muted mb-1">24h Change</div>
          <div className={`text-sm font-semibold flex items-center gap-1 ${isPriceUp ? 'text-success' : 'text-danger'}`}>
            {isPriceUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {formatPercent(token.priceChange24h ?? 0)}
          </div>
        </div>
      </div>

      <div className="text-xs text-text-muted">
        Launched {formatDate(token.launchDate)}
      </div>

      <div className="flex gap-2">
        <Button onClick={onScan} variant="secondary" className="flex-1 flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          Scan Pool
        </Button>
        <Button onClick={onShare} variant="secondary" className="flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
