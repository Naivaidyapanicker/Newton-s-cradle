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
         var point1 = this.rope.bodyA.position;
         var point2 = this.rope.bodyB.position;

         strokeWeigt(2);

         var Anchor1X = point1.X
         var Anchor1Y = point1.Y

         var Anchor2X = point2.X
         var Anchor2Y = point2.Y
        line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
     }
}