import { BREAKPOINTS } from "../breakpoints.js";

export function applyPosition(el, className) {
  // position-[absolute]
if (className.startsWith("position-") ) {
  const value = className.slice(10, -1);
  el.style.position = value;
  el.__flexflow.styles.add("position");
  return;
}
  const properties = ["top", "right", "bottom", "left"];

  // Non-responsive: top-[20px]
  for (const prop of properties) {
    if (className.startsWith(`${prop}-[`)) {
      const value = className.slice(prop.length + 2, -1);
      el.style[prop] = value;
      el.__flexflow.styles.add(prop);
      return;
    }
  }

  // Responsive: top@md-[20px]
  const match = className.match(/^(top|right|bottom|left)@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, prop, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];
  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {
    el.style[prop] = value;
    el.__flexflow.styles.add(prop);
  }
}