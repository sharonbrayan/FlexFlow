import { BREAKPOINTS } from "../breakpoints.js";

export function applyPadding(el, className) {
  // p-[16px]
  if (className.startsWith("p-[")) {
    const value = className.slice(3, -1);
    el.style.padding = value;
    el.__flexflow.styles.add("padding");
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
      el.__flexflow.styles.add("padding");
    }
  }
  // px-[value]
if (className.startsWith("px-[")) {
  const value = className.slice(4, -1);
  el.style.paddingLeft = value;
  el.__flexflow.styles.add("paddingLeft");
  el.style.paddingRight = value;
  el.__flexflow.styles.add("paddingRight");
  return;
}

// py-[value]
if (className.startsWith("py-[")) {
  const value = className.slice(4, -1);
  el.style.paddingTop = value;
  el.__flexflow.styles.add("paddingTop");
  el.style.paddingBottom = value;
  el.__flexflow.styles.add("paddingBottom");
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
      el.__flexflow.styles.add("paddingLeft");
      el.style.paddingRight = value;
      el.__flexflow.styles.add("paddingRight");
    } else {
      el.style.paddingTop = value;
      el.__flexflow.styles.add("paddingTop");
      el.style.paddingBottom = value;
      el.__flexflow.styles.add("paddingBottom");
    }
  }
}
// m-[value]
if (className.startsWith("m-[")) {
  const value = className.slice(3, -1);
  el.style.margin = value;
  el.__flexflow.styles.add("margin");
  return;
}

// mx-[value] / my-[value]
if (className.startsWith("mx-[")) {
  const value = className.slice(4, -1);
  el.style.marginLeft = value;
  el.__flexflow.styles.add("marginLeft");
  el.style.marginRight = value;
  el.__flexflow.styles.add("marginRight");
  return;
}

if (className.startsWith("my-[")) {
  const value = className.slice(4, -1);
  el.style.marginTop = value;
  el.__flexflow.styles.add("marginTop");
  el.style.marginBottom = value;
  el.__flexflow.styles.add("marginBottom");
  return;
}

// mx@md-[value] / my@md-[value] / m@md-[value]
if (className.startsWith("m@") || className.startsWith("mx@") || className.startsWith("my@")) {
  const match = className.match(/^(m|mx|my)@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, type, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];
  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {
    if (type === "m") {
      el.style.margin = value;
      el.__flexflow.styles.add("margin");
    } else if (type === "mx") {
      el.style.marginLeft = value;
      el.__flexflow.styles.add("marginLeft");
      el.style.marginRight = value;
      el.__flexflow.styles.add("marginRight");
    } else {
      el.style.marginTop = value;
      el.__flexflow.styles.add("marginTop");
      el.style.marginBottom = value;
      el.__flexflow.styles.add("marginBottom");
    }
  }
}
}