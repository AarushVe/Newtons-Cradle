class Bob{
    constructor(x, y, radius) {
        var options = {
            'restitution':1.0,
            
            'friction':0,
            'density':0.8
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(RADIUS);
        ellipse(0, 0, this.radius*2, this.radius*2);
        pop();
        
      }
}