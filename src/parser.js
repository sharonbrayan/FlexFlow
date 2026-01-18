import { applyBackground } from "./handlers/background.js";
import { applyTextColor } from "./handlers/text.js";
import { applyPadding } from "./handlers/spacing.js";
import { applyWidth } from "./handlers/size.js";

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
    className.startsWith("py@")
  ) {
    applyPadding(el, className);
    return;
  }

  if (className.startsWith("w-") || className.startsWith("w@")) {
    applyWidth(el, className);
    return;
  }
}