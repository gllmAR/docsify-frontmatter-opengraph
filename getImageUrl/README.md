---
title: getImageUrl Function Test
description: Test suite verifying the getImageUrl function - validates image URL resolution for absolute, relative, and root-relative paths
author: Plugin Developer
type: test-documentation
image: ./cover.jpg
section: testing
function: getImageUrl
test-type: unit-test
keywords: getImageUrl, image-url, path-resolution, absolute-url, relative-path, unit-test
---

# Test: getImageUrl

This test suite verifies the `getImageUrl` function in the plugin. It checks that image URLs are resolved correctly based on the input and base path.

## Test Cases

- **returns null if no image**
- **returns absolute URL if already absolute**
- **returns absolute URL for root-relative path**
- **returns absolute URL for relative path**

---

## returns null if no image

Call: `getImageUrl(undefined, '/docs/page.md')`

Expected: `null`

---

## returns absolute URL if already absolute

Call: `getImageUrl('https://example.com/img.jpg', '/docs/page.md')`

Expected: `'https://example.com/img.jpg'`

---

## returns absolute URL for root-relative path

Call: `getImageUrl('/img.jpg', '/docs/page.md')`

Expected: `location.origin + '/img.jpg'`

---

## returns absolute URL for relative path

Call: `getImageUrl('img.jpg', '/docs/page.md')`

Expected: `location.origin + '/docs/img.jpg'`
