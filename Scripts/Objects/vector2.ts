module objects {
    
   //Constructor
    export class Vector2 extends createjs.Point {
        constructor(x:number = 0, y:number = 0) {
            super(x, y);
        }
        


        //distance
        public static distance(a:Vector2, b:Vector2):number {
            return Math.floor(Math.sqrt(Math.pow((b.x - a.x),2) + Math.pow((b.y - a.y), 2)));
        }

        public static forward(rot:number):Vector2{
            let returnVector2 = new Vector2(0, 0);  
            returnVector2.x = Math.cos(rot);
            returnVector2.y = Math.sin(rot);
           // console.log(Math.sqrt(returnVector2.x*returnVector2.x) + (returnVector2.y*returnVector2.y));
            //console.log("x:" + returnVector2.x + "y"+ returnVector2.y);                     
            return (returnVector2);
   
           
        }
    }
}