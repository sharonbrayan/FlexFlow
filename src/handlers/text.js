export function applyTextColor(el, className) {
    // className example: text-[#ffffff]
    const value = className.slice(6, -1);
  
    if (!value) return;
  
    el.style.color = value;
    el.__flexflow.styles.add("color");
  }