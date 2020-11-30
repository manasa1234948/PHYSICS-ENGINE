const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  
  
engine = Engine.create();
world = engine.world;
var options={
  isStatic:true,
}
ground=Bodies.rectangle(400,380,width,20,options);
World.add(world,ground);
var ball_options={
  restitution:1.5,
}
ball=Bodies.circle(500,50,20,ball_options);
World.add(world,ball);




}



function draw() {
  background('green');
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}