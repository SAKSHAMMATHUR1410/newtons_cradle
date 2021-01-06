class Rope{
    constructor(bodyA, bodyB,xOffset){
        var options = {
            
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:xOffset,y:0},
            stiffness: 0.0004,
            length: 10
        }
        
        this.xOffset = xOffset ;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
    display(){
        
            var pointA = this.Rope.bodyA.position;
            var pointB = this.Rope.bodyB.position;
            push();
            
            
            strokeWeight(3);
            
            line(pointA.x,pointA.y,pointB.x + this.xOffset,pointB.y)
            
            pop();
        
    }
}