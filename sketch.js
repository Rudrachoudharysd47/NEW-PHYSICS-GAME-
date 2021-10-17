
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=0
var wedge2
function setup() {
  createCanvas(600,600);

   engine = Engine.create();
   world = engine.world;
   
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(300,390,1000,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(230,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ball2 = Bodies.circle(390,10,20,ball_options);
  World.add(world,ball2)

 ground2 = Bodies.rectangle(497,200,200,20,ground_options);
  World.add(world,ground2);

 wedge = Bodies.rectangle(300,200,100,20,ground_options)

  World.add(world,wedge)

 ball3 = Bodies.circle(60,10,20,ball_options);
 World.add(world,ball3)

 wedge2 = Bodies.rectangle(160,100,100,20,ground_options)

  World.add(world,wedge2)

  wedge3 = Bodies.rectangle(50,180,100,20,ground_options)

  World.add(world,wedge3)

  wedge4 = Bodies.rectangle(152,280,100,20,ground_options)

  World.add(world,wedge4)

}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("blue")
  ellipse(ball.position.x,ball.position.y,20);
  fill("green")
  rect(ground.position.x,ground.position.y,600,20);
 fill("red")
  ellipse(ball2.position.x,ball2.position.y,20);
 fill("yellow")
   rect(ground2.position.x,ground2.position.y,200,20);
  fill("purple")
    ellipse(ball3.position.x,ball3.position.y,20);



 Matter.Body.rotate(wedge,angle)
  angle=angle+0.3
   push()
    translate(wedge.position.x,wedge.position.y)
     rotate(angle)
      rect(0,0,100,20)
       pop()

       Matter.Body.rotate(wedge2,angle)
       angle=angle+0.3
        push()
         translate(wedge2.position.x,wedge2.position.y)
          rotate(angle)
           rect(0,0,100,20)
            pop()

            Matter.Body.rotate(wedge3,angle)
            angle=angle+0.3
             push()
              translate(wedge3.position.x,wedge3.position.y)
               rotate(angle)
                rect(0,0,100,20)
                 pop()

                 Matter.Body.rotate(wedge4,angle)
                 angle=angle+0.3
                  push()
                   translate(wedge4.position.x,wedge4.position.y)
                    rotate(angle)
                     rect(0,0,100,20)
                      pop() 
                







}

