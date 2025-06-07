---
title: Usage Examples
description: Real-world examples of using the Docsify Frontmatter OpenGraph Plugin in different scenarios - blog posts, landing pages, documentation
author: Plugin Developer
type: article
image: ./cover.jpg
section: documentation
category: examples
keywords: examples, usage, blog, landing-page, documentation, tutorials
---

# Examples

Real-world examples of using the Docsify Frontmatter OpenGraph Plugin in different scenarios.

## Basic Blog Post

Perfect for article-style content:

```markdown
---
title: "10 Tips for Better Documentation"
description: "Learn how to create documentation that users actually want to read"
image: ./images/documentation-tips.jpg
type: article
---

# 10 Tips for Better Documentation

Good documentation is the foundation of any successful project...
```

**Generated Meta Tags:**
- `og:title` = "10 Tips for Better Documentation"
- `og:type` = "article" 
- `og:image` = Full URL to documentation-tips.jpg

## Product Landing Page

Great for marketing pages:

```markdown
---
title: "Amazing Product - Revolutionary Solution"
description: "Transform your workflow with our innovative tool that saves hours of work"
image: https://cdn.example.com/product-hero.png
type: website
---

# Amazing Product

## Revolutionary Solution for Modern Teams
```

## Documentation with Variables

Using variable substitution for dynamic content:

```markdown
---
title: "API Documentation v2.1"
version: "2.1.0"
api_url: "https://api.example.com/v2"
last_updated: "2024-12-01"
---

# {{title}}

Welcome to version {{version}} of our API documentation.

**Base URL:** {{api_url}}  
**Last Updated:** {{last_updated}}

## Getting Started with API {{version}}

Connect to {{api_url}} to begin...
```

**Result:** All `{{variable}}` placeholders get replaced with front-matter values.

## Multi-language Content

Supporting different languages:

```markdown
---
title: "Guía de Inicio Rápido"
description: "Aprende a usar el plugin en minutos"
image: ./assets/guide-es.jpg
type: article
lang: es
---

# {{title}}

Esta guía te ayudará a comenzar rápidamente...
```

## Technical Documentation

For developer-focused content:

```markdown
---
title: "Plugin Architecture Guide"
description: "Deep dive into the internal architecture and design patterns"
image: ./diagrams/architecture.svg
type: article
category: "technical"
difficulty: "advanced"
---

# {{title}}

## Overview

This {{category}} guide covers {{difficulty}} concepts...
```

## Fallback Scenarios

### No Image Specified

```markdown
---
title: "Simple Article"
description: "Article without a specific image"
---

# Simple Article

Content here...
```

**Behavior:** Plugin looks for `cover.jpg`, `cover.png`, or `cover.gif` in the same directory.

### Minimal Front-matter

```markdown
---
title: "Quick Note"
---

# Quick Note

Just a title, everything else uses defaults.
```

**Behavior:** 
- Uses document title as fallback
- Uses meta description if available
- Defaults to `type: article`

## Real-world Use Cases

### 1. Company Blog
- Articles with author info and featured images
- Consistent social sharing appearance
- SEO-optimized meta tags

### 2. Product Documentation  
- Version-specific content with variables
- Technical diagrams as social images
- Branded sharing cards

### 3. Educational Content
- Course materials with progress tracking
- Lesson-specific thumbnails
- Student-friendly social previews

### 4. Open Source Projects
- README files with project logos
- Feature announcement pages
- Community-friendly sharing

## Testing Your Setup

1. Add front-matter to a test page
2. Open browser developer tools
3. Check `<head>` section for generated meta tags
4. Test social sharing on platforms like Twitter, LinkedIn, Facebook
5. Validate with tools like [OpenGraph.xyz](https://www.opengraph.xyz/)

## Best Practices

- **Image Dimensions**: Use 1200x630px for optimal social sharing
- **Title Length**: Keep under 60 characters for full display
- **Description Length**: 150-160 characters work best
- **Image Formats**: JPG, PNG, GIF are all supported
- **Variable Names**: Use clear, descriptive variable names
