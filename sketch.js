

const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine,myworld;
 var ball,ballImage,ground;
 var block1,block2,block3,block4,block5,block6;
 var backImage;
 var machine,machineImg;
function preload()
{
  
  //backImage = loadImage("Images/daycity.png");
  getbackgroundImg();
  machineImg = loadImage("wreckingmachine.png");
}
function setup()
{
   createCanvas (1500,650);
   myengine = Engine.create();
   myworld = myengine.world;
  
 
  ball = new Ball(200,200,100,100);
  rope = new Rope(ball.body,{x:650,y:220});
  ground= new Ground(500,650,2000,50);

  block1 = new Box(1000,400,50,50);
  block2 = new Box(1000,400,50,50);
  block3 = new Box(1000,400,50,50);
  block4 = new Box(1000,400,50,50);
  block5 = new Box(1000,400,50,50);
  block6 = new Box(1000,400,50,50);

  block7 = new Box(1100,400,50,50);
  block8 = new Box(1100,400,50,50);
  block9 = new Box(1100,400,50,50);
  block10 = new Box(1100,400,50,50);
  block11 = new Box(1100,400,50,50);
  block12 = new Box(1100,400,50,50);
  block13 = new Box(1100,400,50,50);
  block14 = new Box(1100,400,50,50);

  block15 = new Box(1200,400,50,50);
  block16 = new Box(1200,400,50,50);
  block17 = new Box(1200,400,50,50);
  block18 = new Box(1200,400,50,50);
  block19 = new Box(1200,400,50,50);
  block20 = new Box(1200,400,50,50);
  block21 = new Box(1200,400,50,50);
  block22 = new Box(1200,400,50,50);

}
function draw()
{
  if(backImage)
  {
      background(backImage);
  }
   else
       background("white");



  //background(backImage);
  Engine.update(myengine);


   ground.display();
   ball.display();
   rope.display();
   image(machineImg,400,370,700,600);

   
   fill("darkred");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();

   fill("indigo");
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();

   fill("DarkGreen");
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   block22.display();
  
}
async function getbackgroundImg()
{
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=06 && hour<=19)
    {
        bg = "daycity.png";

    }
    else
    {
        bg="nightcity.png";

    }
    backImage = loadImage(bg);

    console.log(score);
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    rope.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        Matter.Body.setPosition(ball.body,{x:200,y:200}); 
        rope.attach(ball.body);
    }
}