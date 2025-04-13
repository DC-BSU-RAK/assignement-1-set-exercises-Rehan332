// index.js

// Function that calculates the total cost based on user input
function calculateTotal() {
    // Get values from the input fields
    const costPerLiter = parseFloat(document.getElementById("cost").value);
    const liters = parseFloat(document.getElementById("liters").value);
  
    // Perform the calculation
    const total = costPerLiter * liters;
  
    // Update the paragraph to show the total cost
    document.getElementById("total").textContent = `Total cost: £${total.toFixed(2)}`;
  }
  