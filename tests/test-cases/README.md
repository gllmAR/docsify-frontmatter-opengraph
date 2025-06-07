---
title: Test Cases
description: Specific test case files that demonstrate different scenarios for the Docsify Frontmatter OpenGraph Plugin
author: Plugin Developer
type: article
image: ./cover.jpg
section: testing
category: test-cases
keywords: test-cases, scenarios, examples, validation, demonstration
---

# Test Cases

This directory contains specific test case files that demonstrate different scenarios for the Docsify Frontmatter OpenGraph Plugin.

## Available Test Cases

- **variable-substitution.md** - Demonstrates variable substitution with `{{variable}}` syntax
- **malformed.md** - Tests error handling with malformed front-matter
- **no-image.md** - Tests fallback to cover image when no image specified
- **quoted-values.md** - Tests handling of quoted values in YAML
- **with-comments.md** - Tests YAML comment handling

## How to Use

Each test case file contains:
1. YAML front-matter with specific scenarios
2. Content that demonstrates the plugin behavior
3. Expected outcomes for validation

Navigate to any test case file to see the plugin in action and verify the generated meta tags in browser developer tools.

## Variable Substitution Demo

The `variable-substitution.md` file specifically demonstrates the variable substitution feature where `{{variable}}` syntax in content gets replaced with front-matter values.
