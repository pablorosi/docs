# 📚 Lab Docs - Knowledge Base and Portfolio

Welcome to the source code repository of my technical documentation portal and portfolio. This platform is statically built with **Astro** and **Starlight**, and serves as a living record of my infrastructure projects.

🌐 **Live Documentation:** [docs.pablorosi.dev](https://docs.pablorosi.dev)

## 🛠️ Tech Stack

* **Framework:** [Astro](https://astro.build/)
* **Documentation Theme:** [Starlight](https://starlight.astro.build/)
* **Content:** Markdown / MDX
* **Deployment:** GitHub Actions (CI/CD)

## 📁 Project Structure

This repository follows the standard structure of an Astro project, integrating the **Diátaxis** framework within the content folder (`src/content/docs/`) to organize documentation logically:
```text
├── .github/workflows/       # CI/CD Automation (GitHub Actions)
├── public/                  # Raw static resources (favicon.ico)
├── src/
│   ├── assets/              # Processed images and diagrams
│   └── content/
│       └── docs/            # 📝 Documentation core (Markdown/MDX)
│           └── index.mdx    # Home page (Landing Page)
├── astro.config.mjs         # Main Astro and Starlight configuration
├── package.json             # Dependencies and scripts (npm run dev/build)
└── README.md                 
````

## 🚀 Local Development Guide

If you want to clone this repository and run the documentation in your local environment to make changes, follow these steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher).

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone [https://github.com/pablorosi/docs.git](https://github.com/pablorosi/docs.git)
```
```bash
cd docs
````
```bash
npm install
```
