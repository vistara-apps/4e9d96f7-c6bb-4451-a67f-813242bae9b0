// User Types
export interface User {
  fid: string;
  walletAddress: string;
  rippleBalance: number;
  reputationScore: number;
  vaultDeposits: string[];
  watchlist: string[];
}

// Liquidity Pool Types
export interface LiquidityPool {
  address: string;
  chain: 'base' | 'optimism' | 'arbitrum';
  token0Symbol: string;
  token1Symbol: string;
  safetyScore: number;
  liquidityLockPercent: number;
  auditStatus: 'unaudited' | 'pending' | 'audited';
  lastScannedAt: Date;
  tvl?: number;
  volume24h?: number;
}

// Vault Types
export interface Vault {
  vaultId: string;
  name: string;
  strategy: 'stablecoin' | 'bluechip' | 'microcap';
  totalDeposits: number;
  currentAPY: number;
  performanceFee: number;
  rebalanceFrequency: 'weekly';
  description?: string;
}

export interface VaultPosition {
  userId: string;
  vaultId: string;
  depositAmount: number;
  entryTimestamp: Date;
  currentValue: number;
  netROI: number;
}

// Pool Scan Types
export interface PoolScan {
  scanId: string;
  poolAddress: string;
  requestedBy: string;
  safetyScore: number;
  riskFlags: string[];
  createdAt: Date;
}

// Token Types
export interface Token {
  address: string;
  symbol: string;
  name: string;
  marketCap: number;
  launchDate: Date;
  safetyScore: number;
  trendingScore: number;
  priceChange24h?: number;
  logo?: string;
}

// Rebalance Proposal Types
export interface RebalanceProposal {
  proposalId: string;
  vaultId: string;
  proposedAllocations: Record<string, number>;
  status: 'pending' | 'approved' | 'rejected';
  votesFor: number;
  votesAgainst: number;
  expiresAt: Date;
  reasoning?: string;
}

// Safety Score Variant
export type SafetyScoreVariant = 'high' | 'medium' | 'low';

export function getSafetyVariant(score: number): SafetyScoreVariant {
  if (score >= 80) return 'high';
  if (score >= 50) return 'medium';
  return 'low';
}
