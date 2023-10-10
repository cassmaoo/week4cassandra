// Define an array of circles
let circles = [];

// Canvas setup
function setup() {
  createCanvas(800, 600);
}

// Draw function
function draw() {
  // Set background to dark grey
  background(20);

  // Update and display circles
  for (let circle of circles) {
    circle.display();
    circle.update();
  }
}


