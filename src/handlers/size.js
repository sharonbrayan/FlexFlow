import { BREAKPOINTS } from "../breakpoints.js";
import { getActiveBreakpoint } from "../utils/responsive.js";

export function applyWidth(el, className) {
  // w-[50%]
  if (className.startsWith("w-[")) {
    const value = className.slice(3, -1);
    el.style.width = value;
    el.__flexflow.styles.add("width")
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
      el.__flexflow.styles.add("width")
    }
  }
  // h-[value]

// h-[value]
if (className.startsWith("h-[")) {
  const value = className.slice(3, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.height) el.__flexflow.values.height = {};

  el.__flexflow.values.height["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.height;

  el.style.height = values[active] || values["base"];
  el.__flexflow.styles.add("height");

  return;
}

 // h@md-[value]
if (className.startsWith("h@")) {
  const match = className.match(/^h@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.height) el.__flexflow.values.height = {};

  el.__flexflow.values.height[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.height;

  el.style.height = values[active] || values["base"];
  el.__flexflow.styles.add("height");
}
  // min-w-[value]
  if (className.startsWith("min-w-[")) {
    const value = className.slice(7, -1);
    el.style.minWidth = value;
    el.__flexflow.styles.add("minWidth")
    return;
  }

  // max-w-[value]
  if (className.startsWith("max-w-[")) {
    const value = className.slice(7, -1);
    el.style.maxWidth = value;
    el.__flexflow.styles.add("maxWidth")
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
      if (type === "min-w") {
        el.style.minWidth = value;
        el.__flexflow.styles.add("minWidth")
      }
      else {
        el.style.maxWidth = value;
        el.__flexflow.styles.add("maxWidth")
      }
    }
  }
  // min-h-[value]
  if (className.startsWith("min-h-[")) {
    const value = className.slice(7, -1);
    el.style.minHeight = value;
    el.__flexflow.styles.add("minHeight")
    return;
  }

  // max-h-[value]
  if (className.startsWith("max-h-[")) {
    const value = className.slice(7, -1);
    el.style.maxHeight = value;
    el.__flexflow.styles.add("maxHeight")
    return;
  }

  // min-h@md-[value] / max-h@md-[value]
  if (className.startsWith("min-h@") || className.startsWith("max-h@")) {
    const match = className.match(/^(min-h|max-h)@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, type, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      if (type === "min-h") {
        el.style.minHeight = value;
        el.__flexflow.styles.add("minHeight")
      }
      else {
        el.style.maxHeight = value;
        el.__flexflow.styles.add("maxHeight")
      }
    }
  }
}