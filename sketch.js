
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1= new Roof(240,270,340,60);

	bobObject1 = new BOB(170,400, 30);
	rope1= new Rope(bobObject1.body,roof1.body,-60,0);
	bobObject2 = new BOB(210,400, 30);
	rope2= new Rope(bobObject2.body,roof1.body,-30,0);
	bobObject3 = new BOB(240,400, 30);
	rope3= new Rope(bobObject3.body,roof1.body,0,0);
	bobObject4 = new BOB(270,400, 30);
	rope4= new Rope(bobObject4.body,roof1.body,30,0);
	bobObject5 = new BOB(300, 400, 30);
	rope5= new Rope(bobObject5.body,roof1.body,60,0);
	//ground= createSprite(600,600,3000,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
keyPressed()
  
drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
} }

