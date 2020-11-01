class Box{
    constructor(x,y){
        this.leftBody=Bodies.rectangle(x-100,y,20,100);
        World.add(world,this.leftBody);



    }

    display(){
        var posl = this.leftBody.position
        rect(posl.x,posl.y,20,100);
        

    }

}