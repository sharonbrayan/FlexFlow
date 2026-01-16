import { parseClass } from "./parser.js";

export function initFlexFlow() {
  const elements = document.querySelectorAll("[class]");

  elements.forEach(el => {
    el.classList.forEach(className => {
      parseClass(el, className);
    });
  });
}

// Initial run
initFlexFlow();

// Re-run on resize
window.addEventListener("resize", () => {
  initFlexFlow();
});