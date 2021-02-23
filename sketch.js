/*var PLAY=1;
var gameState=PLAY;

var END=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var jungle0
//var backgrounds,Background;
var monkeystill;
var ground;
var hit=0;
var time=0;
var score=0;

function preload(){
   
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 //backgrounds=loadImage("jungle.jpg")
jungle0=loadImage("jungle.jpg");

  monkeystill=loadAnimation("Monkey_08.png");
}



function setup() {
  createCanvas(600,600);
FoodGroup=createGroup();
  obstacleGroup=createGroup();
  bg = createSprite(300,300,20,20);
  bg.addImage("bg",jungle0);
  bg.scale = 1.5;
  bg.velocityX=-(4+ 3*score/60);
  
  
 fill("brown");
 ground=createSprite(700,350,1200,20); 
 // ground.velocityX = -4;

 ground.x = ground.width/2;
  
  
//  ground.fill("brown");
  ground.visible=false;
  
  monkey=createSprite(50,290,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2 ;

  
  

}



function draw() {
background("lightgreen");
  //
/*createEdgeSprites;
  monkey.collide("edges");
  
 
 
  
  if(gameState === PLAY){
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
    time = Math.ceil(frameCount/frameRate());
 //  time = time - Math.round(getFrameRate()/100);
    
    
 if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12; }
  
    monkey.collide(ground);
    
  monkey.velocityY=monkey.velocityY+1;
 if(FoodGroup.isTouching(monkey)) {
      FoodGroup.destroyEach();
      score = score+2;
   time=time+5;
   monkey.scale=+0.25;
    }
    food();
    obstacles();
      if (obstacleGroup.isTouching(monkey)){
             // monkey.scale=monkey.scale-0.25;
//hit=+1;
gameState=END;
monkey.scale=monkey.scale+-0.10;
       // monkey.scale=0.20;
       
        
      }
     /* if(hit===5){
        gameState=END;
      }*/
    
    /*if(monkey.scale===0.7||monkey.scale===0.8||monkey.scale===0.6||monkey.scale===0.5){
      
      gameState=END;
     
    }
    
    
  }
  if (gameState===END){
    obstacleGroup.setLifetimeEach(-1);
FoodGroup.setLifetimeEach(-1);
   //Stop(monkey);
    monkey.velocityY=0;
   monkey.velocityX=0;
     // monkey.scale=0.10;
  FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    //monkey.stopAnimation;
     
  if(keyDown("r")){
     gameState=PLAY
    score=0;
    time=0;
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
     
    monkey.velocityY=0; 
     }
   // background("green");
    stroke("red");
    fill("red");
       textSize(30);
    
  text("Game Over", 300, 300);
    
    stroke("red");
    fill("red");
       textSize(30);
    text("Restart(R)",300,250)
    //monkey.changeAnimation("still",monkeystill); 
   /* if (obstacleGroup.isTouching(monkey)){
              monkey.scale=monkey.scale-0.25;

      
        
      }
    
    //monkey.x=50;
     //  monkey.y=310;
    
    
   
     //score dissapears... no idea why
  }
  
  switch(score){
        
      case 10: monkey.scale=0.12;
        break;
        case 20: monkey.scale=0.14;
        break;
        case 30: monkey.scale=0.16;
        break;
        case 40: monkey.scale=0.18;
        break;
        default: break;
    }
  
  drawSprites();
     
  textSize(25)
  fill("black");
  stroke("red");
  text("Survival Time: "+time,200,20)
  
  text("Score: "+score,400,20);
 // text("Times Hit:"+hit,400,40);
}
function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.099;
    
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(250,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.2 ;
     obstacleGroup.add(obstacle);
  }

}*/
var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var END =0;
var PLAY =1;
var gameState = PLAY;

var gameOver; 
var score=0;
var attempts=3;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
 // gameOverImg = loadImage("gameOver.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() { 
  background(0);
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 550,50);
  
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(FoodGroup.isTouching(player)){
      FoodGroup.destroyEach();
      player.scale += 0.05
      score = score + 2;
    }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 1;
  
    player.collide(ground);
    spawnFood();
    spawnObstacles();  
 
    if(obstaclesGroup.isTouching(player)){ 
        gameState = END;
    }
  }else if(gameState === END){

    backgr.velocityX = 0;
    player.visible = false;
    
    FoodGroup.destroyEach();
    obstaclesGroup.destroyEach();

    
     
  textSize(25)
  fill("black");
  stroke("red");
    text("Game Over!", 300,220);
    //text("R to restart",300,320);
    /*if(keyDown("r")){
      gameState=PLAY
     score=0;
     //time=0;
     FoodGroup.destroyEach();
     obstaclesGroup.destroyEach();
  }*/
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX= -4; 
    
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  //write code here to spawn the obstacles
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX=-(4 + 2*score/100); 
    obstacle.addImage(obstacle_img);
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}
}