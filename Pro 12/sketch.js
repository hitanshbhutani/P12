
var bow, arrow, redBalloon, pinkBalloon, blueBalloon, greenBalloon, background;
var bowImage, arrowImage, redBalloonimage, pinkBalloonImage, blueBalloonImage, greenBalloonImage, backgroundImage;
var score = 0;

function preload() {
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  redBalloonImage = loadImage("red_balloon0.png");
  pinkBalloonImage = loadImage("pink_balloon0.png");
  greenBalloonImage = loadImage("green_balloon0.png");
  blueBalloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(500, 400);
  background1 = createSprite(0, 0, 600, 600);
  background1.addImage(backgroundImage);
  background1.scale = 2;
  bow = createSprite(410, 300, 1, 1);
  bow.addImage(bowImage);
  bow.scale = 1;
}

function draw() {
  background1.velocityX = -2;
  if (background1.x < 0) {
    background1.x = background1.width / 2;
  }
  bow.y = World.mouseY;
  if (keyDown("space") ) {
    createArrow();
    if (arrow.x < 0 ) {
    arrow.x = 470
    arrow.y = bow.y
    arrow.velocityX = 0
     }
  }
  var selectBalloon = Math.round(random(1, 5));
  if (frameCount % 80 === 0) {
    if (selectBalloon == 1) {           
      redBalloon();
    } else if (selectBalloon == 2) {
      pinkBalloon();
    } else if (selectBalloon == 3) {
      greenBalloon();
    } else if (selectBalloon == 4) {
      blueBalloon();
    }
  }

  drawSprites();
  text.size=20;
  text("score:"+score,270,30);
}

function redBalloon() {
  var redBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  redBalloon.addImage(redBalloonImage);
  redBalloon.scale = 0.1;
  redBalloon.velocityX = 3;
  redBalloon.lifetime = 170;
}

function pinkBalloon() {
  var pinkBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pinkBalloon.addImage(pinkBalloonImage);
  pinkBalloon.scale = 1.3;
  pinkBalloon.velocityX = 3;
  pinkBalloon.lifetime = 170;
}

function greenBalloon() {
  var greenBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  greenBalloon.addImage(greenBalloonImage);
  greenBalloon.scale = 0.1;
  greenBalloon.velocityX = 3;
  greenBalloon.lifetime = 170;
}

function blueBalloon() {
  var blueBalloon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blueBalloon.addImage(blueBalloonImage);
  blueBalloon.scale = 0.1;
  blueBalloon.velocityX = 3;
  blueBalloon.lifetime = 170;
}
function createArrow(){
  arrow = createSprite(450, 300);
  arrow.addImage(arrowImage);
  arrow.scale = 0.4;
     arrow.y = bow.y
    arrow.velocityX = -4;
  arrow.lifetime = 150;
}
