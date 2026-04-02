import { getActiveBreakpoint, getClosestValue } from "../utils/responsive.js";

export function applyTypography(el, className) {

  // fs-[18px]
  if (className.startsWith("fs-[")) {
    const value = className.slice(4, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.fontSize) el.__flexflow.values.fontSize = {};

    el.__flexflow.values.fontSize["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.fontSize;

    const final = getClosestValue(values, active);
    el.style.fontSize = final;
    el.__flexflow.styles.add("fontSize");

    return;
  }

  // fw-[700]
  if (className.startsWith("fw-[")) {
    const value = className.slice(4, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.fontWeight) el.__flexflow.values.fontWeight = {};

    el.__flexflow.values.fontWeight["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.fontWeight;

    const final = getClosestValue(values, active);
    el.style.fontWeight = final;
    el.__flexflow.styles.add("fontWeight");

    return;
  }

  // lh-[1.6]
  if (className.startsWith("lh-[")) {
    const value = className.slice(4, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.lineHeight) el.__flexflow.values.lineHeight = {};

    el.__flexflow.values.lineHeight["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.lineHeight;

    const final = getClosestValue(values, active);
    el.style.lineHeight = final;
    el.__flexflow.styles.add("lineHeight");

    return;
  }

  // ls-[1px]
  if (className.startsWith("ls-[")) {
    const value = className.slice(4, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.letterSpacing) el.__flexflow.values.letterSpacing = {};

    el.__flexflow.values.letterSpacing["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.letterSpacing;

    const final = getClosestValue(values, active);
    el.style.letterSpacing = final;
    el.__flexflow.styles.add("letterSpacing");

    return;
  }

  // Responsive typography
  const match = className.match(/^(fs|fw|lh|ls)@(\w+)-\[(.+)\]$/);

  if (!match) return;

  const [, type, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};

  let key = "";

  if (type === "fs") key = "fontSize";
  if (type === "fw") key = "fontWeight";
  if (type === "lh") key = "lineHeight";
  if (type === "ls") key = "letterSpacing";

  if (!el.__flexflow.values[key]) el.__flexflow.values[key] = {};

  el.__flexflow.values[key][bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values[key];

  const final = getClosestValue(values, active);
  el.style[key] = final;
  el.__flexflow.styles.add(key);

  return;
}