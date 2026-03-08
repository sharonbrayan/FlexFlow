import { parseClass } from "./parser.js";
function resetFlexFlowStyles(el) {
  const store = el.__flexflow;
  if (!store) return;

  store.styles.forEach(prop => {
    el.style[prop] = "";
  });

  store.styles.clear();
}
function getFFStore(el) {
  if (!el.__flexflow) {
    el.__flexflow = {
      styles: new Set()
    };
  }
  return el.__flexflow;
}
export function initFlexFlow() {
  const elements = document.querySelectorAll("[class]");

  elements.forEach(el => {
  const store = getFFStore(el); // 👈 THIS is the missing call

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
const observer = new MutationObserver(() => {
  initFlexFlow();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
