class Ground{

    constructor(x, y){
       
        this.x = x;
        this.y = y;
        this.ground = Bodies.rectangle(this.x, this.y, width, 10, {isStatic: true});
        World.add(world, this.ground);
    }

    display(){
        
        var ground = this.ground;

        push();
        fill("orange");
        stroke("yellow");
        pop();
        
    }
}
