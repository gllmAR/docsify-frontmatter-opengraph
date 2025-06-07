---
title: insertMetaTag Function Test
description: Test suite verifying the insertMetaTag function - validates meta tag insertion into document head with proper attributes
author: Plugin Developer
type: test-documentation
image: ./cover.jpg
section: testing
function: insertMetaTag
test-type: unit-test
keywords: insertMetaTag, meta-tags, dom-manipulation, html-head, unit-test
---

# Test: insertMetaTag

This test suite verifies the `insertMetaTag` function in the plugin. It checks that meta tags are correctly inserted into the document head with the right attributes and content.

## Test Cases

- **inserts property meta tag**
- **inserts name meta tag**
- **does not insert if content is empty**

---

## inserts property meta tag

Call: `insertMetaTag('property', 'og:title', 'Test Title')`

Expected: `<meta property="og:title" content="Test Title">` in `<head>`

---

## inserts name meta tag

Call: `insertMetaTag('name', 'twitter:title', 'Test Title')`

Expected: `<meta name="twitter:title" content="Test Title">` in `<head>`

---

## does not insert if content is empty

Call: `insertMetaTag('property', 'og:title', '')`

Expected: No new meta tag is added.
