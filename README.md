# Ripple Finance - Base Mini App

Community-Powered DeFi Safety & Yield built for Base Social.

## Features

- **Pool Safety Scanner**: Real-time rug pull detection and safety scoring
- **Social Yield Vaults**: Auto-optimized vaults with socialized gas costs
- **Token Discovery**: Community-curated feed of vetted early-stage tokens
- **Tax Reporting**: True ROI calculations with tax export

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit (Base integration)
- Farcaster Frames v2

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with OnchainKitProvider
├── providers.tsx       # OnchainKit provider wrapper
├── page.tsx           # Home/dashboard
├── scanner/           # Pool safety scanner
├── vaults/            # Yield vaults
├── discover/          # Token discovery
└── portfolio/         # Portfolio & tax reporting

components/
├── ui/                # Reusable UI components
├── SafetyScoreBadge.tsx
├── VaultCard.tsx
├── TokenCard.tsx
└── Navigation.tsx

lib/
├── types.ts           # TypeScript interfaces
├── utils.ts           # Helper functions
└── constants.ts       # Mock data
```

## Design System

The app uses a professional finance theme with:
- Dark navy background (#0a1628)
- Gold accents (#ffd700)
- Clean, modern borders
- Glass morphism effects
- Smooth transitions

## OnchainKit Integration

- Wallet connection via `ConnectWallet` component
- Transaction signing for vault deposits
- Identity components for user profiles
- Base L2 optimized

## License

MIT
