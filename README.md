---
title: Docsify Frontmatter OpenGraph Plugin
description: A robust Docsify plugin that automatically generates Open Graph and Twitter Card meta tags from YAML front-matter in your Markdown files
author: Plugin Developer
version: 1.0.2
type: website
image: ./cover.jpg
keywords: docsify, plugin, opengraph, twitter-card, meta-tags, social-sharing
github: https://github.com/gllmAR/docsify-frontmatter-opengraph
---

# 🌐 Docsify Frontmatter OpenGraph Plugin

A robust Docsify plugin that automatically generates Open Graph and Twitter Card meta tags from YAML front-matter in your Markdown files.

[![ES5 Compatible](https://img.shields.io/badge/ES5-Compatible-green.svg)](https://kangax.github.io/compat-table/es5/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen.svg)](#)
[![Test Coverage](https://img.shields.io/badge/Tests-15%2B%20unit%20%7C%204%2B%20integration-blue.svg)](/tests/)
[![Social Media Ready](https://img.shields.io/badge/Social%20Media-Ready-blue.svg)](#-social-media-support)

## ✨ Features

- 📄 **Automatic Meta Tag Generation**: Reads YAML front-matter and creates Open Graph/Twitter Card tags
- 🖼️ **Smart Image Resolution**: Converts relative paths to absolute URLs with fallback to cover images  
- 🛡️ **Error Handling**: Graceful handling of malformed content and missing DOM elements
- 🌐 **Browser Compatibility**: Works with older JavaScript engines (ES5 compatible)
- 🔄 **Variable Substitution**: Use `{{variable}}` syntax in content
- 📋 **Three-Tier Configuration**: Page → Site → Default priority system
- 🎯 **Zero Configuration**: Works out of the box with sensible defaults

## 🚀 Quick Start

### 1. Installation

Add the plugin script to your `index.html`:

```html
<script src="./docsify-frontmatter-opengraph.js"></script>
```

### 2. Add Front-matter

Add YAML front-matter to your Markdown files:

```markdown
---
title: My Page Title
description: A brief description of my page
image: ./images/cover.jpg
type: article
---

# My Page Content
```

### 3. Done!

The plugin automatically generates meta tags for social sharing. No additional configuration needed.

## 📖 Documentation

- **[Getting Started](/documentation/getting-started/)** - Installation and basic usage
- **[API Reference](/documentation/api-reference/)** - Complete configuration guide  
- **[Examples](/documentation/examples/)** - Real-world usage examples
- **[Test Suite](/tests/)** - Validate functionality

## 🧪 Advanced Features

### Variable Substitution

Use `{{variable}}` syntax to substitute front-matter values in your content:

```markdown
---
title: My Project
version: 1.0.0
author: John Doe
---

# Welcome to {{title}}

Created by {{author}}, version {{version}}
```

### Three-Tier Configuration System

1. **Page front-matter** (highest priority)
2. **Root README.md front-matter** (site-wide defaults)
3. **index.html configuration** (fallback defaults)

### Smart Image Resolution

The plugin resolves images in this order:
1. **Specified image** from front-matter (relative paths become absolute)
2. **Cover image** in same directory (`cover.jpg`, `cover.png`, `cover.gif`)  
3. **Default fallback** or no image

## 🌍 Browser Compatibility

- ✅ **ES5 Compatible** - Works in Internet Explorer 9+
- ✅ **No External Dependencies** - Pure JavaScript
- ✅ **Graceful Error Handling** - Never breaks your page
- ✅ **Progressive Enhancement** - Works with or without front-matter

## 🏷️ Generated Meta Tags

### Open Graph
- `og:title` - Page title
- `og:description` - Page description  
- `og:type` - Content type (default: 'article')
- `og:url` - Current page URL
- `og:image` - Social sharing image (if available)

### Twitter Card  
- `twitter:card` - 'summary_large_image' or 'summary'
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Social sharing image (if available)

## 🛡️ Error Handling

The plugin includes comprehensive error handling:

- ✅ **Malformed YAML** front-matter
- ✅ **Missing DOM elements** 
- ✅ **Invalid image URLs**
- ✅ **Browser compatibility** issues

All errors are logged to console but never break the page.

## 🧪 Testing

Run the test suite to validate functionality:

```bash
cd tests
./run-tests.sh
```

Or browse **[Test Cases](/tests/test-cases/)** to see the plugin in action.

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Issues and pull requests welcome! See the [test suite](/tests/) for expected behavior.