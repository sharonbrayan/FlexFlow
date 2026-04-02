import { getActiveBreakpoint, getClosestValue } from "../utils/responsive.js";

export function applyGrid(el, className) {

  // grid
  if (className === "grid") {
    el.style.display = "grid";
    el.__flexflow.styles.add("display");
    return;
  }

  // cols-[3]
  if (className.startsWith("cols-[")) {
    const value = className.slice(6, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.gridCols) el.__flexflow.values.gridCols = {};

    el.__flexflow.values.gridCols["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.gridCols;

    const final = getClosestValue(values, active);
    el.style.gridTemplateColumns = `repeat(${final}, 1fr)`;
    el.__flexflow.styles.add("gridTemplateColumns");

    return;
  }

  // rows-[2]
  if (className.startsWith("rows-[")) {
    const value = className.slice(6, -1);

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.gridRows) el.__flexflow.values.gridRows = {};

    el.__flexflow.values.gridRows["base"] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.gridRows;

    const final = getClosestValue(values, active);
    el.style.gridTemplateRows = `repeat(${final}, 1fr)`;
    el.__flexflow.styles.add("gridTemplateRows");

    return;
  }

  // cols@md-[3]
  const colMatch = className.match(/^cols@(\w+)-\[(.+)\]$/);

  if (colMatch) {
    const [, bp, value] = colMatch;

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.gridCols) el.__flexflow.values.gridCols = {};

    el.__flexflow.values.gridCols[bp] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.gridCols;

    const final = getClosestValue(values, active);
    el.style.gridTemplateColumns = `repeat(${final}, 1fr)`;
    el.__flexflow.styles.add("gridTemplateColumns");

    return;
  }

  // rows@md-[2]
  const rowMatch = className.match(/^rows@(\w+)-\[(.+)\]$/);

  if (rowMatch) {
    const [, bp, value] = rowMatch;

    if (!el.__flexflow.values) el.__flexflow.values = {};
    if (!el.__flexflow.values.gridRows) el.__flexflow.values.gridRows = {};

    el.__flexflow.values.gridRows[bp] = value;

    const active = getActiveBreakpoint();
    const values = el.__flexflow.values.gridRows;

    const final = getClosestValue(values, active);
    el.style.gridTemplateRows = `repeat(${final}, 1fr)`;
    el.__flexflow.styles.add("gridTemplateRows");

    return;
  }
}