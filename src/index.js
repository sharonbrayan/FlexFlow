import { parseClass } from "./parser.js";
function resetFlexFlowStyles(el) {
  el.style.height = "";
  el.style.minHeight = "";
  el.style.maxHeight = "";
  el.style.width = "";
  el.style.minWidth = "";
  el.style.maxWidth = "";
  el.style.padding = "";
  el.style.margin = "";
}
export function initFlexFlow() {
  const elements = document.querySelectorAll("[class]");

  elements.forEach(el => {
  resetFlexFlowStyles(el);

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