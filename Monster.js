class Monster{
	constructor(x,y)	{
    var options={
      'frictionAir':0.005,
      'density':1.0,
      'mass':15000,
    }
		this.x=x;
		this.y=y;
    this.body=Bodies.circle(x,y,200,options)
    this.radius=200;
		this.image=loadImage("Monster-01.png");
		World.add(world, this.body)

	}
	display(){
    push();
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image( this.image,0, 0, 2*this.radius,2*this.radius);
    pop();
	}

}