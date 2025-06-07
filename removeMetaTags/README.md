---
title: removeMetaTags Function Test
description: Test suite verifying the removeMetaTags function - validates removal of Open Graph and Twitter Card meta tags from document head
author: Plugin Developer
type: test-documentation
image: ./cover.jpg
section: testing
function: removeMetaTags
test-type: unit-test
keywords: removeMetaTags, meta-tags, cleanup, dom-manipulation, opengraph, twitter-card
---

# Test: removeMetaTags

This test suite verifies the `removeMetaTags` function in the plugin. It checks that all Open Graph and Twitter meta tags are removed from the document head.

## Test Case

- **removes all og: and twitter: meta tags**

### Setup
Add the following meta tags to `<head>`:

```
<meta property="og:title" content="Test Title">
<meta property="og:image" content="test.jpg">
<meta name="twitter:title" content="Test Title">
<meta name="twitter:image" content="test.jpg">
<meta name="description" content="Should stay">
```

### Expected
After running `removeMetaTags`, only `<meta name="description">` remains.
