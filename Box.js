class Box
{
    constructor(x,y,width,height)
    {
       var options = {
           restitution :0.8,
           friction : 0.3,
           density : 1.0
       }
       this.width = width;
       this.height = height;
       //this.image = loadImage("box.png");
       this.body = Bodies.rectangle(x,y,width,height,options);
       World.add(myworld,this.body);

    }
    display()
    {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(angle);

     // rectMode(CENTER);
      strokeWeight(4);
      stroke ("white");

      rect(0,0,this.width,this.height);
      pop();
    }
}