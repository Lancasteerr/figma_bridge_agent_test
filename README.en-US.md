# Easy Community · Figma to Code

<p align="center">
  <a href="./README.md">中文</a> · <strong>English</strong>
</p>

This repository is a Figma-to-code practice project built with [figma-local-agent](plugin://figma-local-agent@figma-bridge-marketplace). A Coding Agent reads the selected design scope on the current Figma page and recreates the desktop homepage of **Easy Community** with React, TypeScript, and Vite.

The project focuses on visual reproduction, reusable component structure, and lightweight frontend interactions. It does not include a backend service.

## Prompt Used

The original prompt used for this project is preserved below:

> 使用React ”像素级“复刻现在figma设计稿所选的页面 [@figma-local-agent](plugin://figma-local-agent@figma-bridge-marketplace) 遇到交互问题（滚动，点击，选中变化等）和我确认实现

English translation:

> Recreate the currently selected page in the Figma design “pixel-perfectly” with React using `figma-local-agent`. Check with me before implementing behavior whose interaction is unclear, such as scrolling, clicking, or selection-state changes.

> [!IMPORTANT]
> When reading a design through the local Figma Bridge, keep **Figma Desktop running in the foreground**. This prevents the app from sleeping and interrupting or failing to provide design context.

Figma design context can establish the materialized layout, styling, text, assets, and visible states, but it does not define runtime interactions by itself. Confirm the expected behavior with the user before implementing scrolling, click results, selection-state changes, or other interaction details.

## Design Reproduction

The following comparison shows the 1440px Figma design and the current frontend implementation:

<table>
  <thead>
    <tr>
      <th width="50%">Figma design</th>
      <th width="50%">Frontend implementation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="./docs/images/figma-design.png" alt="Figma design for Easy Community" /></td>
      <td><img src="./docs/images/implementation-1440.png" alt="Easy Community frontend implementation at 1440px" /></td>
    </tr>
  </tbody>
</table>

## Highlights

- Recreates the desktop header, search area, sidebar, publishing panel, and article feed.
- Splits article cards, sidebar navigation, the site header, and the publishing panel into reusable components.
- Supports local selection changes between the Recommended, Trending, and Following navigation items.
- Supports search input, follow-state toggles, and like-state and count updates.
- Uses local images and SVG icons to reproduce the design without a remote asset service.
- Adds semantic labels and keyboard focus states to key controls, with component tests for the main interactions.

## Tech Stack

| Category | Technology |
| --- | --- |
| UI | React 19.3 |
| Language | TypeScript 7 |
| Build tool | Vite 8.3 |
| Styling | CSS Modules, CSS |
| Testing | Vitest 5, Testing Library, jsdom |

## Getting Started

### Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

### Install and run

```bash
npm install
npm run dev
```

The development server runs at [http://127.0.0.1:5173](http://127.0.0.1:5173) by default.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Run TypeScript checks and create a production build |
| `npm run test` | Run all component tests |
| `npm run test:watch` | Run component tests in watch mode |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
.
├── docs/images/          # Design and implementation screenshots used by the README
├── src/
│   ├── assets/figma/     # Page images and icons collected from the design context
│   ├── components/       # Reusable page components and their styles
│   ├── data/             # Demo community article data
│   ├── test/             # Test environment setup
│   ├── types/            # TypeScript type definitions
│   ├── App.test.tsx      # Rendering and interaction tests
│   ├── App.module.css    # Overall page layout styles
│   └── App.tsx           # Page composition entry point
├── package.json
└── vite.config.ts
```

## Project Scope

- This project is a design reproduction and frontend interaction demo. It does not provide backend APIs, authentication, or persistent data.
- Search input, navigation selection, follow state, and like state live only in the current page memory and reset after a refresh.
- The page follows the 1440px Figma desktop canvas and has a 1440px minimum width. Smaller viewports preserve the desktop layout instead of switching to a mobile layout.
- Figma provides static visual evidence only; runtime behaviors such as scrolling, clicking, and selection changes follow the implementation confirmed with the user.
