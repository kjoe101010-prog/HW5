// Display text for 400-level courses
const displayText400 = () => {
  // 1. Select all <li> elements with the class "400level"
  const fourHundredCourses = document.getElementsByClassName("400level");

  // 2. Loop through the HTMLCollection and print only the text content
  for (const course of fourHundredCourses) {
    console.log(course.textContent);
  }
};

// 3. Call the function
displayText400();