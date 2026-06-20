import { getActiveBreakpoint,getClosestValue } from "../utils/responsive.js";

export function applyPosition(el, className) {
  // position-[absolute]
if (className.startsWith("position-") ) {
  const value = className.slice(10, -1);
  el.style.position = value;
  el.__flexflow.styles.add("position");
  return;
}
  const properties = ["top", "right", "bottom", "left"];

for (const prop of properties) {
  if (className.startsWith(`${prop}-[`)) {
    const value = className.slice(prop.length + 2, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values[prop]) el.__flexflow.values[prop] = {};

    el.__flexflow.values[prop]["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values[prop];

    const final = getClosestValue(values, active);
el.style[prop] = final;
    el.__flexflow.styles.add(prop);

    return;
  }
}

const match = className.match(/^(top|right|bottom|left)@(\w+)-\[(.+)\]$/);

if (match) {
  el.__flexflow.hasResponsive = true;
  const [, prop, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values[prop]) el.__flexflow.values[prop] = {};

  el.__flexflow.values[prop][bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values[prop];

  const final = getClosestValue(values, active);
el.style[prop] = final;
  el.__flexflow.styles.add(prop);

  return;
}

if (className.startsWith("z-[")) {
  const value = className.slice(3, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.zIndex) el.__flexflow.values.zIndex = {};

  el.__flexflow.values.zIndex["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.zIndex;

  const final = getClosestValue(values, active);
  el.style.zIndex = final;
  el.__flexflow.styles.add("zIndex");

  return;
}

const zMatch = className.match(/^z@(\w+)-\[(.+)\]$/);

if (zMatch) {
  el.__flexflow.hasResponsive = true;
  const [, bp, value] = zMatch;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.zIndex) el.__flexflow.values.zIndex = {};

  el.__flexflow.values.zIndex[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.zIndex;

  const final = getClosestValue(values, active);
  el.style.zIndex = final;
  el.__flexflow.styles.add("zIndex");

  return;
}

}