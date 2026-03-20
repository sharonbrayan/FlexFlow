# FlexFlow

## Description

FlexFlow is a small experimental utility library created to solve simple but common styling limitations developers face when working with existing CSS frameworks.

While frameworks like Bootstrap and Tailwind cover most use cases, there are everyday scenarios where developers need more flexibility without adding inline styles, writing custom CSS, or maintaining configuration files.

FlexFlow provides a minimal, readable way to apply flexible CSS values directly through utility classes.

---

## Installation

```bash
npm install flexflow-css
```

---

## Basic Usage

Import and initialize FlexFlow once in your application:

```js
import { initFlexFlow } from "flexflow-css";

initFlexFlow();
```

Then use utility classes directly in your markup:

```html
<div class="p-[20px] bg-[#333] text-[#fff] br-[10px]">
  Hello FlexFlow
</div>
```

---

## Responsive Example

```html
<div class="fs-[16px] fs@md-[24px]">
  Responsive text
</div>
```

Responsive variants are applied at runtime based on viewport width.

---

## How It Works

FlexFlow evaluates utility classes at runtime in the browser.

It scans elements, parses supported class patterns, and applies corresponding inline styles dynamically. Styles are re-evaluated on window resize and when new elements are added to the DOM.

This allows responsive behavior without build tools or configuration files.

---

## Available Utilities

FlexFlow currently supports the following utility groups:

### Colors
```
bg-[#hex]   text-[#hex]
```

### Spacing
```
p px py m mx my
```

### Size
```
w h min-w max-w min-h max-h
```

### Position
```
position top right bottom left z
```

### Typography
```
fs fw lh ls
```

### Visual
```
br op gap
```

All utilities support arbitrary values using the `[value]` syntax and responsive variants using `@breakpoint`.

---

## Why FlexFlow Exists

During day-to-day development, developers often need custom spacing, sizing, or styling values that are not available in predefined utility classes.

While some frameworks allow customization through configuration files, this adds setup overhead and breaks the flow of quick experimentation.

FlexFlow allows developers to:

- Use any valid CSS value directly in classes  
- Avoid inline styles and extra CSS files  
- Apply responsive behavior without configuration  
- Keep markup readable and predictable  

---

## Philosophy

FlexFlow follows a few simple principles:

- It does not replace existing CSS frameworks  
- It works alongside other libraries, not against them  
- It prioritizes clarity and ease of use over strict design systems  
- It solves real problems encountered during development  
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

Breaking changes may occur, and the API may evolve over time.