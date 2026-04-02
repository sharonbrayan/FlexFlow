import { getActiveBreakpoint,getClosestValue} from "../utils/responsive.js";

export function applyWidth(el, className) {
  // w-[value]
  if (className.startsWith("w-[")) {
    const value = className.slice(3, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.width) el.__flexflow.values.width = {};

    el.__flexflow.values.width["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.width;

    const final = getClosestValue(values, active);
    el.style.width = final;
    el.__flexflow.styles.add("width");

    return;
  }
  // w@md-[value]
  if (className.startsWith("w@")) {
    const match = className.match(/^w@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, bp, value] = match;

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.width) el.__flexflow.values.width = {};

    el.__flexflow.values.width[bp] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.width;

    const final = getClosestValue(values, active);
    el.style.width = final;
    el.__flexflow.styles.add("width");
  }


  // h-[value]
  if (className.startsWith("h-[")) {
    const value = className.slice(3, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.height) el.__flexflow.values.height = {};

    el.__flexflow.values.height["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.height;

    const final = getClosestValue(values, active);
    el.style.height = final;
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

    const final = getClosestValue(values, active);
    el.style.height = final;
    el.__flexflow.styles.add("height");
  }
  // min-w / max-w base
  if (className.startsWith("min-w-[") || className.startsWith("max-w-[")) {
    const match = className.match(/^(min-w|max-w)-\[(.+)\]$/);
    if (!match) return;

    const [, type, value] = match;

    if (!el.__flexflow.values) el.__flexflow.values = {};
    const key = type === "min-w" ? "minWidth" : "maxWidth";

    if (!el.__flexflow.values[key]) el.__flexflow.values[key] = {};

    el.__flexflow.values[key]["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values[key];

    const final = getClosestValue(values, active);
    el.style[key] = final
    el.__flexflow.styles.add(key);

    return;
  }

  // min-w / max-w responsive
  if (className.startsWith("min-w@") || className.startsWith("max-w@")) {
    const match = className.match(/^(min-w|max-w)@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, type, bp, value] = match;

    if (!el.__flexflow.values) el.__flexflow.values = {};
    const key = type === "min-w" ? "minWidth" : "maxWidth";

    if (!el.__flexflow.values[key]) el.__flexflow.values[key] = {};

    el.__flexflow.values[key][bp] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values[key];

    const final = getClosestValue(values, active);
    el.style[key] = final;
    el.__flexflow.styles.add(key);

    return;
  }

  // min-h / max-h base
  if (className.startsWith("min-h-[") || className.startsWith("max-h-[")) {
    const match = className.match(/^(min-h|max-h)-\[(.+)\]$/);
    if (!match) return;

    const [, type, value] = match;

    if (!el.__flexflow.values) el.__flexflow.values = {};
    const key = type === "min-h" ? "minHeight" : "maxHeight";

    if (!el.__flexflow.values[key]) el.__flexflow.values[key] = {};

    el.__flexflow.values[key]["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values[key];

    const final = getClosestValue(values, active);
    el.style[key] = final;
    el.__flexflow.styles.add(key);

    return;
  }



  // min-h / max-h responsive
  if (className.startsWith("min-h@") || className.startsWith("max-h@")) {
    const match = className.match(/^(min-h|max-h)@(\w+)-\[(.+)\]$/);
    if (!match) return;

    const [, type, bp, value] = match;

    if (!el.__flexflow.values) el.__flexflow.values = {};
    const key = type === "min-h" ? "minHeight" : "maxHeight";

    if (!el.__flexflow.values[key]) el.__flexflow.values[key] = {};

    el.__flexflow.values[key][bp] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values[key];

    const final = getClosestValue(values, active);
    el.style[key] = final;
    el.__flexflow.styles.add(key);

    return;
  }
}