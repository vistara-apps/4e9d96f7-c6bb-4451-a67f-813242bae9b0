'use client';

import { Navigation } from '@/components/Navigation';
import { MobileNav } from '@/components/MobileNav';
import { TokenCard } from '@/components/TokenCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, Filter } from 'lucide-react';
import { MOCK_TOKENS } from '@/lib/constants';

export default function DiscoverPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
            <h1 className="text-4xl font-bold">Token Discovery</h1>
          </div>
          <p className="text-lg text-text-muted">
            Find vetted early-stage Base tokens before they moon
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              All Tokens
            </Button>
            <Button variant="secondary">High Safety (80+)</Button>
            <Button variant="secondary">Under $10M</Button>
            <Button variant="secondary">Trending</Button>
          </div>
        </Card>

        {/* Token Feed */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {MOCK_TOKENS.map((token) => (
            <TokenCard 
              key={token.address} 
              token={token}
              onScan={() => console.log('Scan token:', token.symbol)}
              onShare={() => console.log('Share token:', token.symbol)}
            />
          ))}
        </div>

        {/* Discovery Tips */}
        <Card>
          <h3 className="text-xl font-bold mb-4">Discovery Tips</h3>
          <div className="space-y-3 text-sm text-text-muted">
            <p>
              <strong className="text-fg">Safety Score:</strong> Only tokens with 70+ safety scores appear in the feed
            </p>
            <p>
              <strong className="text-fg">Trending Score:</strong> Based on community engagement and social mentions
            </p>
            <p>
              <strong className="text-fg">Early Discovery Bonus:</strong> Earn reputation points for sharing gems that 10x
            </p>
            <p>
              <strong className="text-fg">Watchlist Alerts:</strong> Get notified when your watchlist tokens hit milestones
            </p>
          </div>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
