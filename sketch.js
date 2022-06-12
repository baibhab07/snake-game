let food;
let snake;
let gap = 15;

function setup() {
  createCanvas(600, 600);
  food = new Food();
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(203, 195, 227);
  snake.update();
  if (snake.intersects(food)) {
    snake.score++;
    food.eat();
  }
  if (snake.intersects(food) == false) {
    snake.respawn();
    food.eat();
  }
  food.show();
  snake.show();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && snake.dir != "right") {
    snake.dir = "left";
  } else if (keyCode == RIGHT_ARROW && snake.dir != "left") {
    snake.dir = "right";
  } else if (keyCode == UP_ARROW && snake.dir != "down") {
    snake.dir = "up";
  } else if (keyCode == DOWN_ARROW && snake.dor != "up") {
    snake.dir = "down";
  }
}
