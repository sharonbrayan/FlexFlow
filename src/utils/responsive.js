import { BREAKPOINTS } from "../breakpoints.js";

export function getActiveBreakpoint() {
  const width = window.innerWidth;

  let active = "base";

  Object.entries(BREAKPOINTS).forEach(([key, minWidth]) => {
    if (width >= minWidth) {
      active = key;
    }
  });

  return active;
}