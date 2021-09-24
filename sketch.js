const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background1;
var crystal1,crystal2,crystal3,crystal4,crystal5,crystal6;

function preload() {
  background1 = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  crystal1 = new Snow(75,-5,70,70);
  crystal2 = new Snow(150,-5,70,70);
  crystal3 = new Snow(225,-5,70,70);
  crystal4 = new Snow(300,-5,70,70);
  crystal5 = new Snow(375,-5,70,70);
  crystal6 = new Snow(450,-5,70,70);

}

function draw() {
  background(background1);  
  Engine.update(engine);

  crystal1.display();
  crystal2.display();
  crystal3.display();
  crystal4.display();
  crystal5.display();
  crystal6.display();

  drawSprites();
}