// Displays all body nodes (including text), but ignores the <script> tag
const bodyNodes = () => {
  const nodes = document.body.childNodes; // includes text and element nodes

  for (const node of nodes) {
    // Skip <script> tags
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "SCRIPT") {
      continue;
    }

    // If it's a text node (spaces/newlines)
    if (node.nodeType === Node.TEXT_NODE) {
      console.log("#text");
    } 
    // If it's an element node
    else if (node.nodeType === Node.ELEMENT_NODE) {
      // Special case: for <ul>, show collapsed format
      if (node.tagName === "UL") {
        console.log("<ul>...</ul>");
      } 
      // Otherwise, show full element HTML (h1, p, etc.)
      else {
        console.log(node.outerHTML);
      }
    }
  }
};

bodyNodes();


console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[20]);
console.log(document.body.childNodes[5].childNodes[0]);
console.log(document.body.childNodes[5].childNodes[1]);


