import { parseClass } from "./parser.js";



const responsiveElements = new Set();

function debounce(fn, delay = 100) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function getFFStore(el) {
  if (!el.__flexflow) {
    el.__flexflow = {
      styles: new Set()
    };
  }
  return el.__flexflow;
}

function resetFlexFlowStyles(el) {
  const store = el.__flexflow;
  if (!store) return;

  store.styles.forEach(prop => {
    el.style[prop] = "";
  });

  store.styles.clear();
}

export function initFlexFlow() {
  const elements = document.querySelectorAll("[class]");

  elements.forEach(el => {
  processElement(el);
});
}

// Initial run
initFlexFlow();

function handleResize() {
  responsiveElements.forEach(el => {
    el.__flexflow.hasResponsive=false;
    resetFlexFlowStyles(el);

    el.classList.forEach(className => {
      parseClass(el, className);
    });

  });
}
// Re-run on resize
const debouncedResize = debounce(handleResize, 120);

window.addEventListener("resize", debouncedResize);


function processElement(el) {

  getFFStore(el);
  el.__flexflow.hasResponsive = false;
  resetFlexFlowStyles(el);

  if (el.classList) {
    el.classList.forEach(className => {
      parseClass(el, className);
    });
  }

  if (el.__flexflow.hasResponsive) {
    responsiveElements.add(el);
  } else {
    responsiveElements.delete(el);
  }

  // also process children inside it
  const children = el.querySelectorAll("[class]");
  children.forEach(child => processElement(child));
}


const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {

    // ✅ handle new elements
    mutation.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      processElement(node);
    });
    
    mutation.removedNodes.forEach(node => {
      if (node.nodeType !== 1) return;

      responsiveElements.delete(node);
    });

    // ✅ handle class changes
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const el = mutation.target;
      processElement(el);
    }

  });
});



observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["class"]
});