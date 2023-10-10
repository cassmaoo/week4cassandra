// Define an array of circles
let circles = [];

// Canvas setup
function setup() {
  createCanvas(800, 600);
}

//Draw function
function draw() {
  // Set background to grey
  background(50);

  // Draw dot grid
  drawDotGrid(30);

  // Update and display circles
  for (let circle of circles) {
    circle.display();
    circle.update();
  }
}

// Draw dot grid spacing
function drawDotGrid(spacing) {
  // Set the color for the dots
  fill(220);

  // Draw dots in a grid pattern
  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      ellipse(x, y, 2, 2);
    }
  }
}