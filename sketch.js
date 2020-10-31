var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(100,400,50,50);
  rect1.shapeColor = "green"
  rect1.velocityX = 4;
  rect2 = createSprite(1200,400,50,50);
  rect2.shapeColor = "cyan"
  rect2.velocityX = -4; 
  rect3 = createSprite(600,100,50,50);
  rect3.shapeColor = "lime"
  rect3.velocityY = 4; 
  rect4 = createSprite(600,700,50,50);
  rect4.shapeColor = "pink"
  rect4.velocityY = -4;
}

function draw() {  
background("maroon");  

 if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x < rect1.width/2 + rect2.width/2) { 
   rect1.velocityX = (-1)*rect1.velocityX
   rect2.velocityX = (-1)*rect2.velocityX  
 }  

 if (rect3.y - rect4.y < rect3.height/2 + rect4.height/2 && 
  rect4.y - rect3.y < rect3.height/2 + rect4.height/2) { 
 rect3.velocityY = (-1)*rect3.velocityY
 rect4.velocityY = (-1)*rect4.velocityY
} 
  
  drawSprites();
}