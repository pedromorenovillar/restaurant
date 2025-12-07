# Martuteneko Jatetxea - Restaurant Page

A single-page restaurant website built with **Webpack** and vanilla JavaScript, showcasing a Basque restaurant's menu, information, and location.

![Restaurant](./restaurant.gif)

## Features

- **Dynamic Page Navigation**: Switch between Home, Menu, and About pages without full page reloads
- **Responsive Design**: Mobile-friendly layout with custom styling
- **Interactive Menu**: Display of starters, mains, and desserts with pricing
- **Location Integration**: Embedded Google Map and contact information
- **Modern Tooling**: Built with Webpack, featuring hot module reloading during development

## Project Structure

```
src/
├── index.js           # Main entry point with navigation logic
├── home-load.js       # Home page content
├── menu-load.js       # Menu page with dish listings
├── about-load.js      # About page with map and contact info
├── styles.css         # Custom styling
├── normalize.css      # CSS normalization
└── template.html      # HTML template
```

## Learning Objectives

This project demonstrates:

- DOM manipulation with vanilla JavaScript
- Webpack configuration and bundling
- Asset management (images, CSS, HTML)
- Single-page application (SPA) architecture
- ES6 module imports/exports

## Technologies Used

- **Webpack** 5 - Module bundler
- **Webpack Dev Server** - Development server with hot reload
- **HTML Webpack Plugin** - Template injection
- **CSS & Style Loaders** - CSS bundling
- **HTML Loader** - HTML asset support


## Build Setup

This project uses **split Webpack configurations** following best practices from webpack-merge:

```
webpack.common.js   # Shared config (entry, output, loaders, plugins)
webpack.dev.js      # Development-only settings (devServer, source maps)
webpack.prod.js     # Production build settings
```

### Available Scripts

```
pnpm start      # Launches webpack-dev-server using webpack.dev.js
pnpm run build  # Creates a production build using webpack.prod.js
```

### Notes on HtmlWebpackPlugin

The HTML template is generated from `src/template.html`.
No dynamic `<title>` is injected with HtmlWebpackPlugin — the title is managed directly inside the template for simplicity.
