import { applyBackground } from "./handlers/background.js";
import { applyTextColor } from "./handlers/text.js";
import { applyPadding } from "./handlers/spacing.js";
import { applyWidth } from "./handlers/size.js";
import { applyPosition } from "./handlers/position.js";

export function parseClass(el, className) {
  if (className.startsWith("bg-[")) {
    applyBackground(el, className);
    return;
  }

  if (className.startsWith("text-[")) {
    applyTextColor(el, className);
    return;
  }

  if (
    className.startsWith("p-") ||
    className.startsWith("p@") ||
    className.startsWith("px-") ||
    className.startsWith("px@") ||
    className.startsWith("py-") ||
    className.startsWith("py@") ||
    className.startsWith("m-") ||
    className.startsWith("m@") ||
    className.startsWith("mx-") ||
    className.startsWith("mx@") ||
    className.startsWith("my-") ||
    className.startsWith("my@")
  ) {
    applyPadding(el, className);
    return;
  }
if (
    className.startsWith("top-") ||
    className.startsWith("top@") ||
    className.startsWith("right-") ||
    className.startsWith("right@") ||
    className.startsWith("bottom-") ||
    className.startsWith("bottom@") ||
    className.startsWith("left-") ||
    className.startsWith("left@")
  ) {
    applyPosition(el, className);
    return;
  }
  if (className.startsWith("w-") || className.startsWith("w@")) {
    applyWidth(el, className);
    return;
  }
  if (className.startsWith("h-") || className.startsWith("h@")) {
  applyWidth(el, className);
  return;
}
if (
  className.startsWith("min-w-") ||
  className.startsWith("min-w@") ||
  className.startsWith("max-w-") ||
  className.startsWith("max-w@")
) {
  applyWidth(el, className);
  return;
}
if (
  className.startsWith("min-h-") ||
  className.startsWith("min-h@") ||
  className.startsWith("max-h-") ||
  className.startsWith("max-h@")
) {
  applyWidth(el, className); // size handler owns this
  return;
}
}