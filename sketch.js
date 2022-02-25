var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState = "play"
var score = 0;

function preload(){
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  gameImg=loadImage("gameOver.png");
}

function setup(){
  createCanvas(580,450);
  
  ocean = createSprite(300,300);
  ocean.addImage("ocean",oceanImg);
  ocean.velocityY=-4;
  
    frog = createSprite(200,200,50,50);
  frog.scale = 0.1;
  frog.addImage("frog", frogImg);  
  gameover=createSprite(300,225);
  gameover.addImage('g',gameImg);
  gameover.visible=false;

  coinGroup=new Group();
  climbersGroup=new Group();
  //create coin group and climber group
  
}

function draw(){
  background(0);
  drawSprites();
  if(ocean.y<200)
  {
   ocean.y=300

  }
  fill('red');
  textSize(20);
  text("Score:" + score,300,30);
  if (gameState === "play") {
     if(frog.isTouching(coinGroup))
   {
         score=score+1;
         coinGroup.destroyEach();
    }
    spawnCoin();

    if(keyDown('left'))
    {
     frog.x=frog.x -5;
    }
    if(keyDown('right'))
    {
     frog.x=frog.x +5;
    }
    if(keyDown('space'))
    {
        frog.velocityX=0;
        frog.velocityY=-2;
    }
    else
    {
     frog.velocityX=0;
     frog.velocityY=2;
    }
    if(frog.y>450 )
    {
      gameState="end"
    }
  }
  
  if (gameState === "end"){
    
    
    gameover.visible= true;
    frog.destroy();
    coinGroup.destroyEach();
    climbersGroup.destroyEach();
}

  }

// create the coin and climber in the same function
function spawnCoin() {
  
  if (frameCount % 280 === 0) {
    //make the x position of the coin and climber the same
    climber=createSprite(Math.round(random(100,350)),80,200,20);
    climber.addImage("c",climberImg);
    climber.setVelocity(0,5);
    climber.scale=0.3;
    climber.lifetime=200;
    climbersGroup.add(climber);
    
    coin=createSprite(climber.x,40,200,20);
    coin.addImage("co",coinImg);
    coin.setVelocity(0,5);
    coin.scale=0.1;
    coin.lifetime=200;
    coinGroup.add(coin);
  }
}
