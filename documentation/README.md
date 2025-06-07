---
title: Documentation
description: Complete documentation for the Docsify Frontmatter OpenGraph Plugin - API reference, examples, and guides
author: Plugin Developer
type: website
image: ./cover.jpg
section: documentation
keywords: documentation, api, guide, reference
---

# 📚 Documentation

Complete documentation for the Docsify Frontmatter OpenGraph Plugin.

## 🚀 Quick Navigation

### [Getting Started](/documentation/getting-started/)
**Start here!** Learn how to install and configure the plugin in minutes.

### [API Reference](/documentation/api-reference/) 
**Complete reference** for all configuration options, front-matter fields, and generated meta tags.

### [Examples](/documentation/examples/)
**Real-world examples** and use cases to inspire your implementation.

## 🧪 Testing & Validation

### [Test Cases](/tests/test-cases/)
Browse individual test cases that demonstrate different plugin scenarios.

### [Test Suite](/tests/)
Run automated tests to validate plugin functionality.

## ✨ Feature Highlights

- **📄 Zero Configuration** - Works out of the box with sensible defaults
- **🔄 Variable Substitution** - Use `{{variable}}` syntax in content  
- **🖼️ Smart Image Resolution** - Automatic path handling and fallbacks
- **🌐 Browser Compatible** - ES5 support for older browsers
- **🛡️ Error Resilient** - Graceful handling of edge cases
- **📋 Three-Tier Config** - Page → Site → Default priority system

## 🎯 Quick Examples

### Basic Front-matter
```markdown
---
title: My Page
description: Page description
image: ./cover.jpg
---
# Content
```

### Variable Substitution
```markdown
---
title: Version 2.0 Release
version: 2.0
---
# Welcome to {{title}}
This is version {{version}} of our software.
```

### Configuration Priority
1. **Page front-matter** (highest priority)
2. **Root README.md front-matter** (site defaults)  
3. **index.html config** (fallback defaults)

## 🤝 Contributing

Found an issue or want to contribute? 

1. Check out the [test cases](/tests/test-cases/) to understand expected behavior
2. Run the [test suite](/tests/) to validate changes
3. Submit issues or pull requests on GitHub

## 📖 Additional Resources

- **[Installation Guide](/INSTALL.md)** - Step-by-step setup instructions
- **[Plugin Source](./docsify-frontmatter-opengraph.js)** - View the complete plugin code
- **[Live Demo](/tests/test-cases/variable-substitution.md)** - See variable substitution in action
