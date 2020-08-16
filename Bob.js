class Bob {

    constructor(x,y) {

      var options = {

          'isStatic': false,
          'restitution':1.67,
          'friction':0,
          'density':1.66

      };

      this.body = Bodies.rectangle(x, y, 40,40, options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
      
    }

    display(){

      var pos = this.body.position;
      strokeWeight(4);
      stroke("black");
      fill("white");
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y, this.width, this.height);
      
    }
  };