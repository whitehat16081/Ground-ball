//NAMESPACING
const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world,ground;

function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options ={
    isStatic : true
  }
  ground=Bodies.rectangle(200,390,200,50,ground_options);
  World.add(world,ground);


}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);


}