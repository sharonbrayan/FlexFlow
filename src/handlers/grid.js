import { BREAKPOINTS } from "../breakpoints.js";

export function applyGrid(el, className) {

  // grid-[true] → display grid
  if (className === "grid") {
    el.style.display = "grid";
    el.__flexflow.styles.add("display");
    return;
  }

  // cols-[3]
  if (className.startsWith("cols-[")) {
    const value = className.slice(6, -1);
    el.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    el.__flexflow.styles.add("gridTemplateColumns");
    return;
  }

  // rows-[2]
  if (className.startsWith("rows-[")) {
    const value = className.slice(6, -1);
    el.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    el.__flexflow.styles.add("gridTemplateRows");
    return;
  }

  // cols@md-[3]
  if (className.startsWith("cols@")) {
    const match = className.match(/^cols@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
      el.__flexflow.styles.add("gridTemplateColumns");
    }
    return;
  }

  // rows@md-[2]
  if (className.startsWith("rows@")) {
    const match = className.match(/^rows@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.gridTemplateRows = `repeat(${value}, 1fr)`;
      el.__flexflow.styles.add("gridTemplateRows");
    }
  }
}