---
title: Malformed Front-matter Test
description: Test case demonstrating error handling with malformed YAML front-matter syntax
author: Plugin Developer
type: test-case
image: ./cover.jpg
section: testing
test-type: error-handling
keywords: malformed, error-handling, yaml, front-matter, validation
---

# Malformed Front-matter Test

---
title without colon
description: Valid description
invalid line here
type: article
---

This content has malformed front-matter to test error handling.
