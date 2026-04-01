import { BREAKPOINTS } from "../breakpoints.js";
import { getActiveBreakpoint } from "../utils/responsive.js";

export function applyPadding(el, className) {
  // p-[]
if (className.startsWith("p-[")) {
  const value = className.slice(3, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.padding) el.__flexflow.values.padding = {};

  el.__flexflow.values.padding["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.padding;

  el.style.padding = values[active] || values["base"];
  el.__flexflow.styles.add("padding");

  return;
}

  // p@md-[]
 if (className.startsWith("p@")) {
  const match = className.match(/^p@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.padding) el.__flexflow.values.padding = {};

  el.__flexflow.values.padding[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.padding;

  el.style.padding = values[active] || values["base"];
  el.__flexflow.styles.add("padding");

  return;
}
  // px-[value]
if (className.startsWith("px-[")) {
  const value = className.slice(4, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.paddingX) el.__flexflow.values.paddingX = {};

  el.__flexflow.values.paddingX["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.paddingX;

  const final = values[active] || values["base"];

  el.style.paddingLeft = final;
  el.style.paddingRight = final;

  el.__flexflow.styles.add("paddingLeft");
  el.__flexflow.styles.add("paddingRight");

  return;
}
// py-[value]
if (className.startsWith("py-[")) {
  const value = className.slice(4, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.paddingY) el.__flexflow.values.paddingY = {};

  el.__flexflow.values.paddingY["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.paddingY;

  const final = values[active] || values["base"];

  el.style.paddingTop = final;
  el.style.paddingBottom = final;

  el.__flexflow.styles.add("paddingTop");
  el.__flexflow.styles.add("paddingBottom");

  return;
}

// px@md-[value]
 if (className.startsWith("px@")) {
  const match = className.match(/^px@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.paddingX) el.__flexflow.values.paddingX = {};

  el.__flexflow.values.paddingX[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.paddingX;

  const final = values[active] || values["base"];

  el.style.paddingLeft = final;
  el.style.paddingRight = final;

  el.__flexflow.styles.add("paddingLeft");
  el.__flexflow.styles.add("paddingRight");

  return;
}

// py@md-[value]
if (className.startsWith("py@")) {
  const match = className.match(/^py@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.paddingY) el.__flexflow.values.paddingY = {};

  el.__flexflow.values.paddingY[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.paddingY;

  const final = values[active] || values["base"];

  el.style.paddingTop = final;
  el.style.paddingBottom = final;

  el.__flexflow.styles.add("paddingTop");
  el.__flexflow.styles.add("paddingBottom");

  return;
}


// m-[value]
if (className.startsWith("m-[")) {
  const value = className.slice(3, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.margin) el.__flexflow.values.margin = {};

  el.__flexflow.values.margin["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.margin;

  el.style.margin = values[active] || values["base"];
  el.__flexflow.styles.add("margin");

  return;
}

if (className.startsWith("m@")) {
  const match = className.match(/^m@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.margin) el.__flexflow.values.margin = {};

  el.__flexflow.values.margin[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.margin;

  el.style.margin = values[active] || values["base"];
  el.__flexflow.styles.add("margin");

  return;
}



// mx-[value] / my-[value]
if (className.startsWith("mx-[")) {
  const value = className.slice(4, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.marginX) el.__flexflow.values.marginX = {};

  el.__flexflow.values.marginX["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.marginX;

  const final = values[active] || values["base"];

  el.style.marginLeft = final;
  el.style.marginRight = final;

  el.__flexflow.styles.add("marginLeft");
  el.__flexflow.styles.add("marginRight");

  return;
}

if (className.startsWith("my-[")) {
  const value = className.slice(4, -1);

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.marginY) el.__flexflow.values.marginY = {};

  el.__flexflow.values.marginY["base"] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.marginY;

  const final = values[active] || values["base"];

  el.style.marginTop = final;
  el.style.marginBottom = final;

  el.__flexflow.styles.add("marginTop");
  el.__flexflow.styles.add("marginBottom");

  return;
}



// mx@-[value] 

if (className.startsWith("mx@")) {
  const match = className.match(/^mx@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.marginX) el.__flexflow.values.marginX = {};

  el.__flexflow.values.marginX[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.marginX;

  const final = values[active] || values["base"];

  el.style.marginLeft = final;
  el.style.marginRight = final;

  el.__flexflow.styles.add("marginLeft");
  el.__flexflow.styles.add("marginRight");
}


//my@-[value] 
if (className.startsWith("my@")) {
  const match = className.match(/^my@(\w+)-\[(.+)\]$/);
  if (!match) return;

  const [, bp, value] = match;

  if (!el.__flexflow.values) el.__flexflow.values = {};
  if (!el.__flexflow.values.marginY) el.__flexflow.values.marginY = {};

  el.__flexflow.values.marginY[bp] = value;

  const active = getActiveBreakpoint();
  const values = el.__flexflow.values.marginY;

  const final = values[active] || values["base"];

  el.style.marginTop = final;
  el.style.marginBottom = final;

  el.__flexflow.styles.add("marginTop");
  el.__flexflow.styles.add("marginBottom");
}


}