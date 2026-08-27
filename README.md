# Takiso Headless WordPress

WordPress (CMS) → WPGraphQL API → Next.js (React) frontend

## Stack

- **CMS**: WordPress (headless, via Oracle Cloud Free Tier)
- **API**: WPGraphQL + WPGraphQL for ACF
- **Frontend**: Next.js 14 (App Router, ISR)
- **Hosting**: Vercel (frontend), Oracle Cloud (WordPress)
- **SEO**: Yoast SEO + WPGraphQL add-on

## Getting Started

### 1. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```
WORDPRESS_API_URL=https://cms.yourdomain.com/graphql
REVALIDATION_SECRET=your-secret-here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Generate a secret: `openssl rand -base64 32`

### 2. Install & Run

```bash
npm install
npm run dev
```

### 3. WordPress Setup

Install these plugins on your WordPress instance:
- ACF (Advanced Custom Fields)
- WPGraphQL
- WPGraphQL for ACF
- Yoast SEO (+ WPGraphQL Yoast add-on)

Create ACF field groups for your pages. WPGraphQL will expose them automatically.

### 4. ISR Revalidation

When content is updated in WordPress, call:

```
GET /api/revalidate?secret=YOUR_SECRET&slug=page-slug
```

## GitHub Secrets Required

| Secret | Description |
|--------|-------------|
| `ORACLE_HOST` | Oracle Cloud VM IP |
| `ORACLE_USER` | SSH username (usually ubuntu) |
| `ORACLE_SSH_KEY` | Private SSH key |
| `WP_DB_USER` | WordPress DB user |
| `WP_DB_PASSWORD` | WordPress DB password |
| `WP_DB_NAME` | WordPress DB name |
| `REVALIDATION_SECRET` | Same as in Vercel env vars |

## Vercel Environment Variables

Set these in Vercel project dashboard:
- `WORDPRESS_API_URL`
- `REVALIDATION_SECRET`
- `NEXT_PUBLIC_SITE_URL`

## Routes

| Path | Source |
|------|--------|
| `/` | WordPress page with slug "home" |
| `/[slug]` | WordPress page by slug |
