const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,ground;
function preload(){
  backgroundImage=loadImage("sprites/bg.png")
}


function setup(){

    var canvas = createCanvas(1200,400);
    //create your physics engine
    engine = Engine.create();
    /***************************/

    //When you create physics engine, world gets created by default
    //namespacing - assign it a new name 'world'. Instead of referrign to it as engine.world, simply world is easier.
    world = engine.world;

    ground=new Ground(600,380,1200,20);

    box1 = new Box(880,365,50,50);
    pig1=new PIG(950,365);
    box2 = new Box(1020,365,50,50);

    log1=new log(950,350,195,PI/2);

    box3 = new Box(880,310,50,50);
    pig2=new PIG(950,310);
   box4 = new Box(1020,310,50,50);

   log2=new log(950,210,195,PI/2);
   box5 = new Box(950,160,50,50);

   log3 = new log(910,160,150,PI/7);
   log4 = new log(990,160,150,-PI/7);
    
    bird1=new bird (100,100);



  //  console.log(ground);
}

function draw(){
    background(backgroundImage);

    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}