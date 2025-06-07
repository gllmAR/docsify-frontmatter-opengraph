---
title: Plugin Integration Test
description: Integration test suite verifying complete plugin behavior - simulates Docsify route changes and validates meta tag injection
author: Plugin Developer
type: test-documentation
image: ./cover.jpg
section: testing
test-type: integration-test
keywords: plugin-integration, docsify, route-changes, meta-tag-injection, end-to-end
---

# Test: Plugin Integration

This test suite verifies the integration of all plugin functions. It simulates Docsify route changes and checks that the correct Open Graph and Twitter meta tags are injected into the document head for various Markdown front-matter scenarios.

## Test Cases

- **no front-matter**: Should use document.title and default/fallbacks.
- **front-matter with title/description/image/type**: Should use all provided values.
- **front-matter with relative image**: Should resolve to absolute URL.
- **front-matter with no image**: Should fallback to cover image.

---

## no front-matter

Markdown:
```
# Hello
Content
```

Expected meta tags:
- og:title = document.title
- og:description = meta[name=description] or ''
- og:type = 'article'
- og:url = location.href
- og:image = fallback cover image
- twitter:card = 'summary' or 'summary_large_image' if cover image

---

## front-matter with title/description/image/type

Markdown:
```
---
title: Custom Title
description: Custom Desc
image: https://example.com/img.jpg
type: website
---
# Custom Title
```

Expected meta tags:
- og:title = 'Custom Title'
- og:description = 'Custom Desc'
- og:type = 'website'
- og:image = 'https://example.com/img.jpg'
- twitter:card = 'summary_large_image'

---

## front-matter with relative image

Markdown:
```
---
title: Rel Image
description: Rel Desc
image: img.jpg
---
# Rel Image
```

Expected og:image = location.origin + basePath + 'img.jpg'

---

## front-matter with no image

Markdown:
```
---
title: No Image
description: No image desc
---
# No Image
```

Expected og:image = fallback cover image
