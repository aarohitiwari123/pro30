class Hexa extends BaseClass{
    constructor(x,y,r) {
      super(x,y,50,50);
     
        this.image = loadImage("hexa.png");
        World.add(world, this.body);
      }
      display(){
        super.display();
      
      }
    };
    