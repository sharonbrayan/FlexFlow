import { BREAKPOINTS } from "../breakpoints.js";

export function applyWidth(el, className) {
  // w-[50%]
  if (className.startsWith("w-[")) {
    const value = className.slice(3, -1);
    el.style.width = value;
    return;
  }

  // w@md-[80%]
  if (className.startsWith("w@")) {
    const match = className.match(/^w@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.width = value;
    }
  }
}