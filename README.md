# Vuyu.dev Personal Website

A personal website built with Eleventy (11ty), featuring a clean terminal-like UI.

## Features

- Modern Eleventy v3+ configuration with ESM syntax
- Navigation system using @11ty/eleventy-navigation
- Terminal.css for styling
- Markdown-based articles with date formatting
- Responsive design

## Project Structure

```
vuyu/
├── _site/                # Output folder (auto-generated)
├── src/                  # Source files
│   ├── _includes/        # Layout templates
│   │   ├── article.njk   # Article template
│   │   └── layout.njk    # Main layout template
│   ├── articles/         # Article content
│   ├── assets/           # Static assets
│   └── css/              # Stylesheets
├── eleventy.config.js    # Eleventy configuration
└── package.json          # Project dependencies and scripts
```

## Getting Started

1. Install dependencies:
   ```
   yarn install
   ```

2. Start the development server:
   ```
   yarn start
   ```

3. Build for production:
   ```
   yarn build
   ```

## Scripts

- `yarn build` - Build the site for production
- `yarn start` - Start development server with live reload
- `yarn clean` - Remove the build directory

## Technologies

- [Eleventy (11ty)](https://www.11ty.dev/) - Static site generator
- [Terminal.css](https://terminalcss.xyz/) - Terminal-style CSS framework
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating language
