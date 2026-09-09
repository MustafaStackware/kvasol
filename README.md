# KVASol Website

One-page corporate site for [kvasol.com](https://kvasol.com) — Next.js 16 (App Router), static export, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static export written to out/
npm run lint
```

## Deploy

Pushes to `main` trigger the **Deploy to GitHub Pages** workflow. Custom domain: `kvasol.com`.

## Where things live

| What                          | Where                                       |
| ----------------------------- | ------------------------------------------- |
| All page copy and contact data | `src/content/site.ts`                       |
| Design tokens (colour, type, spacing) | `src/app/globals.css`                |
| Sections                      | `src/components/*`                          |
| Enquiry form delivery         | `src/lib/enquiry.ts`                        |
| SEO metadata / structured data | `src/app/layout.tsx`, `src/lib/structuredData.ts` |
| `robots.txt`, `sitemap.xml`, `llms.txt` | `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts` |
| Original artwork (not deployed) | `design-assets/`                          |

## Enquiry form delivery

The site is a static export, so it cannot send email itself. The form has three routes,
in priority order:

1. **`NEXT_PUBLIC_ENQUIRY_ENDPOINT`** — any URL that accepts a JSON POST of the fields.
2. **`NEXT_PUBLIC_WEB3FORMS_KEY`** — a free Web3Forms access key. Enter `info@kvasol.com`
   at [web3forms.com](https://web3forms.com), the key is emailed to that address, paste it
   in and rebuild. Enquiries then arrive in the inbox with the sender's address as reply-to.
3. **Neither set (current state)** — submitting opens the visitor's email application with
   every field filled in and addressed to `info@kvasol.com`.

Set these in GitHub → Settings → Secrets and variables → Actions → Variables, and pass them
through in `.github/workflows/deploy.yml`, or in a local `.env.local` for development.
See `.env.example`. These values are inlined into the public bundle — never put a private
credential in them.

## Still needed from KVASol

- Instagram / X URLs — those icons only render once a real URL is set
- Web3Forms key or delivery endpoint, to receive enquiries in-page rather than via the visitor's email client (above)
- Privacy Policy and Terms pages — currently rendered unlinked in the footer
- Reversed (dark-background) logo variant — the footer uses a text wordmark in its place
- Project photography, verified project references, analytics ID
