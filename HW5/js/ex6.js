// Array of word objects, each with a term and definition
const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  },
  {
    term: "Tautology",
    definition: "Logical argument constructed in such a way that it is logically irrefutable"
  },
  {
    term: "Oxymoron",
    definition: "Figure of speech that juxtaposes elements that appear to be contradictory"
  }
];

// Function to display the mini-dictionary on the page
function showDictionary() {
  // 1. Get the <div> where we’ll put the content
  let contentDiv = document.getElementById("content");

  // 2. Create the <dl> element (definition list)
  let dl = document.createElement("dl");

  // 3. Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Create a <dt> for the term (bold word)
    let dt = document.createElement("dt");
    dt.innerHTML = "<strong>" + words[i].term + "</strong>";

    // Create a <dd> for the definition (normal text)
    let dd = document.createElement("dd");
    dd.textContent = words[i].definition;

    // Add both <dt> and <dd> into the <dl>
    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  // 4. Add the complete <dl> into the page’s <div>
  contentDiv.appendChild(dl);
}

// 5. Run the function
showDictionary();