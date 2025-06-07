---
title: API Reference
description: Complete API reference for the Docsify Frontmatter OpenGraph Plugin - functions, configuration options, and front-matter fields
author: Plugin Developer
type: article
image: ./cover.jpg
section: documentation
category: api-reference
keywords: api, reference, functions, configuration, front-matter
---

# API Reference

Complete reference for the Docsify Frontmatter OpenGraph Plugin functions and configuration options.

## Front-matter Fields

The plugin recognizes these YAML front-matter fields:

### Core Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `title` | String | `document.title` | Page title for social sharing |
| `description` | String | Meta description | Page description for social cards |
| `image` | String | Cover image fallback | Social sharing image (relative or absolute URL) |
| `type` | String | `'article'` | OpenGraph content type |

### Examples

```yaml
---
title: "My Article Title"
description: "A comprehensive guide to using the plugin"
image: ./assets/cover.jpg
type: website
---
```

## Generated Meta Tags

### Open Graph Tags

The plugin automatically generates these Open Graph meta tags:

- `og:title` - Page title
- `og:description` - Page description  
- `og:type` - Content type
- `og:url` - Current page URL
- `og:image` - Social sharing image (if available)

### Twitter Card Tags  

- `twitter:card` - Card type (`summary_large_image` or `summary`)
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Social sharing image (if available)

## Image Resolution

Images are resolved in this priority order:

1. **Front-matter image** - Specified in `image` field
2. **Cover image** - `cover.jpg`, `cover.png`, or `cover.gif` in same directory
3. **No image** - Twitter card becomes `summary` type

### Path Resolution

- **Absolute URLs**: `https://example.com/image.jpg` → Used as-is
- **Root-relative**: `/images/cover.jpg` → `https://yoursite.com/images/cover.jpg`
- **Relative**: `cover.jpg` → `https://yoursite.com/current-path/cover.jpg`

## Variable Substitution

Use `{{variable}}` syntax in your content to substitute front-matter values:

```markdown
---
title: My Project
version: 1.0.0
author: John Doe
---

# Welcome to {{title}}

Created by {{author}}, version {{version}}
```

Becomes:

```html
<h1>Welcome to My Project</h1>
<p>Created by John Doe, version 1.0.0</p>
```

## Error Handling

The plugin includes comprehensive error handling:

- ✅ Malformed YAML front-matter
- ✅ Missing DOM elements
- ✅ Invalid image URLs
- ✅ Browser compatibility issues

All errors are logged with warnings but never break the page.

## Browser Support

- **ES5 Compatible** - No modern JavaScript features
- **Graceful Degradation** - Continues working with partial failures
- **Safe Operations** - Extensive null checking and validation
