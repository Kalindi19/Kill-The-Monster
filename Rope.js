class Rope{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            length:400,
            stiffness:1.2
        }
        this.rope= Constraint.create(options);
        World.add(world,this.rope);
        this.pointB=pointB;
    }

    display(){
        
        if(this.rope.bodyA){
        push();
        stroke(48,22,8)
        strokeWeight(0);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
    }
}

}