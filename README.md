# Lab Docs

Personal documentation site for infrastructure projects, lab notes, and things I want to remember later.

**Live site:** [docs.pablorosi.dev](https://docs.pablorosi.dev)

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Content is mostly MDX under `src/content/docs/`. Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys it to a Hetzner VPS over Tailscale.

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


## Repository layout

```text
.github/workflows/     CI/CD (build + deploy to Hetzner)
public/                Static assets (SVGs, favicon, robots.txt)
src/
  components/          Custom Starlight overrides (header, sidebar, …)
  content/docs/        All documentation (MDX)
  styles/              Site CSS
astro.config.mjs       Starlight sidebar, integrations (Mermaid, sitemap)
```

Content lives in `src/content/docs/`. The sidebar order and section grouping are configured in `astro.config.mjs`, not inferred from the filesystem alone.
