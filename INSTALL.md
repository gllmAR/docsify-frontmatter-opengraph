# Installation Guide

## Quick Setup (3 Steps)

### 1. Download the Plugin

Download `docsify-frontmatter-opengraph.js` from this repository.

### 2. Add to Your Docsify Site

Include the plugin script in your `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Docsify Site</title>
    <!-- ... other head elements ... -->
</head>
<body>
    <div id="app"></div>
    
    <script>
        window.$docsify = {
            // ... your docsify config ...
            
            // Optional: Default OpenGraph configuration
            frontmatterOpenGraph: {
                siteName: 'My Site',
                defaultTitle: 'My Default Title',
                defaultDescription: 'My default description',
                defaultImage: './cover.jpg',
                defaultType: 'website',
                twitterHandle: '@myhandle',
                locale: 'en_US'
            }
        };
    </script>
    
    <!-- Docsify Core -->
    <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
    
    <!-- Add the Plugin -->
    <script src="./docsify-frontmatter-opengraph.js"></script>
</body>
</html>
```

### 3. Add Front-matter to Your Pages

Add YAML front-matter to any Markdown file:

```markdown
---
title: My Page Title
description: A brief description of my page
image: ./images/cover.jpg
type: article
---

# My Page Content

Your content here...
```

## That's It!

The plugin will automatically generate Open Graph and Twitter Card meta tags for social sharing.

## Verify Installation

1. Open your Docsify site
2. Open browser developer tools (F12)
3. Check the `<head>` section for meta tags like:
   - `<meta property="og:title" content="...">`
   - `<meta property="og:description" content="...">`
   - `<meta name="twitter:card" content="...">`

## Advanced Configuration

See the [API Reference](/documentation/api-reference/) for complete configuration options.
