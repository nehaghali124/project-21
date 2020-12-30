var fixedRect,movingRect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor="red";
  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor="red";
  o1= createSprite(100,100,50,50);
  o1.shapeColor="red";
  o2= createSprite(200,100,50,50);
  o2.shapeColor="red";
  o3= createSprite(300,100,50,50);
  o3.shapeColor="red";
  o4= createSprite(400,100,50,50);
  o4.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  console.log(movingRect.x-fixedRect.x);
  o3.y=World.mouseY;
  o3.x=World.mouseX;

  if(isTouching(o3, o4)) {
      o4.shapeColor="green";
      o3.shapeColor="yellow";
  } 
  else {
      o4.shapeColor="red";
      o4.shapeColor="red";
  }

  drawSprites();
}

