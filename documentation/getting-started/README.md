---
title: Getting Started Guide
description: Quick start guide for the Docsify Frontmatter OpenGraph Plugin - learn how to install and configure the plugin in minutes
author: Plugin Developer
type: article
image: ./cover.jpg
section: documentation
category: getting-started
---

# Getting Started

Welcome to the Docsify Frontmatter OpenGraph Plugin! This guide will help you get up and running quickly.

## Quick Start

1. **Include the Plugin Script**
   
   Add this line to your `index.html`:
   ```html
   <script src="./docsify-frontmatter-opengraph.js"></script>
   ```

2. **Add Front-matter to Your Pages**
   
   Add YAML front-matter to any Markdown file:
   ```markdown
   ---
   title: My Page Title
   description: A brief description of my page
   image: ./images/cover.jpg
   type: article
   ---
   
   # Your Content Here
   ```

3. **That's It!**
   
   The plugin automatically generates Open Graph and Twitter Card meta tags for social sharing.

## Features

- 📄 **Automatic Meta Tag Generation** - No manual configuration needed
- 🖼️ **Smart Image Resolution** - Handles relative/absolute paths with fallbacks
- 🛡️ **Error Handling** - Graceful handling of malformed content
- 🌐 **Browser Compatibility** - Works with older JavaScript engines
- 🔄 **Variable Substitution** - Use `{{variable}}` syntax in content
- 🎯 **Zero Configuration** - Works out of the box

## Browser Compatibility

✅ ES5 compatible (Internet Explorer 9+)  
✅ All modern browsers  
✅ Mobile browsers  

## Next Steps

- Check out the [API Reference](/documentation/api-reference/) for detailed configuration options
- Browse [Examples](/documentation/examples/) to see different use cases
- Run the [Tests](/tests/) to validate functionality
