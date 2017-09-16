module objects {

    let KEYCODE_LEFT :number;
    let KEYCODE_RIGHT :number;
    let KEYCODE_UP :number;
    let KEYCODE_DOWN :number;
    let SPEED : number; 
    let leftArrow : boolean;
    let rightArrow : boolean;
    let upArrow : boolean;
    let downArrow : boolean;

    export class Player1 extends objects.GameObject {

       
         SPEED: number  = 10; 

        //window.onkeyup = keyUpHandler;
        //window.onkeydown = keyDownHandler;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString:string) {
            super(imageString)
            
            this.start();
        }
      
        private _checkBounds():void {
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.x >= (core.canvas.clientWidth - (this.width * 0.5))) {
                this.x = (core.canvas.clientWidth - (this.width * 0.5));
            }

            // check left bounds
           if(this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
           }

            // check right bounds
           if(this.y >= (core.canvas.clientHeight - (this.height * 0.5))) {
               this.y = (core.canvas.clientHeight - (this.height * 0.5));
           }

            // check left bounds
            if(this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        }

        //start
        public start():void {
            this.x = core.canvas.clientWidth/2;
            this.y = core.canvas.clientHeight/2;
            KEYCODE_LEFT = 65;
            KEYCODE_RIGHT = 68;
            KEYCODE_UP = 87;
            KEYCODE_DOWN = 83;
          
            
            
            leftArrow = false;
            rightArrow = false;
            upArrow  = false;
            downArrow = false;
            document.onkeydown = this.keyDownHandler;
            document.onkeyup = this.keyUpHandler;
        }


       //update
        public update():void {
            // player to follow mouse
            //
            let angleInRadians = Math.atan2(core.stage.mouseY - this.y, core.stage.mouseX - this.x);  
            let angleInDegrees = angleInRadians * (180 / Math.PI);
            this.rotation = angleInDegrees;
            console.log("rot:" + this.rotation );

            Vector2.forward(this.rotation);
            if(leftArrow) {this.x -= this.SPEED}
            if(rightArrow) {this.x += this.SPEED}
            if(upArrow) {this.y -= this.SPEED}
            if(downArrow) {this.y += this.SPEED}
            this._checkBounds();

           
        }




    
        public keyDownHandler(event)
        {
            
         switch(event.keyCode)
         {     
            
          case KEYCODE_LEFT:  {leftArrow = true; console.log("key down");} break;//this.leftArrow = true; break;
          case KEYCODE_RIGHT: {rightArrow = true} break;
          case KEYCODE_UP:    {upArrow = true} break;
          case KEYCODE_DOWN:  {downArrow = true} break;
          default: { console.log(event.keyCode ); } break;
        
          
         } 
         move();
        }
        public keyUpHandler(event)
        {
         switch(event.keyCode)
         {
          case KEYCODE_LEFT:  {leftArrow = false} break;
          case KEYCODE_RIGHT: {rightArrow = false} break;
          case KEYCODE_UP:    {upArrow = false} break;
          case KEYCODE_DOWN:  {downArrow = false} break;
         } 
        }

    }

    function move()
    {
    //console.log("key down move hj:"+this.KEYCODE_DOWN);
    
     if(this.leftArrow) {this.x -= this.SPEED}
     if(this.rightArrow) {this.x += this.SPEED}
     if(this.upArrow) {this.y -= this.SPEED}
     if(this.downArrow) {this.y += this.SPEED}
    }
}