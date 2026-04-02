import { getActiveBreakpoint, getClosestValue } from "../utils/responsive.js";

export function applyLayout(el, className) {

  function handleBase(propKey, cssProp, value) {
    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values[propKey]) el.__flexflow.values[propKey] = {};

    el.__flexflow.values[propKey]["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values[propKey];

    const final = getClosestValue(values, active);
    el.style[cssProp] = final;
    el.__flexflow.styles.add(cssProp);
  }

  function handleResponsive(propKey, cssProp, bp, value) {
    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values[propKey]) el.__flexflow.values[propKey] = {};

    el.__flexflow.values[propKey][bp] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values[propKey];

    const final = getClosestValue(values, active);
    el.style[cssProp] = final;
    el.__flexflow.styles.add(cssProp);
  }

  // d-[flex]
  if (className.startsWith("d-[")) {
    handleBase("display", "display", className.slice(3, -1));
    return;
  }

  const dMatch = className.match(/^d@(\w+)-\[(.+)\]$/);
  if (dMatch) {
    handleResponsive("display", "display", dMatch[1], dMatch[2]);
    return;
  }

  // flex-[row]
  if (className.startsWith("flex-[")) {
    handleBase("flexDirection", "flexDirection", className.slice(6, -1));
    return;
  }

  const flexMatch = className.match(/^flex@(\w+)-\[(.+)\]$/);
  if (flexMatch) {
    handleResponsive("flexDirection", "flexDirection", flexMatch[1], flexMatch[2]);
    return;
  }

  // justify-[center]
  if (className.startsWith("justify-[")) {
    handleBase("justifyContent", "justifyContent", className.slice(9, -1));
    return;
  }

  const justifyMatch = className.match(/^justify@(\w+)-\[(.+)\]$/);
  if (justifyMatch) {
    handleResponsive("justifyContent", "justifyContent", justifyMatch[1], justifyMatch[2]);
    return;
  }

  // items-[center]
  if (className.startsWith("items-[")) {
    handleBase("alignItems", "alignItems", className.slice(7, -1));
    return;
  }

  const itemsMatch = className.match(/^items@(\w+)-\[(.+)\]$/);
  if (itemsMatch) {
    handleResponsive("alignItems", "alignItems", itemsMatch[1], itemsMatch[2]);
    return;
  }

  // wrap-[wrap]
  if (className.startsWith("wrap-[")) {
    handleBase("flexWrap", "flexWrap", className.slice(6, -1));
    return;
  }

  const wrapMatch = className.match(/^wrap@(\w+)-\[(.+)\]$/);
  if (wrapMatch) {
    handleResponsive("flexWrap", "flexWrap", wrapMatch[1], wrapMatch[2]);
    return;
  }

  // content-[center]
  if (className.startsWith("content-[")) {
    handleBase("alignContent", "alignContent", className.slice(9, -1));
    return;
  }

  const contentMatch = className.match(/^content@(\w+)-\[(.+)\]$/);
  if (contentMatch) {
    handleResponsive("alignContent", "alignContent", contentMatch[1], contentMatch[2]);
    return;
  }
}