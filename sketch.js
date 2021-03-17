var skateboarderI,hurdleI,holeI,path,boy;
var backgI,track,gameOver,gameOverI;
var restartI, restart
var holeG,hurdleG;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  skateboardI = loadImage("skateboard.png")
  holeI = loadImage("Hole.png")
  hurdleI = loadImage("Hurdle.png")
  backI = loadImage("Track.png")
  gameOverI = loadImage("gameOver.png")

}

function setup() {
  createCanvas(600,400)
  
  track = createSprite(300,200,10,10)
  track.addImage("background",backI)
  track.scale = 3
  
  
  boy = createSprite(50,300,10,10)
  boy.addImage("MainPlayer",skateboardI);
  boy.scale = 0.4
  
  gameOver = createSprite(300,200,10,10)
  gameOver.addImage("End Image",gameOverI)
  gameOver.visible = false
  
  holeG = createGroup();
  hurdleG = createGroup();
  
  boy.setCollider("rectangle",9,30,99,270)
  
  
  
}

function draw() {
  background(180)
  stroke("green")
  text("Score : "+ score,70,390)
  
  if(gameState === PLAY){
    gameOver.visible = false
track.velocityX = -4
  score = score + Math.round(getFrameRate() / 60)
    
  boy.y = mouseY
  
  if(track.x < 0){
    track.x = 300
  }
  
  if (holeG.isTouching(boy)||hurdleG.isTouching(boy)){
    gameState = END
  }
  
  
  
  
  spawnHoles();
  spawnHurdle();
  
  
  }
  
  if(gameState === END){
    
    holeG.destroyEach();
    holeG.setVelocityX = 0
    hurdleG.destroyEach();
    hurdleG.setvelocityX = 0
    track.velocityX = 0
    gameOver.visible = true
    
    if(keyDown("space")){
      gameState = PLAY
      score = 0
      
       
       }
    

  }
  drawSprites();
  
}



function spawnHoles(){
  if(frameCount % 500 === 0)
{
var hole = createSprite(600,Math.round(random(50,350)),10,10)
    hole.addImage("obstacle1",holeI)
    hole.scale = 0.3
    hole.velocityX = -3
    hole.lifetime = 400
    holeG.add(hole)
  
}
  
}

function spawnHurdle(){
  if(frameCount % 300 === 0){
var hurdle = createSprite(600,Math.round(random(50,350)),10,10)
    hurdle.addImage("obstacle2",hurdleI)
    hurdle.scale = 0.3
    hurdle.velocityX = -2
    hurdle.lifetime = 400
    hurdleG.add(hurdle)
  
  }

}
