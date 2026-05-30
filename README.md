# ConnectBeyond Bars

Safe, meaningful prison pen pal connections that change lives.

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + React 19 + Tailwind CSS
- **Backend**: Convex (real-time database + auth)
- **Payments**: Stripe (Premium subscriptions)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Hosting**: Cloudflare Workers (via @opennextjs/cloudflare)

## Getting Started

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Fill in your Convex and Stripe keys

# Start Convex dev server
npx convex dev

# Start Next.js dev server (separate terminal)
bun dev
```

## Project Structure

```
├── convex/           # Backend: schema, queries, mutations, auth
├── src/
│   ├── app/          # Next.js pages (App Router)
│   │   ├── admin/    # Admin panel (profiles, writers)
│   │   ├── auth/     # Login & registration
│   │   ├── dashboard/# Writer dashboard
│   │   ├── pricing/  # Subscription plans
│   │   ├── profiles/ # Browse & view profiles
│   │   └── about/    # Mission & values
│   ├── components/   # Reusable UI components
│   └── lib/          # Utilities
└── public/           # Static assets
```

## Key Features

- **Address Privacy Vault**: All mail routed through secure PO Box
- **Verified Profiles**: DOC-verified inmate profiles with badges
- **Writer Registration**: 18+ age verification, email/password auth
- **Profile Browsing**: Search, filter by state/gender/purpose
- **Premium Membership**: $9.99/mo for unlimited letters & features
- **Admin Panel**: Full CRUD for inmate profiles + writer management
- **Mobile Responsive**: Designed mobile-first

## License

Private — All rights reserved.
