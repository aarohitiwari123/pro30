class Box extends BaseClass {
    constructor(x, y, width, height){
      var options = {
        isStatic : false,
        'restitution':0.5,
        'friction':2.3,
        'density': 3.7
    }
      super(x,y,width,height);
      this.image = loadImage("brick.PNG");
      this.visiblity = 255;
    }
    display(){
      if(this.body.speed < 3){
        
        super.display();
      }
    else{
    World.remove(world,this.body);
    push();
    this.visiblity = this.visiblity -5;
    tint(255,this.visiblity);
    image(this.image,this.body.position.x,this.body.position.y,60,30);
    pop();
    }
      }
  };
  