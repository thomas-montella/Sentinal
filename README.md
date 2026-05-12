# SENTINEL — Defense Supply Chain Intelligence Platform

> Mapping the critical material dependencies, geopolitical chokepoints, and industrial base vulnerabilities that determine whether America's most advanced weapons can be built, maintained, and deployed.

**Live Site:** [sentinel-intel.netlify.app](https://sentinel-intel.netlify.app) <!-- replace with your actual URL -->

---

## Overview

SENTINEL is an open-source defense supply chain intelligence platform built to analyze and visualize the systemic vulnerabilities in US defense manufacturing. The project aggregates publicly available data from the US Geological Survey, Government Accountability Office, Department of Defense, NATO, and leading defense policy research organizations into a structured, multi-dimensional risk model.

The core question this project answers: **If China imposed simultaneous export bans on all controlled materials tomorrow, which US weapons systems would stop being built first, and in what order?**

The answer, based on the data: the F-35, AMRAAM, Patriot PAC-3, Virginia-class submarines, and the entire solid-fuel missile inventory — within weeks to months.

---

## What's Inside

### 6 Intelligence Modules

| Module | Coverage | Key Finding |
|--------|----------|-------------|
| **Materials Intelligence** | 27 critical materials across 5 categories | China controls 94%+ of REE processing; gallium/germanium BAN is active |
| **Weapons Platform Risk** | 22 US weapon systems with composite risk scores | 78% of DoD systems affected by 5 Chinese-controlled minerals (Govini 2025) |
| **Wargame Scenarios** | 5 conflict scenarios with Day 1→Year 1 cascade timelines | Taiwan blockade = $2.7T GDP loss in Year 1 (SAIS 2025) |
| **Investment Intelligence** | 12 supplier company profiles | Jervois (only US cobalt mine) went bankrupt 2025 after Chinese price manipulation |
| **Technology Substitutes** | 11 R&D pathways to supply chain independence | Iron Nitride magnets (Niron Magnetics, MN) could eliminate REE dependency by ~2030 |
| **Methodology & Sources** | Composite scoring model, 26+ primary sources | Adjustable 6-dimension weighted risk scoring engine |

### Full Excel Dataset (15 Sheets)
The accompanying Excel workbook contains all raw data, the interactive composite risk scoring engine, and five pre-built wargame scenario weight presets.

---

## Key Findings

- **920 lbs of leverage:** Each F-35 contains 920 lbs of rare earth materials. Each Virginia-class submarine requires 9,200 lbs. China controls 90%+ of global REE processing.

- **Sole-source apocalypse:** AMPAC in Cedar City, Utah is the *only* US producer of ammonium perchlorate — the oxidizer in every US solid-fuel missile. One facility disruption stops Patriot, AMRAAM, Minuteman III, Trident II, and THAAD production simultaneously.

- **The ASML problem:** One Dutch company (ASML) manufactures 100% of the world's EUV lithography machines needed to produce any chip smaller than 7nm. There is no substitute. There will not be one for a decade.

- **Jervois: proof of concept:** China deliberately flooded the cobalt market → prices collapsed → the only US cobalt mine (Jervois Global, Idaho) went bankrupt in 2025. Zero US cobalt production remains. The same pattern is now running against lithium, graphite, and magnesium.

- **Active bans (as of May 2026):** China has imposed export bans or controls on gallium (BAN Dec 2024), germanium (BAN Dec 2024), antimony (BAN Dec 2024), tungsten (controls Jan 2025), 12 rare earth elements (controls Apr–Nov 2025), and nitrocellulose precursors.

---

## Risk Scoring Model

Each material and weapons system is scored across six dimensions (1–10 scale) with user-adjustable weights:

```
Composite Score = (S1 × W1) + (S2 × W2) + (S3 × W3) + (S4 × W4) + (S5 × W5) + (S6 × W6)

S1 — Materials & Components Supply     (default weight: 25%)
S2 — Geopolitical & Alliance Risk      (default weight: 20%)
S3 — Industrial Base Capacity          (default weight: 20%)
S4 — Logistics & Transport             (default weight: 15%)
S5 — Economic & Financial Stability    (default weight: 10%)
S6 — Regulatory & Policy Environment   (default weight: 10%)
```

**Risk Bands:**
- `CRITICAL` ≥ 9.0 — Immediate action required; active disruptions likely
- `HIGH` 7.5–8.9 — Significant vulnerability; mitigation needed within 1–3 years
- `MEDIUM` 6.0–7.4 — Moderate risk; monitor and develop contingency plans
- `LOW` < 6.0 — Manageable; standard procurement practices adequate

Five pre-built scenario presets are included in the Excel scoring engine:
- 🇨🇳 China Taiwan Strait Blockade
- ⚡ Industrial Base Surge (High-Intensity War)
- 📦 Logistics / Shipping Crisis
- 💰 Economic Warfare / Market Manipulation
- 🏛️ Balanced Peacetime Assessment

---

## Data Sources

All data is drawn from publicly available sources. Primary references include:

- **US Government:** USGS 2025 Critical Minerals List, GAO-24-107176, GAO-26-107882 (CHIPS Act), DoD DBB FY25-01, CRS IF10548, DoD National Defense Stockpile Reports
- **Think Tanks:** CSIS "Lights Out?" Taiwan Blockade Wargame (26 iterations, Jul 2025), CNAS "From Production Lines to Front Lines" (Apr 2025), FPRI "America's Scale Problem" (Oct 2025), SAIS Review Dec 2025
- **International Organizations:** IEA Global Critical Minerals Outlook 2025, NATO December 2024 Critical Materials List, World Bank WGI 2024
- **Industry Research:** Govini "Rock to Rocket" 2025, AIA Critical Minerals Report Mar 2026, J.P. Morgan Critical Minerals Feb 2026, GQG Partners REE Analysis Nov 2025
- **Financial Filings:** MP Materials SEC 8-K/10-K (2025–2026), Wolfspeed Chapter 11 filings (2025), Jervois Global bankruptcy filings
- **Defense Media:** War on the Rocks (Aug 2025), Breaking Defense (Jan/Apr 2026), Rare Earth Exchanges (Dec 2025), MWI West Point (Jul 2025)

Full source list with citations available on the [About page](about.html).

---

## Project Structure

```
sentinel/
├── index.html          # Landing page — key findings, risk matrix, module nav
├── intelligence.html   # Materials database — REEs, chips, metals, energetics, batteries
├── weapons.html        # 22 weapons platforms with filterable risk cards
├── scenarios.html      # 5 wargame scenarios with cascade timelines
├── investment.html     # 12 supplier company profiles + threat actors
├── technology.html     # 11 R&D substitution pathways
├── about.html          # Methodology, scoring model, sources
├── style.css           # Design system — military-industrial dark theme
├── main.js             # Filtering, scenario toggles, scroll animations
└── Defense_Supply_Chain_Dataset.xlsx   # Full 15-sheet data workbook
```

---

## Tech Stack

Pure static HTML/CSS/JS — no frameworks, no build tools, no dependencies. Deployable anywhere.

- **Fonts:** Barlow Condensed (headings) + Space Mono (data/labels) via Google Fonts
- **Design:** Custom CSS design system with CSS variables for full dark/light theming
- **Interactivity:** Vanilla JS — platform filter, accordion scenarios, scroll-reveal animations
- **Data:** Excel workbook with openpyxl-generated formatting and live scoring formulas

---

## Deployment

The site is a static HTML project with no build step required.

**GitHub Pages:**
```
Settings → Pages → Deploy from branch → main → / (root) → Save
```
Live at: `https://yourusername.github.io/sentinel/`

**Netlify Drop:**
Drag the project folder to [netlify.com/drop](https://netlify.com/drop) for an instant live URL.

---

## Disclaimer

All data sourced from publicly available government reports, academic research, and financial disclosures. **UNCLASSIFIED.** For educational and research purposes only.

This project does not contain classified information. Wargame scenarios are analytical constructs based on published research — not predictions of specific events. Investment profiles are not financial advice.

---

## Topics

`defense` `supply-chain` `critical-minerals` `rare-earth-elements` `semiconductors` `national-security` `geopolitics` `weapons-systems` `defense-industrial-base` `supply-chain-risk` `china` `nato`

---

*Data current as of May 2026. The supply chain landscape changes rapidly — verify figures against current sources for operational decision-making.*
