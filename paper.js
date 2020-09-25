class Paper{

    constructor(x, y) {

        this.image = loadImage("cpaper.png");

        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.radius = 20;
        this.body = Bodies.circle(x, y, this.radius, options);
        

        World.add(world, this.body);
    } 

    display(){

        var paper = this.body.position;
        
        image(this.image, 0, 0, 20, 20);
        
        push();
        translate(paper.x, paper.y);
        ellipse(0,0, this.radius);
        pop();
        

    } 

}    
