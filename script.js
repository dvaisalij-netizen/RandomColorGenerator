// Function to generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Get elements
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const generateBtn = document.getElementById("generateBtn");

// Event listener for button
generateBtn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
});
