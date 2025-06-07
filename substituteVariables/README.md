---
title: Variable Substitution Demo
description: Test suite verifying the substituteVariables function - validates variable replacement using {{variable}} syntax in content
author: John Doe
project: Docsify Plugin
version: 1.2.0
github_url: https://github.com/example/repo
type: test-documentation
image: ./cover.jpg
section: testing
function: substituteVariables
test-type: unit-test
keywords: substituteVariables, variable-substitution, templates, content-replacement, unit-test
---

# Test: Variable Substitution

This test suite verifies the `substituteVariables` function in the plugin. It checks that front-matter variables are correctly substituted in content using the `{{variable}}` syntax.

## 🧪 Live Variable Substitution Demo

**Current Page Variables:**
- Author: {{author}}
- Title: {{title}}
- Project: {{project}}
- Version: {{version}}
- GitHub URL: {{github_url}}

**Test Sentence:** Hello {{author}}, welcome to {{title}} for {{project}} version {{version}}!

## Test Cases

- **basic-substitution**: Simple variable replacement
- **multiple-variables**: Multiple variables in content
- **missing-variables**: Variables not in front-matter
- **nested-content**: Variables in complex HTML structures

---

## basic-substitution

Front-matter:
```yaml
title: Variable Substitution Demo
author: John Doe
```

Content: `Hello {{author}}, welcome to {{title}}!`

Expected: `Hello John Doe, welcome to Variable Substitution Demo!`

---

## multiple-variables

Front-matter:
```yaml
project: Docsify Plugin
version: 1.2.0
author: John Doe
```

Content: `{{project}} v{{version}} by {{author}}`

Expected: `Docsify Plugin v1.2.0 by John Doe`

---

## missing-variables

Front-matter:
```yaml
title: Variable Substitution Demo
```

Content: `{{title}} has {{missing}} variable`

Expected: `Variable Substitution Demo has {{missing}} variable`

---

## nested-content

Front-matter:
```yaml
title: Variable Substitution Demo
github_url: https://github.com/example/repo
```

Content: `<h1>{{title}}</h1><a href="{{github_url}}">Visit {{title}}</a>`

Expected: `<h1>Variable Substitution Demo</h1><a href="https://github.com/example/repo">Visit Variable Substitution Demo</a>`

## 🚀 Live Demo

**[Try the Variable Substitution Demo](/tests/test-cases/variable-substitution.md)** - See the plugin in action with real variable substitution!
