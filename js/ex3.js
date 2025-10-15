// Change all <p> elements to bold text with yellow background
const styleParagraphs = () => {
  // 1. Select all paragraph elements
  const paragraphs = document.getElementsByTagName("p");

  // 2. Loop through each <p> and apply styles
  for (const para of paragraphs) {
    para.style.fontWeight = "bold";        // makes text bold
    para.style.backgroundColor = "yellow"; // highlights background
  }
};

// 3. Run the function
styleParagraphs();