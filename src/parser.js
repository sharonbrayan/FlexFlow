import { applyBackground } from "./handlers/background.js";
import { applyPadding } from "./handlers/spacing.js";

export function parseClass(el, className) {
  if (className.startsWith("bg-[")) {
    applyBackground(el, className);
    return;
  }

  if (className.startsWith("p-") || className.startsWith("p@")) {
    applyPadding(el, className);
    return;
  }
}