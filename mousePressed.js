// Create a new circle on mouse press
function mousePressed() {
  // Generate random colors for each circle
  let circleColor = color(random(255), random(255), random(255));

  // Create a new circle object and add it to the array
  let newCircle = new Circle(mouseX, mouseY, circleColor);
  circles.push(newCircle);
}
