class computerArchery{
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("assets/computerArchery.png");
  
          World.add(world, this.body);
    }
  
     display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      if (move === "UP" && computerArchery.body.angle < 1.77) {
        angleValue = 0.1;
      }else{
        angleValue =-0.1;
      }
      
      if(move === "DOWN" && computerArchery.body.angle> 1.47) {
        angleValue = -0.1;
      }else{
        angleValue = 0.1
      } 







      Matter.Body.setAngle(this.body,-P1/2);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  