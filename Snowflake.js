function getRandomSize() {
  let r = pow(random(1), 5);
  return constrain(r * 36, 2, 36);
}

class Snowflake {
  constructor() {
    this.randomize();
  }

  applyForce(force) {
    let f = force.copy();
    f.mult(this.r);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.3);

    if (this.vel.mag() < 1) {
      this.vel.mag;
    }

    this.pos.add(this.vel);
    this.acc.mult(0);
    if (this.pos.y > height + this.r) {
      this.randomize();
    }
  }

  randomize() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.r = getRandomSize();
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }
}
