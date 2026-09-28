# TaxTally | Free Private Income Tax & Salary Calculator

> **100% Client-Side, Zero-Server Income Tax & Net Wage Calculator**  
> Built with Astro (Islands Architecture), React, and Tailwind CSS. Built for total privacy, instant salary breakdown, and maximum technical SEO.

---

## 🌟 Key Features

- **🔒 100% Client-Side Privacy**: All calculations run locally in the browser with zero external server transmission. No salary or deduction numbers are ever collected or stored.
- **⚡ Reactive Astro Islands**: Blazing-fast static site generation (SSG) with React island hydration (`client:load`) for zero-latency keystroke recalculation.
- **🌍 Multi-Country Tax Presets**:
  - 🇺🇸 **United States**: 2025/2026 Federal progressive brackets, standard deductions (Single, Married Joint, Head of Household), FICA (Social Security & Medicare).
  - 🇬🇧 **United Kingdom**: HMRC PAYE tax bands, personal allowance, and National Insurance Class 1.
  - 🇨🇦 **Canada**: Federal brackets, Basic Personal Amount, and Canada Pension Plan (CPP).
  - 🇦🇺 **Australia**: ATO Resident tax brackets, tax-free threshold, and Medicare levy.
  - 🇩🇪 **Germany**: Einkommensteuer progressive zones, Grundfreibetrag, and solidarity surcharge.
  - 🌐 **Custom / Flat Rate Mode**: Tailored flat or bracketed rate with customizable deductions for freelancers, contractors, and global users.
- **📊 Visual Income Distribution**: Interactive stacked progress bar illustrating Net Pay vs. Taxes vs. Exempt Deductions.
- **📅 Granular Paycheck Schedule**: Instant conversion across Annual, Monthly, Semi-Monthly, Bi-Weekly, Weekly, Daily, and Hourly rates.
- **🌓 Light & Dark Modes**: Clean emerald financial aesthetic with system preference detection and localStorage persistence (zero flash of unstyled content).
- **🌐 Multilingual i18n Subpaths**: Static localized routing across 6 languages:
  - English (`/`)
  - Español (`/es/`)
  - Português (`/pt/`)
  - Deutsch (`/de/`)
  - Français (`/fr/`)
  - 日本語 (`/ja/`)
- **☕ Support the Developer**: High-visibility navigation CTA linking to [Buy Me a Coffee](https://buymeacoffee.com/kisharadilz).
- **📋 1-Click Productivity**: Instant "Copy Summary" to clipboard and clean "Print / Save PDF" formatting.
- **🔍 Strict Technical SEO**:
  - `<meta property="og:site_name" content="TaxTally">`
  - Automated `sitemap-index.xml` and `robots.txt`
  - Canonical & Hreflang alternates across all locales
  - Native JSON-LD Structured Data: `WebSite`, `WebApplication`, `SoftwareApplication` (FinancialApplication), and `FAQPage`.

---

## 🚀 Quick Start

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### Production Build (GitHub Pages SSG)
```bash
npm run build
```
Static output is generated in `./dist` ready to be served on GitHub Pages (`https://taxtally.github.io`).

### Preview Production Build
```bash
npm run preview
```

---

## ☕ Support the Developer

If you find TaxTally useful, consider supporting development:  
👉 **[Buy Me a Coffee: kisharadilz](https://buymeacoffee.com/kisharadilz)**

---

## 📄 License

MIT License. See [LICENSE](./LICENSE) for details.
