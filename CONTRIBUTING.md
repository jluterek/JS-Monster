# Contributing to JS Monster

Thank you for your interest in contributing to JS Monster! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

- Check if the issue already exists
- Provide clear description and steps to reproduce
- Include browser/OS information if relevant

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test your changes locally
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

### Code Style

- Use consistent formatting
- Follow existing patterns in the codebase
- Keep components modular and reusable
- Write clear, self-documenting code

### Adding Blog Posts

Create a new `.md` file in `src/content/blog/` with proper frontmatter:

```yaml
---
title: 'Your Title'
description: 'Brief description'
pubDate: 2024-01-20
category: 'javascript'
tags: ['tag1', 'tag2']
author: 'Your Name'
featured: false
---
```

### Adding Monster Designs

Add new monster images to `public/images/` following the naming convention `JS Monster[number].png`.

## Development Setup

```bash
npm install
npm run dev
```

## Questions?

Open an issue or join the [GitHub Discussions](https://github.com/jluterek/JS-Monster/discussions).
