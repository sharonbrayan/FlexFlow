import { BREAKPOINTS } from "../breakpoints.js";

export function applyTypography(el, className) {

  // fs-[18px]
  if (className.startsWith("fs-[")) {
    const value = className.slice(4, -1);
    el.style.fontSize = value;
    el.__flexflow.styles.add("fontSize");
    return;
  }

  // fw-[700]
  if (className.startsWith("fw-[")) {
    const value = className.slice(4, -1);
    el.style.fontWeight = value;
    el.__flexflow.styles.add("fontWeight");
    return;
  }

  // lh-[1.6]
  if (className.startsWith("lh-[")) {
    const value = className.slice(4, -1);
    el.style.lineHeight = value;
    el.__flexflow.styles.add("lineHeight");
    return;
  }

  // ls-[1px]
  if (className.startsWith("ls-[")) {
    const value = className.slice(4, -1);
    el.style.letterSpacing = value;
    el.__flexflow.styles.add("letterSpacing");
    return;
  }

  // Responsive typography
  const match = className.match(/^(fs|fw|lh|ls)@(\w+)-\[(.+)\]$/);

  if (!match) return;

  const [, type, bp, value] = match;
  const minWidth = BREAKPOINTS[bp];

  if (!minWidth) return;

  if (window.innerWidth >= minWidth) {

    if (type === "fs") {
      el.style.fontSize = value;
      el.__flexflow.styles.add("fontSize");
    }

    if (type === "fw") {
      el.style.fontWeight = value;
      el.__flexflow.styles.add("fontWeight");
    }

    if (type === "lh") {
      el.style.lineHeight = value;
      el.__flexflow.styles.add("lineHeight");
    }

    if (type === "ls") {
      el.style.letterSpacing = value;
      el.__flexflow.styles.add("letterSpacing");
    }
  }
}