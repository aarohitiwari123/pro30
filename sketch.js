
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,shelf1;
var hex1,slingshot;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("bg.png");
  //hexImg = loadImage("hexa.png")
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  shelf1 = new Ground(600,450,310,15);
  box1 = new Box(480,430,60,30);
  box2 = new Box(540,430,60,30);
  box3 = new Box(600,430,60,30);
  box4 = new Box(660,430,60,30);
  box5 = new Box(720,430,60,30);
  //2nd layer
  box6 = new Box(510,400,60,30);
  box7 = new Box(570,400,60,30);
  box8 = new Box(630,400,60,30);
  box9 = new Box(690,400,60,30);
  //3rd layer
  box10 = new Box(540,370,60,30);
  box11 = new Box(600,370,60,30);
  box12 = new Box(660,370,60,30);
  //4th layer
  box13 = new Box(570,340,60,30);
  box14 = new Box(630,340,60,30);
  //5th layer
  box15 = new Box(600,310,60,30);


  shelf2 = new Ground(1000,320,200,15);
  //1st layer
  box16 = new Box(940,300,60,30);
  box17 = new Box(1000,300,60,30);
  box18 = new Box(1060,300,60,30);
  //4th layer
  box19 = new Box(970,270,60,30);
  box20 = new Box(1030,270,60,30);
  //5th layer
  box21 = new Box(1000,240,60,30);

  hex1 = new Hexa(200,50)
  slingshot = new SlingShot(hex1.body,{x:100, y:200},4,4);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);  
  imageMode(CENTER);
  rectMode(CENTER)

  hex1.x = World.mouseX;
  hex1.y = World.mouseY;

  shelf1.display();
  shelf2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  slingshot.display();
  hex1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hex1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(hex1.body)
  }
  }