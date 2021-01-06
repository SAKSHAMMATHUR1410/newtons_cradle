class Ball {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);

        fill("orange");

        ellipse(0, 0,40,40);
        
        pop();
        
      }
}