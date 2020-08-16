var box1,box2;
function setup() {
  createCanvas(800,800);
  box1 = createSprite(750, 750, 50, 50);
  box2 = createSprite(50,50,50,50);
  box1.shapeColor = "lightblue";
  box2.shapeColor = "darkblue";
  box1.velocityX = -1;
  box1.velocityY = -1;
  box2.velocityX = 1;
  box2.velocityY = 1;
}

function draw() {
  background(255,255,255);
 // box1.x=mouseX;
 // box1.y=mouseY;
  if(isTouching(box1,box2)){
      box1.shapeColor = "red";
      box2.shapeColor = "green";
    //}else{
     // box1.shapeColor = "lightblue";
    //  box2.shapeColor = "darkblue";
    }
    bounceOff(box1,box2);
  drawSprites();
}
