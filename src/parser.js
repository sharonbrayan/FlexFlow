import { applyBackground } from "./handlers/background.js";
import { applyTextColor } from "./handlers/text.js";
import { applyPadding } from "./handlers/spacing.js";
import { applyWidth } from "./handlers/size.js";
import { applyPosition } from "./handlers/position.js";
import { applyTypography } from "./handlers/typography.js";
import { applyVisual } from "./handlers/visuals.js";


const SPACING_PREFIXES = [
  "p-", "p@",
  "px-", "px@",
  "py-", "py@",
  "m-", "m@",
  "mx-", "mx@",
  "my-", "my@"
];

const POSITION_PREFIXES = [
  "position-", "position@",
  "top-", "top@",
  "right-", "right@",
  "bottom-", "bottom@",
  "left-", "left@",
  "z-", "z@"
];

const SIZE_PREFIXES = [
  "w-", "w@",
  "h-", "h@",
  "min-w-", "min-w@",
  "max-w-", "max-w@",
  "min-h-", "min-h@",
  "max-h-", "max-h@"
];

const TYPOGRAPHY_PREFIXES = [
  "fs-", "fs@",
  "fw-", "fw@",
  "lh-", "lh@",
  "ls-", "ls@"
];

const VISUAL_PREFIXES = [
  "br-", "br@",
  "op-", "op@",
  "gap-", "gap@"
];


export function parseClass(el, className) {

  if (className.startsWith("bg-[")) {
    applyBackground(el, className);
    return;
  }

  if (className.startsWith("text-[")) {
    applyTextColor(el, className);
    return;
  }

  if (SPACING_PREFIXES.some(prefix => className.startsWith(prefix))) {
    applyPadding(el, className);
    return;
  }

  if (POSITION_PREFIXES.some(prefix => className.startsWith(prefix))) {
    applyPosition(el, className);
    return;
  }

  if (SIZE_PREFIXES.some(prefix => className.startsWith(prefix))) {
    applyWidth(el, className);
    return;
  }

  if (TYPOGRAPHY_PREFIXES.some(prefix => className.startsWith(prefix))) {
    applyTypography(el, className);
    return;
  }

  if (VISUAL_PREFIXES.some(prefix => className.startsWith(prefix))) {
    applyVisual(el, className);
    return;
  }
}