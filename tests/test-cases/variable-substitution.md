---
title: Variable Substitution Demo
description: Test case demonstrating variable substitution in content using {{variable}} syntax
author: John Doe
version: 1.2.0
project: Docsify Plugin
github_url: https://github.com/example/repo
image: ./cover.jpg
type: test-case
section: testing
test-type: variable-substitution
keywords: variable-substitution, templates, content-replacement, front-matter-variables
---

# {{title}}

Welcome to the **{{project}}** documentation!

This page demonstrates variable substitution using front-matter values.

## Author Information

- **Author**: {{author}}
- **Version**: {{version}}
- **Repository**: [{{project}}]({{github_url}})

## Description

{{description}}

## Advanced Usage

You can reference any front-matter variable in your content using the `{{variable}}` syntax.

### Available Variables

The following variables are available from the front-matter:

- `{{title}}` → {{title}}
- `{{author}}` → {{author}}
- `{{version}}` → {{version}}
- `{{project}}` → {{project}}
- `{{github_url}}` → {{github_url}}

### Missing Variables

If you reference a variable that doesn't exist in front-matter, it will be left unchanged:

- `{{missing_variable}}` → {{missing_variable}}
- `{{undefined_value}}` → {{undefined_value}}

This ensures your content remains safe even with typos or missing values.
