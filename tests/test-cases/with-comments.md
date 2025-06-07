---
title: Comment Handling Test
description: Test case demonstrating proper handling of comments in YAML front-matter
author: Plugin Developer
type: test-case
image: ./cover.jpg
section: testing
test-type: yaml-parsing
keywords: comments, yaml, parsing, comment-handling, hash-comments
---

# Comment Handling Test

This page tests YAML front-matter with comments.

## Test Front-matter

The plugin should properly parse this front-matter with comments:

```yaml
---
# This is a comment
title: Comment Test
description: Testing YAML with comments
# Another comment
image: test.jpg
---
```
