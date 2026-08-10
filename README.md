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
| Original artwork (not deployed) | `design-assets/`                          |

## Connecting the enquiry form

No delivery endpoint is wired yet — the form validates and then honestly reports that it
cannot send. To switch it on, set a public JSON-accepting endpoint (Formspree, Web3Forms,
Apps Script, serverless function) and rebuild:

```
NEXT_PUBLIC_ENQUIRY_ENDPOINT=https://…
```

See `.env.example`. The value is inlined into the static bundle, so never put a private key there.

## Still needed from KVASol

- Official email address, WhatsApp/phone number, office address (`contact` in `src/content/site.ts`)
- Instagram / Facebook / X URLs — social icons only render once a real URL is set
- Enquiry-form delivery endpoint (above)
- Privacy Policy and Terms pages — currently rendered unlinked in the footer
- Reversed (dark-background) logo variant — the footer uses a text wordmark in its place
- Project photography, verified project references, analytics ID
