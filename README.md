# vuyu

A lightweight static website built with Nunjucks templates and Terminal.CSS. Deployed to [vuyu.dev](https://www.vuyu.dev)

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/vuyu.git
cd vuyu
yarn install
```

### Build the Site

To build the static site:

```bash
yarn build
```

The built site will be in the `_site/` directory.

### Serve Locally

To preview the site locally:

```bash
yarn run
```

## Project Structure

```plaintext
src/
  _includes/      # Nunjucks layout and partial templates
  articles/       # Markdown articles
  assets/         # Images and other static assets
  css/            # CSS stylesheets
  index.njk       # Main index template
  articles.njk    # Articles list template
_site/            # Output directory for the built site
```
