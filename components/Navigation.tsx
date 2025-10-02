'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Vault, Compass, Wallet as WalletIcon } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/scanner', label: 'Scanner', icon: Search },
  { href: '/vaults', label: 'Vaults', icon: Vault },
  { href: '/discover', label: 'Discover', icon: Compass },
  { href: '/portfolio', label: 'Portfolio', icon: WalletIcon },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gradient">💧 Ripple</div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200',
                    isActive
                      ? 'bg-accent text-bg font-semibold'
                      : 'text-text-muted hover:text-fg hover:bg-surface'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Wallet>
            <ConnectWallet>
              <div className="btn-primary">Connect Wallet</div>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </nav>
  );
}
