import { BREAKPOINTS } from "../breakpoints.js";

export function applyPadding(el, className) {
  // p-[16px]
  if (className.startsWith("p-[")) {
    const value = className.slice(3, -1);
    el.style.padding = value;
    return;
  }

  // p@md-[24px]
  if (className.startsWith("p@")) {
    const match = className.match(/^p@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];

    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.padding = value;
    }
  }
  // px-[value]
if (className.startsWith("px-[")) {
  const value = className.slice(4, -1);
  el.style.paddingLeft = value;
  el.style.paddingRight = value;
  return;
}

// py-[value]
if (className.startsWith("py-[")) {
  const value = className.slice(4, -1);
  el.style.paddingTop = value;
  el.style.paddingBottom = value;
  return;
}

// px@md-[value] / py@md-[value]
if (className.startsWith("px@") || className.startsWith("py@")) {
  const match = className.match(/^(p[xy])@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, axis, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];
  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {
    if (axis === "px") {
      el.style.paddingLeft = value;
      el.style.paddingRight = value;
    } else {
      el.style.paddingTop = value;
      el.style.paddingBottom = value;
    }
  }
}
}