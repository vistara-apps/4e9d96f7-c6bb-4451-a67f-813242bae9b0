import { Shield, AlertTriangle, XCircle } from 'lucide-react';
import { getSafetyVariant, type SafetyScoreVariant } from '@/lib/types';

interface SafetyScoreBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function SafetyScoreBadge({ score, size = 'md' }: SafetyScoreBadgeProps) {
  const variant = getSafetyVariant(score);
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2',
  };

  const icons = {
    high: Shield,
    medium: AlertTriangle,
    low: XCircle,
  };

  const Icon = icons[variant];

  return (
    <div className={`safety-badge-${variant} ${sizeClasses[size]} flex items-center gap-2`}>
      <Icon className="w-4 h-4" />
      <span>{score}/100</span>
    </div>
  );
}
