# 🛠️ Testing & Verification Tools

This directory contains tools to test and verify the Docsify Frontmatter OpenGraph Plugin functionality.

## 📋 Available Tools

### 1. `verify-meta-tags.html`
**Purpose**: Checks if Open Graph and Twitter Card meta tags are present in the DOM

**Usage**: 
```bash
# Open in browser
open verify-meta-tags.html
```

**Features**:
- Automatically loads the main site in an iframe
- Checks for presence of all expected meta tags
- Shows success/failure status for each tag type
- Displays actual tag content for verification

---

### 2. `social-media-test.html`
**Purpose**: Comprehensive social media preview simulator

**Usage**:
```bash
# Open in browser
open social-media-test.html
```

**Features**:
- Tests main site and documentation pages
- Provides links to external validators:
  - Facebook Sharing Debugger
  - Twitter Card Validator
  - LinkedIn Post Inspector
  - Open Graph Checker
- Simulates what social media crawlers see
- Shows preview images and meta tag content

---

## 🧪 Testing Workflow

1. **Basic Verification**:
   ```bash
   # Open verify-meta-tags.html and check if all tags are green
   ```

2. **Social Media Testing**:
   ```bash
   # Open social-media-test.html and test with external validators
   ```

3. **Console Debugging**:
   ```bash
   # Open main site and check browser console for:
   # - "Loaded site defaults from README.md"
   # - "doneEach hook triggered for path"
   # - "Frontmatter OpenGraph Plugin - Generating meta tags"
   ```

## 🔗 External Validation

Use these external services to verify social media preview functionality:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Open Graph**: https://opengraphcheck.com/

## 🐛 Troubleshooting

If meta tags are not appearing:

1. Check browser console for plugin errors
2. Verify Docsify has loaded completely
3. Ensure the plugin script is included in index.html
4. Check if front-matter is properly formatted in markdown files
5. Use the verification tools to diagnose issues

## 📝 Expected Output

When working correctly, you should see console messages like:
```
Loaded site defaults from README.md: {title: "...", description: "...", ...}
doneEach hook triggered for path: /#/
Final resolved image: https://yoursite.com/cover.jpg
Frontmatter OpenGraph Plugin - Generating meta tags:
Title: Your Site Title
Description: Your site description
Image: https://yoursite.com/cover.jpg
Type: website
```

And meta tags in the DOM:
```html
<meta property="og:title" content="Your Site Title">
<meta property="og:description" content="Your site description">
<meta property="og:image" content="https://yoursite.com/cover.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yoursite.com/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Site Title">
<meta name="twitter:description" content="Your site description">
<meta name="twitter:image" content="https://yoursite.com/cover.jpg">
```
