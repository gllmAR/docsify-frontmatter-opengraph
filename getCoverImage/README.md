---
title: getCoverImage Function Test
description: Test suite verifying the getCoverImage function - validates fallback cover image URL generation based on file paths
author: Plugin Developer
type: test-documentation
image: ./cover.jpg
section: testing
function: getCoverImage
test-type: unit-test
keywords: getCoverImage, cover-image, fallback, url-generation, unit-test
---

# Test: getCoverImage

This test suite verifies the `getCoverImage` function in the plugin. It checks that the function returns the correct fallback cover image URL based on the base path.

## Test Cases

- **returns cover.jpg for page in subfolder**
- **returns cover.jpg for root page**
- **returns null if no cover image (theoretical, not possible in current code)**

---

## returns cover.jpg for page in subfolder

Call: `getCoverImage('/docs/page.md')`

Expected: `location.origin + '/docs/cover.jpg'`

---

## returns cover.jpg for root page

Call: `getCoverImage('/page.md')`

Expected: `location.origin + '/cover.jpg'`

---

## returns null if no cover image

Call: `getCoverImage('/docs/page.md')` (if covers array is empty)

Expected: `null`
