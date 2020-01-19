let snow = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.03);
  for (let i = 0; i < 300; i++) {
    snow.push(new Snowflake());
  }
}

function draw() {
  background(0);

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }
}
