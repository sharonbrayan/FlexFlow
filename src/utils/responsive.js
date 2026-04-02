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
export function getClosestValue(values, active) {
  const order = ["base", "sm", "md", "lg"];

  const index = order.indexOf(active);

  for (let i = index; i >= 0; i--) {
    const key = order[i];
    if (values[key] !== undefined) {
      return values[key];
    }
  }

  return values["base"];
}