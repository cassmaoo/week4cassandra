// Declare the name
class Circle {

  // Constructor 
  constructor(x, y, circleColor) {

    // Constructors of the circles' properties
    this.pos = createVector(x, y);
    this.radius = random(10, 60);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.color = circleColor;
  }

  // Display the circles
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }

  // Update the circles
  update() {
    this.pos.add(this.vel);

    // Make circles bounce off the edges of the canvas
    // width
    if (this.pos.x > width - this.radius || this.pos.x < this.radius) {
      this.vel.x *= -1;
    }

    // height
    if (this.pos.y > height - this.radius || this.pos.y < this.radius) {
      this.vel.y *= -1;
    }

    // Collision of other circles
    for (let other of circles) {
      if (other !== this) {
        let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        let minDistance = this.radius + other.radius;

        if (distance < minDistance) {

          // Change color on collision
          this.color = color(random(255), random(255), random(255));
          other.color = color(random(255), random(255), random(255));

          let angle = atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x);
          let targetX = this.pos.x + cos(angle) * minDistance;
          let targetY = this.pos.y + sin(angle) * minDistance;
          let ax = (targetX - other.pos.x) * 0.05;
          let ay = (targetY - other.pos.y) * 0.05;
          this.vel.x -= ax;
          this.vel.y -= ay;
          other.vel.x += ax;
          other.vel.y += ay;
        }
      }
    }
  }
}
