// index.js

let correctColor;

// Function to generate a random RGB color string
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Function to start or restart the game
function startGame() {
  const optionsContainer = document.getElementById("optionsContainer");
  const rgbDisplay = document.getElementById("rgbValue");
  const result = document.getElementById("result");

  // Clear previous results
  result.textContent = "";

  // Generate the correct color and display its value
  correctColor = randomColor();
  rgbDisplay.textContent = correctColor;

  // Create an array of color options (1 correct + 2 random)
  const colors = [correctColor];
  while (colors.length < 3) {
    const color = randomColor();
    if (!colors.includes(color)) colors.push(color);
  }

  // Shuffle the array
  colors.sort(() => 0.5 - Math.random());

  // Display color options
  optionsContainer.innerHTML = "";
  colors.forEach(color => {
    const div = document.createElement("div");
    div.className = "color-option";
    div.style.backgroundColor = color;
    div.onclick = () => {
      if (color === correctColor) {
        result.textContent = "Correct!";
      } else {
        result.textContent = "Wrong! Try again.";
      }
    };
    optionsContainer.appendChild(div);
  });
}

// Start the game when the page loads
window.onload = startGame;
