# Lab Docs

Personal documentation site for infrastructure projects, lab notes, and things I want to remember later.

**Live site:** [docs.pablorosi.dev](https://docs.pablorosi.dev)

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Content is mostly MDX under `src/content/docs/`. The site is deployed as a static build on [Cloudflare Pages](https://pages.cloudflare.com/).

## What's here

| Section | Contents |
| :--- | :--- |
| **Enterprise Homelab** | Physical Cisco lab, Proxmox, EVE-NG, Tailscale, Docker |
| **Cloud Infrastructure** | Hetzner VPS, Cloudflare, Nginx Proxy Manager, CI/CD |
| **Learning Log** | Networking theory, Python notes, lab write-ups |
| **Local SRE Platform** | Observability and automation stack (in progress) |

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io/) 10+

## Local development

```bash
git clone https://github.com/pablorosi/docs.git
cd docs
pnpm install
pnpm dev
```

The dev server starts at `http://localhost:4321`.

## Cloudflare Pages

Connect the GitHub repository in the Cloudflare dashboard and use these settings:

| Setting | Value |
| :--- | :--- |
| **Framework preset** | Astro |
| **Build command** | `pnpm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | `22` |

Cloudflare runs `pnpm install` automatically when it detects `pnpm-lock.yaml`. The `wrangler.toml` file sets `pages_build_output_dir` for local deploys with Wrangler.

Preview a production build locally:

```bash
pnpm build
pnpm preview
```

## Repository layout

```text
public/                Static assets (SVGs, favicon, robots.txt)
src/
  components/          Custom Starlight overrides (header, sidebar, …)
  content/docs/        All documentation (MDX)
  styles/              Site CSS
astro.config.mjs       Starlight sidebar, integrations (Mermaid, sitemap)
wrangler.toml          Cloudflare Pages build output directory
```

Content lives in `src/content/docs/`. The sidebar order and section grouping are configured in `astro.config.mjs`, not inferred from the filesystem alone.
