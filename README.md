# JS Monster 🟨

The unofficial JavaScript mascot representing JS's total domination of the development world.

![JS Monster](public/images/js-monster.png)

## Overview

JS Monster is a fun, community-driven project celebrating JavaScript's ubiquity in modern development. From browsers to servers, mobile apps to machine learning, JavaScript has conquered it all - and now it has a mascot to match its dominance.

## Features

- **Monster Gallery** - Browse through various JS Monster designs and styles
- **Monster Builder** - Create your own custom JS Monster with different colors, accessories, and backgrounds
- **Blog System** - JavaScript insights, tutorials, and community content
- **SEO Optimized** - Built to rank for "Unofficial JavaScript Mascot" and related terms

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS
- **Content**: Markdown with Astro Content Collections
- **Deployment**: Optimized for static hosting (Vercel, Netlify, etc.)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jluterek/JS-Monster.git
cd JS-Monster
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Building for Production

```bash
npm run build
```

The static site will be generated in the `dist/` folder.

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

## Project Structure

```
/
├── public/
│   ├── images/         # Monster images and assets
│   └── monster-faces/  # Face expressions for the builder
├── src/
│   ├── components/     # Astro components
│   ├── content/        # Blog posts and content
│   ├── data/          # Monster data and configurations
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   └── styles/        # Global styles
└── package.json
```

## Contributing

Contributions are welcome! Whether it's new monster designs, blog posts, or feature improvements, feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Blog Contributions

To add a blog post:

1. Create a new `.md` file in `src/content/blog/`
2. Add the required frontmatter:

```yaml
---
title: 'Your Post Title'
description: 'Brief description'
pubDate: 2024-01-20
category: 'javascript' # or 'tutorials', 'opinion', etc.
tags: ['javascript', 'web-development']
author: 'Your Name'
featured: false
---
```

3. Write your content in Markdown

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- JavaScript community for the inspiration
- All contributors who help make JS Monster better
- Brendan Eich for creating JavaScript in 10 days and unleashing this beast

## Links

- [Live Site](https://jsmonster.dev) _(Update with your domain)_
- [GitHub Discussions](https://github.com/jluterek/JS-Monster/discussions)
- [Issues](https://github.com/jluterek/JS-Monster/issues)

---

Made with 💛 by James Luterek
