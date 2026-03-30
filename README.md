# Effects 🔊

A sound effects soundboard built with **Svelte 5** and **Vite**.

🌐 **Live demo:** [chenpeleg.github.io/effects](https://chenpeleg.github.io/effects/)

---

## Features

- 🎵 25+ one-click sound effects (laughing, screaming, alarms, songs, and more)
- 🗂️ Filter sounds by category: General, Funny, Scary, Games, Song, Rude
- 🌊 Animated wave indicator while a sound is playing
- ⏹️ Stop button to interrupt any currently playing sound
- 📱 Responsive layout — works on desktop and mobile
- 💾 Optional Firebase backend for saving custom categories (when deployed with Firebase)

---

## Tech Stack

| Layer      | Technology                         |
|------------|------------------------------------|
| UI         | [Svelte 5](https://svelte.dev) (compatibility mode) |
| Build tool | [Vite 5](https://vitejs.dev)       |
| Testing    | [Jest 29](https://jestjs.io) + @testing-library/svelte |
| Hosting    | GitHub Pages / Firebase Hosting    |

---

## Getting Started

### Prerequisites

- Node.js **≥ 18**

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Available Scripts

| Script                 | Description                                          |
|------------------------|------------------------------------------------------|
| `npm run dev`          | Start dev server (Firebase mode)                     |
| `npm run dev:github`   | Start dev server (GitHub Pages mode)                 |
| `npm run build`        | Production build                                     |
| `npm run build:pages`  | Production build for GitHub Pages deployment         |
| `npm run build:site`   | Production build for Firebase deployment             |
| `npm run preview`      | Preview the production build locally                 |
| `npm test`             | Run the test suite with Jest                         |
| `npm run test:watch`   | Run tests in watch mode                              |

---

## Project Structure

```
src/
├── assets/          # Static assets (audio files, images)
├── config/          # App configuration (env-aware)
├── data/            # Sound card definitions
├── lib/             # Svelte components
│   ├── animation/   # Wave animation component
│   ├── components/  # UI components (cards, header, nav)
│   ├── models/      # Shared types and category definitions
│   ├── router/      # Client-side routing
│   └── style/       # Global styles
├── provider/        # Firebase provider
├── services/        # App services (audio, language, …)
├── store/           # Svelte stores (cards, main state, settings)
└── main.js          # App entry point
```

---

## Deployment

### GitHub Pages

```bash
npm run build:pages
```

The build output lands in `build/` and is deployed automatically via GitHub Actions to `https://chenpeleg.github.io/effects/`.

### Firebase Hosting

```bash
npm run build:site
```

Deploy the `build/` directory with the Firebase CLI. Firebase mode enables the optional user-login and category-saving features.

---

## License

[MIT](LICENSE)
