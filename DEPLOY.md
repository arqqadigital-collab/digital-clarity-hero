# Deploying to Vercel

This project uses **TanStack Start** with the **Vercel** deployment target.

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — Vercel Dashboard
1. Push this project to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel will auto-detect the settings from `vercel.json`.
4. Click **Deploy**.

## What changed from the original (Lovable/Cloudflare) project

| File | Change |
|------|--------|
| `vite.config.ts` | Replaced `@lovable.dev/vite-tanstack-config` with standard Vite plugins + `tanstackStart({ target: "vercel" })` |
| `package.json` | Removed `@cloudflare/vite-plugin` and `@lovable.dev/vite-tanstack-config` dependencies |
| `vercel.json` | Added — tells Vercel the build command, output dir, and routing |
| `.gitignore` | Replaced Cloudflare entries with Vercel entries |
