var ground;
var monkey,monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 300);
  
  monkey = createSprite(50,250,50,50);
  monkey.addAnimation("running",monkeyRunning)
  monkey.scale=0.1;
  
  ground = createSprite(300,285,700,10);
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  score = 0;
}


function draw() {
   background("white");
  
   fill("black");
   textSize=20;
   text("Survival Time: "+ score, 280,50);
  
  if(keyDown("space") && monkey.y>=240){
    monkey.velocityY=-10;
  }
  
   if (ground.x < 250){
      ground.x = ground.width/2;
   }
  
   score = score + Math.round(getFrameRate()/60);
  
  monkey.velocityY =  monkey.velocityY  + 0.50;
  ground.velocityX = -5;
  
  monkey.collide(ground);
  
  fruit();
  rock();
  
  drawSprites();
}

function fruit(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(650,200,20,20);
    banana.y=Math.round(random(50,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifeTime=100;
    foodGroup.add(banana);
  }
}

function rock(){
  
  if(frameCount % 300 === 0){
    obstacle = createSprite(650,265,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-6;
    obstacle.lifeTime=100;
    obstacleGroup.add(obstacle);
  }
}



