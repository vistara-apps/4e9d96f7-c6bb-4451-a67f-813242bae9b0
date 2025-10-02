'use client';

import { Navigation } from '@/components/Navigation';
import { MobileNav } from '@/components/MobileNav';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Download, DollarSign, Percent } from 'lucide-react';
import { formatCurrency, formatPercent } from '@/lib/utils';

export default function PortfolioPage() {
  // Mock portfolio data
  const portfolioData = {
    totalDeposits: 5000,
    currentValue: 5420,
    netROI: 8.4,
    realizedGains: 320,
    unrealizedGains: 100,
    totalFees: 45,
    taxLiability: 96,
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Portfolio & Tax Report</h1>
          <p className="text-lg text-text-muted">
            Track your true ROI after gas, fees, and taxes
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <DollarSign className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-fg mb-2">
              {formatCurrency(portfolioData.currentValue)}
            </div>
            <div className="text-sm text-text-muted">Current Value</div>
          </Card>
          <Card className="text-center">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
            <div className="text-3xl font-bold text-success mb-2">
              {formatPercent(portfolioData.netROI)}
            </div>
            <div className="text-sm text-text-muted">Net ROI</div>
          </Card>
          <Card className="text-center">
            <Percent className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-fg mb-2">
              {formatCurrency(portfolioData.realizedGains)}
            </div>
            <div className="text-sm text-text-muted">Realized Gains</div>
          </Card>
          <Card className="text-center">
            <Download className="w-8 h-8 text-warning mx-auto mb-3" />
            <div className="text-3xl font-bold text-fg mb-2">
              {formatCurrency(portfolioData.taxLiability)}
            </div>
            <div className="text-sm text-text-muted">Est. Tax Liability</div>
          </Card>
        </div>

        {/* Detailed Breakdown */}
        <Card className="mb-8">
          <h3 className="text-xl font-bold mb-4">Profit Breakdown</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-text-muted">Total Deposits</span>
              <span className="font-semibold">{formatCurrency(portfolioData.totalDeposits)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-text-muted">Current Value</span>
              <span className="font-semibold">{formatCurrency(portfolioData.currentValue)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-text-muted">Realized Gains</span>
              <span className="font-semibold text-success">{formatCurrency(portfolioData.realizedGains)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-text-muted">Unrealized Gains</span>
              <span className="font-semibold text-success">{formatCurrency(portfolioData.unrealizedGains)}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-text-muted">Total Fees Paid</span>
              <span className="font-semibold text-danger">-{formatCurrency(portfolioData.totalFees)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-muted">Est. Tax Liability</span>
              <span className="font-semibold text-warning">-{formatCurrency(portfolioData.taxLiability)}</span>
            </div>
          </div>
        </Card>

        {/* Export Options */}
        <Card>
          <h3 className="text-xl font-bold mb-4">Export Tax Report</h3>
          <p className="text-sm text-text-muted mb-6">
            Download your transaction history for tax filing or integrate with popular tax software
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="secondary" className="flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download CSV
            </Button>
            <Button variant="secondary" className="flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Export to Cointracker
            </Button>
            <Button variant="secondary" className="flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Export to Koinly
            </Button>
          </div>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
