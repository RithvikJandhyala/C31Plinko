class Plinko {
    constructor(x,y,) {
      var options = {
         isStatic : true
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.diameter = 20;
      
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x,pos.y, this.diameter,this.diameter);
    
    }
  
  };