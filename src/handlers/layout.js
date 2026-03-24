import { BREAKPOINTS } from "../breakpoints.js";

export function applyLayout(el, className) {

  // d-[flex]
  if (className.startsWith("d-[")) {
    const value = className.slice(3, -1);
    el.style.display = value;
    el.__flexflow.styles.add("display");
    return;
  }

  // d@md-[flex]
  if (className.startsWith("d@")) {
    const match = className.match(/^d@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.display = value;
      el.__flexflow.styles.add("display");
    }
    return;
  }

  // flex-[row] / flex-[column]
  if (className.startsWith("flex-[")) {
    const value = className.slice(6, -1);
    el.style.flexDirection = value;
    el.__flexflow.styles.add("flexDirection");
    return;
  }

  // flex@md-[row]
  if (className.startsWith("flex@")) {
    const match = className.match(/^flex@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.flexDirection = value;
      el.__flexflow.styles.add("flexDirection");
    }
    return;
  }

  // justify-[center]
  if (className.startsWith("justify-[")) {
    const value = className.slice(9, -1);
    el.style.justifyContent = value;
    el.__flexflow.styles.add("justifyContent");
    return;
  }

  // justify@md-[center]
  if (className.startsWith("justify@")) {
    const match = className.match(/^justify@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.justifyContent = value;
      el.__flexflow.styles.add("justifyContent");
    }
    return;
  }

  // items-[center]
  if (className.startsWith("items-[")) {
    const value = className.slice(7, -1);
    el.style.alignItems = value;
    el.__flexflow.styles.add("alignItems");
    return;
  }

  // items@md-[center]
  if (className.startsWith("items@")) {
    const match = className.match(/^items@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;
    const minWidth = BREAKPOINTS[bp];
    if (!minWidth) return;

    if (window.innerWidth >= minWidth) {
      el.style.alignItems = value;
      el.__flexflow.styles.add("alignItems");
    }
  }

  // wrap-[wrap] / wrap-[nowrap]
if (className.startsWith("wrap-[")) {
  const value = className.slice(6, -1);
  el.style.flexWrap = value;
  el.__flexflow.styles.add("flexWrap");
  return;
}

// wrap@md-[wrap]
if (className.startsWith("wrap@")) {
  const match = className.match(/^wrap@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];
  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {
    el.style.flexWrap = value;
    el.__flexflow.styles.add("flexWrap");
  }
  return;
}

// content-[center]
if (className.startsWith("content-[")) {
  const value = className.slice(9, -1);
  el.style.alignContent = value;
  el.__flexflow.styles.add("alignContent");
  return;
}

// content@md-[center]
if (className.startsWith("content@")) {
  const match = className.match(/^content@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];
  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {
    el.style.alignContent = value;
    el.__flexflow.styles.add("alignContent");
  }
}
}