'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Vault, Compass, Wallet as WalletIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/scanner', label: 'Scanner', icon: Search },
  { href: '/vaults', label: 'Vaults', icon: Vault },
  { href: '/discover', label: 'Discover', icon: Compass },
  { href: '/portfolio', label: 'Portfolio', icon: WalletIcon },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200',
                isActive
                  ? 'text-accent'
                  : 'text-text-muted'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
