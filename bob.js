class Bob {
  constructor(x, y,radius) {
    var options = {
        isSatic:false,
        'restitution':1,
        'friction':0,
        'density':7.8
    }
   
    this.body = Bodies.circle(x, y, 25, options);
    World.add(world, this.body);

    console.log(this.body);
  }
  display(){
    push();
    ellipseMode(RADIUS);
    fill(254,0,255);
    ellipse(this.position.X, this.position.Y, 25, 25);
    pop();
  }
};