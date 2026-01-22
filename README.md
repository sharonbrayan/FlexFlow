# FlexFlow

## Description

FlexFlow is a small experimental utility library created to solve simple but common styling limitations developers face when working with existing CSS frameworks.

While frameworks like Bootstrap and Tailwind cover most use cases, there are everyday scenarios where developers need more flexibility without adding inline styles, writing custom CSS, or maintaining configuration files.

FlexFlow provides a minimal, readable way to apply flexible CSS values directly through utility classes.

---

## Why FlexFlow Exists

During day-to-day development, developers often need custom spacing or sizing values that are not available in predefined utility classes.

While some frameworks allow customization through configuration files, this adds setup overhead and breaks the flow of quick experimentation.

FlexFlow exists to allow developers to:

- Use *any valid CSS value* for spacing and sizing
- Avoid inline styles and extra CSS files
- Apply responsive behavior without build tools or configuration
- Keep markup readable and predictable

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

## How It Works

FlexFlow evaluates utility classes *at runtime* in the browser.

Styles are applied dynamically based on the current viewport size and are re-evaluated when the window is resized. This allows responsive behavior without relying on build-time tools or configuration files.

FlexFlow respects native CSS behavior and applies styles only where conditions match.

---

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