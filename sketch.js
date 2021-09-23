let bath ;
let brush ;
let drink ;
let gym1, gym2 ;
let iss;
let move;
let eat ;
let sleep ;
let astronout

function preload(){
  bath = loadAnimation("imges/bath1.png","imges/bath1.png","imges/bath1.png","imges/bath2.png","imges/bath2.png","imges/bath2.png");
  brush=loadImage("imges/brush.png");
  drink=loadAnimation("imges/drink1.png","imges/drink2.png");
  gym = loadAnimation("imges/gym11.png","imges/gym11.png","imges/gym12.png","imges/gym12.png");
  iss=loadImage("imges/iss.png");
  sleep=loadImage("imges/sleep.png");
  move = loadAnimation("imges/move.png","imges/move.png","imges/move1.png","imges/move1.png");
  eat = loadAnimation("imges/eat1.png","imges/eat1.png","imges/eat1.png","imges/eat2.png","imges/eat2.png","imges/eat2.png");
}

function setup() {
  createCanvas(1600,800);
  

  astronout=createSprite(300,230);
  astronout.addAnimation("sleeping",sleep);
  astronout.scale=0.1;

  
}

function draw() {
  background(iss);  
  drawSprites();

textSize(25);
fill("red");
text("up arrow= brushing ", 400, 200);

textSize(25);
fill("red");
text("down arrow = gyming ",430, 230 );
text ("left arrow = eating",460, 260 );
text("m arrow = moving",490,290);
text("up arrow = brushing",520,320);
text("right arrow= bathing",550,350);

edges=createEdgeSprites();
astronout.bounceOff(edges);

if (keyDown("UP_ARROW")){
  astronout.addAnimation("brushing",brush);
  astronout.changeAnimation("brushing");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;
}

 if (keyDown("DOWN_ARROW")){
  astronout.addAnimation("gyming",gym);
  astronout.changeAnimation("gyming");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;
}

 if (keyDown("LEFT_ARROW")){
  astronout.addAnimation("eating",eat);
  astronout.changeAnimation("eating");
  astronout.y=350;
  astronout.velocityX=0.5;
  astronout.velocityY=0.5;
}
 if(keyDown("RIGHT_ARROW")){
  astronout.addAnimation("bathing",bath);
  astronout.changeAnimation("bathing");
  astronout.y=350;
  astronout.velocityX=0;
  astronout.velocityY=0;

}

 if (keyDown("m")){
  astronout.addAnimation("moving",move);
  astronout.changeAnimation("moving");
  astronout.y=350;
  astronout.x=350;
  astronout.velocityX=2;
  astronout.velocityY=2;
}

}

