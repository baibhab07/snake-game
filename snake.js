class Snake {
  constructor() {
    this.x = floor(width / (2 * gap)) * gap;
    this.y = floor(height / (2 * gap)) * gap;
    this.dir = "up";
    this.score = 0;
  }
  show() {
    fill(72, 50, 72);
    rect(this.x, this.y, gap, gap, 4);
  }
  update() {
    if (this.dir == "left") {
      this.x -= gap;
    } else if (this.dir == "right") {
      this.x += gap;
    } else if (this.dir == "up") {
      this.y -= gap;
    } else if (this.dir == "down") {
      this.y += gap;
    }
  }
  respawn() {
    this.x = floor(width / (2 * gap)) * gap;
    this.y = floor(height / (2 * gap)) * gap;
    this.dir = "up";
    this.score = 0;
  }
  intersects(obj) {
    if (this.x == obj.x && this.y == obj.y) {
      return true;
    }
    if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
      return false;
    }
  }
}
