export function applyBackground(el, className) {
    // className example: bg-[#ff5733]
    const value = className.slice(4, -1);
  
    if (!value) return;
  
    el.style.backgroundColor = value;
  }