// This program asks the user for two integers and displays their sum
function sumOfTwoIntegers() {
  //  Ask for two inputs
  let num1 = prompt("Enter the first integer:");
  let num2 = prompt("Enter the second integer:");

  //  Find where we’ll display the output
  let outputDiv = document.getElementById("content");

  // Check if inputs are valid integers
  // parseInt() tries to convert strings to whole numbers
  // isNaN() checks if something is NOT a number
  // String(num1).includes(".") ensures decimals are rejected
  if (
    !isNaN(num1) &&
    !isNaN(num2) &&
    Number.isInteger(parseFloat(num1)) &&
    Number.isInteger(parseFloat(num2))
  ) {
    // Both inputs are valid integers
    let sum = parseInt(num1) + parseInt(num2);

    // Create a span to style the sum in red and bold
    outputDiv.innerHTML = `${num1} + ${num2} = <span style="color:red; font-weight:bold;">${sum}</span>`;
  } else {
    // Invalid input
    outputDiv.innerHTML = `<span style="color:red; font-weight:bold;">Error!</span> You must enter integers. You entered "${num1}" and "${num2}". Try again.`;
  }
}

// Run the function automatically
sumOfTwoIntegers();