import { BREAKPOINTS } from "../breakpoints.js";

export function applyVisual(el, className) {

  // br-[10px]
  if (className.startsWith("br-[")) {
    const value = className.slice(4, -1);
    el.style.borderRadius = value;
    el.__flexflow.styles.add("borderRadius");
    return;
  }

  // op-[0.6]
  if (className.startsWith("op-[")) {
    const value = className.slice(4, -1);
    el.style.opacity = value;
    el.__flexflow.styles.add("opacity");
    return;
  }

  // gap-[20px]
  if (className.startsWith("gap-[")) {
    const value = className.slice(5, -1);
    el.style.gap = value;
    el.__flexflow.styles.add("gap");
    return;
  }

  // Responsive: br@md-[10px], op@md-[0.7], gap@md-[20px]
  const match = className.match(/^(br|op|gap)@(\w+)-\[(.+)\]$/);

  if (!match) return;

  const [, type, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];

  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {

    if (type === "br") {
      el.style.borderRadius = value;
      el.__flexflow.styles.add("borderRadius");
    }

    if (type === "op") {
      el.style.opacity = value;
      el.__flexflow.styles.add("opacity");
    }

    if (type === "gap") {
      el.style.gap = value;
      el.__flexflow.styles.add("gap");
    }
  }
}