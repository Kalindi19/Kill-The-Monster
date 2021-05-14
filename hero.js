class Hero{
  constructor(x,y){
    var options = {
      'frictionAir':0.005,
      'density':1.0,
      'mass':15000,
  }
  this.body = Bodies.circle(x,y,150,options);
  this.radius = 150;
  World.add(world, this.body);
  this.image=loadImage("Superhero-01.png")
  }

  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image( this.image,0, 0, 2*this.radius,2*this.radius);
    pop();
  }
}
