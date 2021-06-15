
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var bar1,bar2,bar3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-30,width,10);
	bar1 = new Dustbin(width-300,height-45,200,20);
	bar2 = new Dustbin(790,415,20,100);
	bar3 = new Dustbin(990,415,20,100);
	paperObject = new Paper(20,400);
	Engine.run(engine);
  
}


function draw() {


	
	background(0);
		Engine.update(engine);
 keyPressed();
 
 ground.display();

 
 bar1.display();
  bar2.display();
  bar3.display(); 
  paperObject.display();
  drawSprites(); 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-10});
	}

}


