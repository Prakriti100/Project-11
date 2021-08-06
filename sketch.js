var bgImg;
var sleepImg;
var brushImg;
var batheimg;
var gymImg;
var eatImg;
var drinkImg;
var moveImg;

var bg;
var astrounaut;


function preload(){
  bgImg = loadImage("iss.png");
  batheimg = loadAnimation("bath1.png","bath2.png");
  sleepImg = loadAnimation("sleep.png")
  brushImg = loadAnimation("brush.png")
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  moveImg = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(1000,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(200,200,800,400);
  bg.addImage(bgImg)
  bg.scale = 0.1;

  astrounaut = createSprite(300,230);
  astrounaut.addAnimation("sleeping",sleepImg);
  astrounaut.scale = 0.1;

  
}

function draw() {
  background(255,255,255);  

  text("Instructions: Up = brush,Down = exercise,left = eat, right = bathe, m = move ",500,50);

  

  if (keyDown("UP_ARROW")){
    astrounaut.addAnimation("brushing",brushImg);
    astrounaut.changeAnimation("brushing")
    astrounaut.y = 250;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astrounaut.addAnimation("exercise",gymImg);
    astrounaut.changeAnimation("exercise")
    astrounaut.y = 250;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astrounaut.addAnimation("eat",eatImg);
    astrounaut.changeAnimation("eat")
    astrounaut.y = 200;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astrounaut.addAnimation("bathe",batheimg);
    astrounaut.changeAnimation("bathe")
    astrounaut.y = 200;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if (keyDown("m")){
    astrounaut.addAnimation("move",moveImg);
    astrounaut.changeAnimation("move")
    astrounaut.y = 250;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }



  drawSprites();
}