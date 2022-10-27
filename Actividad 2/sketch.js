
function setup() {
  createCanvas(800,800);
  background(30);
  box = createSprite(400,400,30,30);

}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW)) {
  background("red");
  }
  

  if (keyIsDown(LEFT_ARROW)) {
  background("blue");
  }
 
  if (keyIsDown(UP_ARROW)) {
  background("yellow"); 
  }

  if (keyIsDown(DOWN_ARROW)) {
  background("green");
  }


  
  drawSprites();
}

