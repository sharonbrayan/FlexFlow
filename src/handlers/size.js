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
  // h-[value]
if (className.startsWith("h-[")) {
  const value = className.slice(3, -1);
  el.style.height = value;
  return;
}

// h@md-[value]
if (className.startsWith("h@")) {
  const match = className.match(/^h@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];
  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {
    el.style.height = value;
  }
}
// min-w-[value]
if (className.startsWith("min-w-[")) {
  const value = className.slice(7, -1);
  el.style.minWidth = value;
  return;
}

// max-w-[value]
if (className.startsWith("max-w-[")) {
  const value = className.slice(7, -1);
  el.style.maxWidth = value;
  return;
}

// min-w@md-[value] / max-w@md-[value]
if (className.startsWith("min-w@") || className.startsWith("max-w@")) {
  const match = className.match(/^(min-w|max-w)@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, type, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];
  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {
    if (type === "min-w") el.style.minWidth = value;
    else el.style.maxWidth = value;
  }
}
}