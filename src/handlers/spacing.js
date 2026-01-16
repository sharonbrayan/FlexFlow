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
}