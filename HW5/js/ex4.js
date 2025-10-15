// Create and insert a new link between CSULB and IS links
const addCollegeLink = () => {
  // 1. Create a new <li> element
  const newListItem = document.createElement("li");

  // 2. Create a new <a> element
  const newLink = document.createElement("a");

  // 3. Set the link text and URL
  newLink.textContent = "College of Business";
  newLink.href = "https://www.csulb.edu/college-of-business";

  // 4. Put the <a> inside the <li>
  newListItem.appendChild(newLink);

  // 5. Find the <ul> that holds the links
  const linkList = document.getElementById("links");

  // 6. Find the "IS" link (the one to insert before)
  const isLink = document.getElementById("is");

  // 7. Insert the new <li> before the IS link
  linkList.insertBefore(newListItem, isLink);
};

// 8. Call the function to run it
addCollegeLink();