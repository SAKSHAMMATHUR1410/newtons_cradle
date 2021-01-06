
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Rope1 , Rope2 , Rope3 , Rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 

  base = new Stand(400,300,300,20)
  ground = new Stand(400,699,800,10)
  b1 = new Ball(400,400,20)
  b2 = new Ball(540,300,20)
  b3 = new Ball(360,400,20)
  b4 = new Ball(320,400,20)
  Rope1 = new Rope(b1.body,base.body,0)
  Rope2 = new Rope(b2.body,base.body,40)
  Rope3 = new Rope(b3.body,base.body,-40)
  Rope4 = new Rope(b4.body,base.body,-80)
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  base.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(b4.body,b4.body.position,{x:-50 , y:-45})
  }
}
 


