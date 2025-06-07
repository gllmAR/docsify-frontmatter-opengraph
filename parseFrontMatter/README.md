---
title: parseFrontMatter Function Test
description: Test suite verifying the parseFrontMatter function - validates YAML parsing, error handling, and edge cases
author: Plugin Developer
type: test-documentation
image: ./cover.jpg
section: testing
function: parseFrontMatter
test-type: unit-test
keywords: parseFrontMatter, yaml-parsing, front-matter, unit-test, validation
---

# Test: parseFrontMatter

This test suite verifies the `parseFrontMatter` function in the plugin. Each case provides a Markdown string and checks the parsed output.

## Test Cases

- **no-frontmatter**: No front-matter block.
- **only-title**: Only a title in front-matter.
- **title-description**: Title and description.
- **title-description-image**: Title, description, and image.
- **malformed**: Malformed front-matter.

---

## no-frontmatter

```
# Hello World
This is a test.
```

Expected: `{}`

---

## only-title

```
---
title: My Page
---
# My Page
```

Expected: `{ title: 'My Page' }`

---

## title-description

```
---
title: My Page
description: This is a test page
---
# My Page
```

Expected: `{ title: 'My Page', description: 'This is a test page' }`

---

## title-description-image

```
---
title: My Page
description: This is a test page
image: cover.jpg
---
# My Page
```

Expected: `{ title: 'My Page', description: 'This is a test page', image: 'cover.jpg' }`

---

## malformed

```
---
title My Page
description: This is a test page
---
# My Page
```

Expected: `{ description: 'This is a test page' }`
