// This function will display numbers 1–12 in a table
// Numbers divisible by 4 will have a blue background
function createNumberTable() {
  // 1. Get the <div> where the table will appear
  let outputDiv = document.getElementById("output");

  // 2. Create a <table> element
  let table = document.createElement("table");

  // 3. Loop from 1 to 12 to create 12 rows
  for (let i = 1; i <= 12; i++) {
    // Create a new row and a cell
    let row = document.createElement("tr");
    let cell = document.createElement("td");

    // Put the number inside the cell
    cell.textContent = i;

    // Center the text
    cell.style.textAlign = "center";

    // If the number is divisible by 4 → add the CSS class "blue"
    if (i % 4 === 0) {
      cell.classList.add("blue");
    }

    // Add the cell to the row
    row.appendChild(cell);

    // Add the row to the table
    table.appendChild(row);
  }

  // 4. Add the complete table to the output <div>
  outputDiv.appendChild(table);
}

// 5. Run the function
createNumberTable();