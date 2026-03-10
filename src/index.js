import { parseClass } from "./parser.js";


function debounce(fn, delay = 100) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
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
const debouncedInit = debounce(initFlexFlow, 120);

window.addEventListener("resize", debouncedInit);

const observer = new MutationObserver(() => {
  initFlexFlow();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
