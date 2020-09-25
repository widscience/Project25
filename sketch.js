
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin;
var cpaper;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin = new Bin(1200, 635);

	cpaper = new Paper(200, 680);
	//cpaper.

	ground  = new Ground(width/2, height-10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  cpaper.display();
  bin.display();
  ground.display();
 
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(cpaper.body, cpaper.body.position,{x:2, y:-3.5});
	}

  drawSprites();
 
}



