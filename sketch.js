//Namespaces are created

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Variables are declared

var bob1,bob2,bob3,bob4,bob5;

var roof;

var rope1, rope2, rope3, rope4 , rope5;

var text1, text2, text1IMG, text2IMG;

var engine, world;

var backgroundIMG;  

function preload(){

  //Images are loaded

  backgroundIMG = loadImage("backgroundIMG.jpg");
  
  text1IMG = loadImage("text1IMG.png");
  text2IMG = loadImage("text2IMG.png");

}

function setup(){

  //Canvas is created

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Bodies that make up the cradle are created here from blueprints from Bob.js, Rope.js and Roof.js

	roof = new Roof(400,350,200,25);

	bob1 = new Bob(320,550);
	bob2 = new Bob(360,550);
	bob3 = new Bob(400,550);
	bob4 = new Bob(440,550);
	bob5 = new Bob(480,550);

  rope1= new Rope(bob1.body,roof.body,-40*2,0);
	rope2= new Rope(bob2.body,roof.body,-40*1,0);
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,40*1,0);
  rope5= new Rope(bob5.body,roof.body,40*2,0);
  
  //Texts are created and images of teh text are added

  text1 = createSprite(625,140,55,55);
  text1.addImage(text1IMG);
  text1.scale = 0.8;
  
  text2 = createSprite(130,120,75,75);
  text2.addImage(text2IMG);
  text2.scale = 0.65;
  
  //Engine runs
  
	Engine.run(engine);
  
}

function draw() {

  //If we press space the web server will reset

  if(keyDown("space")){

    location.reload();

  }

  //Background, bodies and sprites all get displayed

  rectMode(CENTER);

  background(backgroundIMG);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();

}

//If the numbers keys are pressed, the bobs on the left side will get lifted

function keyPressed() {

  if (keyDown("1")) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:-80});

  } else if(keyDown("2")) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-65,y:-60});
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-65,y:-60});

  } else if(keyDown("3")) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-40});
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-45,y:-40});
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-45,y:-40});

  } else if(keyDown("4")) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-35,y:-30});
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-35,y:-30});
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-35,y:-30});
    Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-35,y:-30});

  } 
  
}