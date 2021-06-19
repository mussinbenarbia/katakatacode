import Prism from "prismjs";
import "prismjs/components/prism-clike.js";
import "prismjs/components/prism-c.js";
import "prismjs/components/prism-cpp.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-ruby.js";
import "prismjs/components/prism-sql.js";

export const buildCharClassLookup = (code) => {
  const lookupObj = {};
  let prismiFied = Prism.highlight(
    code.code,
    Prism.languages[code.language],
    code.language
  );
  let el = document.createElement("div");
  el.innerHTML = prismiFied;
  let index = 0;
  el.childNodes.forEach((node) => {
    for (let letter of node.textContent) {
      lookupObj[index] = node.className || "";
      index++;
    }
  });
  return lookupObj;
};
