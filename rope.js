class Rope{
     constructor(body1,body2,offsetX,offsetY){
         this.offsetX=offsetX
         this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}

          
        }
    
        this.rope=Constraint.create(options); 
        World.add(world,this.rope);
     }
     display(){
         stroke("black");
         var point1 = this.rope.bodyA.position;
         var point2 = this.rope.bodyB.position;


         var Anchor1X = point1.x
         var Anchor1Y = point1.y

         var Anchor2X = point2.x
         var Anchor2Y = point2.y
        line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
     }
}