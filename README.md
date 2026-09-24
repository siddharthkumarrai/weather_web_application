<div align="center">

# 🌦️ Weather Web Application

**A clean, responsive current-weather app built with React, Vite, and Material UI.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://siddharth-weather-app.netlify.app/)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/Material%20UI-5-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning%20Project-blue?style=for-the-badge)

[**View Live Demo**](https://siddharth-weather-app.netlify.app/) · [**Report a Bug**](https://github.com/siddharthkumarrai/weather_web_application/issues) · [**Request a Feature**](https://github.com/siddharthkumarrai/weather_web_application/issues)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [What I Learned](#-what-i-learned)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [Acknowledgements](#-acknowledgements)

---

## 📌 About the Project

This is a **current weather report application** built with **React** and **Vite**. It lets users look up the present weather conditions for a location through a modern, component-based interface styled with **Material UI**.

It is one of my **first web development projects**, built while I was learning React fundamentals: components, props, state, hooks, and working with external data. It also served as my first experience of taking an app from `npm create vite` all the way to a live deployment.

## 🌐 Live Demo

**👉 [siddharth-weather-app.netlify.app](https://siddharth-weather-app.netlify.app/)**

<!-- Add a screenshot or GIF of the app here, for example:
<p align="center">
  <img src="./screenshot.png" alt="Weather app preview" width="800">
</p>
-->

## ✨ Features

- **Current weather report**: view up-to-date weather conditions for a location.
- **Material UI interface**: consistent, accessible components and icons from MUI.
- **Component-based architecture**: UI split into reusable React components.
- **Fast development and builds**: powered by Vite with Hot Module Replacement (HMR).
- **Code quality tooling**: ESLint configured with React, React Hooks, and React Refresh rules.
- **Static deployment**: builds to plain static files and is hosted on Netlify.

<!-- Add or edit specific features to match your app, e.g. search by city, temperature, humidity, wind speed, weather icons, unit toggle. -->

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| **Library** | [React 18](https://react.dev/) |
| **Build tool** | [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react` |
| **UI components** | [Material UI (MUI) v5](https://mui.com/) |
| **Icons** | `@mui/icons-material` |
| **Styling engine** | Emotion (`@emotion/react`, `@emotion/styled`) |
| **Typography** | [Roboto](https://fontsource.org/fonts/roboto) via `@fontsource/roboto` |
| **Linting** | ESLint 8 with React, React Hooks, and React Refresh plugins |
| **Hosting** | Netlify |

## 📁 Project Structure

```
weather_web_application/
├── public/                 # Static assets served as-is
├── src/                    # React source code (components, styles, entry point)
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore              # Files excluded from version control
├── index.html              # Vite HTML entry point
├── package.json            # Dependencies and npm scripts
├── package-lock.json       # Locked dependency versions
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later (required by Vite 5)
- **npm** (bundled with Node.js)

Check your versions:

```bash
node -v
npm -v
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/siddharthkumarrai/weather_web_application.git
```

**2. Move into the project folder**

```bash
cd weather_web_application
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL printed in your terminal (by default `http://localhost:5173`).

<!--
If your app uses a weather API key, document it here, for example:

### Environment variables

Create a `.env` file in the project root:

    VITE_WEATHER_API_KEY=your_api_key_here

Then read it in code with `import.meta.env.VITE_WEATHER_API_KEY`.

Note: Vite exposes `VITE_`-prefixed variables to the browser, so never treat a
client-side API key as a secret. Restrict or rotate it if needed, and make sure
`.env` is listed in .gitignore.
-->

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with HMR |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint and fails on any warning |

## ☁️ Deployment

The app is deployed on **Netlify** as a static site.

1. Push the project to GitHub.
2. In Netlify, choose **Add new site → Import an existing project** and select this repository.
3. Use these build settings:

   | Setting | Value |
   | --- | --- |
   | Build command | `npm run build` |
   | Publish directory | `dist` |

4. Click **Deploy**. Every push to `main` triggers an automatic redeploy.

## 🎓 What I Learned

<!-- Trim or edit this list so it matches what you actually built. -->

- **React fundamentals**: functional components, JSX, props, and composition.
- **State and hooks**: managing UI state with `useState` and side effects with `useEffect`.
- **Fetching data**: requesting data from an external API and rendering the response.
- **Component libraries**: building a polished UI quickly with Material UI and its icon set.
- **Modern tooling**: bootstrapping a project with Vite, understanding `package.json`, npm scripts, and dependency management.
- **Linting**: catching mistakes early with ESLint and React-specific rules.
- **Deployment**: building for production and shipping a static site with Netlify.

## 🗺️ Roadmap

Planned improvements:

- [ ] Add a screenshot or GIF preview to this README
- [ ] Multi-day forecast view
- [ ] Search with city autocomplete
- [ ] Detect the user's location with the Geolocation API
- [ ] Celsius / Fahrenheit unit toggle
- [ ] Dark mode using the MUI theme
- [ ] Loading and error states for failed or slow requests
- [ ] Rename the package from `react-mini-project` to match the repository
- [ ] Add unit tests (Vitest and React Testing Library)
- [ ] Migrate to TypeScript

## 👤 Author

**Siddharth Kumar Rai**

- GitHub: [@siddharthkumarrai](https://github.com/siddharthkumarrai)
- Live project: [siddharth-weather-app.netlify.app](https://siddharth-weather-app.netlify.app/)

## 🙏 Acknowledgements

- [React](https://react.dev/) and [Vite](https://vitejs.dev/) documentation
- [Material UI](https://mui.com/) for the component library
- The weather data provider used by this app
- [Netlify](https://www.netlify.com/) for free static hosting

---

<div align="center">

⭐ If this project helped you learn something, consider giving it a star!

*Built when I first started learning web development.*

</div>
