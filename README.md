# FlexFlow

## Description

FlexFlow is a small experimental utility library created to solve simple but common styling limitations developers face when working with existing CSS frameworks.

While frameworks like Bootstrap and Tailwind cover most use cases, there are everyday scenarios where developers need more flexibility without adding inline styles, custom CSS files, or heavy configuration.

FlexFlow focuses on providing a minimal and readable way to apply flexible CSS values where existing utility systems feel restrictive.

---

## Philosophy

FlexFlow follows a few simple principles:

- It does not replace existing CSS frameworks
- It works alongside other libraries, not against them
- It prioritizes clarity and ease of use over strict design systems
- It solves real problems encountered during development, not hypothetical ones
- It remains small, experimental, and intentionally limited

---

## Non-Goals

FlexFlow is **not**:

- A full CSS framework
- A Bootstrap or Tailwind alternative
- A component library
- A design system

---

## Project Status

FlexFlow is an experimental learning project.
Breaking changes are expected, and the API may evolve over time.


## Supported Utilities (v0)

### Background
```html
<div class="bg-[#ffffff]"></div>
```
### Padding
```html
<div class="p-[16px] p@md-[24px] p@lg-[32px]"></div>
```

Responsive varients apply at runtime based on the viewport width.