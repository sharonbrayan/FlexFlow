import { parseClass } from "./parser.js";


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
  console.log(window.innerWidth);
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


function processElement(el) {

  getFFStore(el);
  resetFlexFlowStyles(el);

  if (el.classList) {
    el.classList.forEach(className => {
      parseClass(el, className);
    });
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