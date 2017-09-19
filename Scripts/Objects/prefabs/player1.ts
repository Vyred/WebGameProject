module objects {

    let KEYCODE_LEFT :number;
    let KEYCODE_RIGHT :number;
    let KEYCODE_UP :number;
    let KEYCODE_DOWN :number;
    let KEYCODE_SHIFT:number;
    let _gameState:string;
    let leftArrow : boolean;
    let rightArrow : boolean;
    let upArrow : boolean;
    let downArrow : boolean;
    let leftShift: boolean;

    export class Player1 extends objects.GameObject {
        
       playerContainer : createjs.Container;

        currentStamina : number;
        maxStamina : number;
        staminaRegen : number;
    
        currentSPEED : number; 
        regSpeed : number;
        maxSPEED : number;
      
        //private _gameState : string = "play";
        
    

        //window.onkeyup = keyUpHandler;
        //window.onkeydown = keyDownHandler;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString:string) {
            super(imageString)
            this.regSpeed = 4; 
            this.currentSPEED = 4; 
            this.maxSPEED = 10;
            
            this.playerContainer = new createjs.Container();
            this.playerContainer.addChild();
            this.playerContainer.x = this.x;
            this.playerContainer.y = this.y;
            this.maxStamina = 100;
            this.currentStamina = this.maxStamina;
            this.start();
        }
      
        //held weapon/equipment/weapon type
        //


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
            if(this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
            }
        }

        //start
        public start():void {
            
            this.x = core.canvas.clientWidth/2;
            this.y = core.canvas.clientHeight/2;
            this.gameState = "play";
            KEYCODE_LEFT = 65;
            KEYCODE_RIGHT = 68;
            KEYCODE_UP = 87;
            KEYCODE_DOWN = 83;
            KEYCODE_SHIFT = 16;
            
            leftArrow = false;
            rightArrow = false;
            upArrow  = false;
            downArrow = false;
            leftShift = false;

            document.onkeydown = this.keyDownHandler;
            document.onkeyup = this.keyUpHandler;
            //document.onmousedown
        }


       //update
        public update():void {
            // player follow mouse
            let angleInRadians = Math.atan2(core.stage.mouseY - this.y, core.stage.mouseX - this.x);  
            let angleInDegrees = angleInRadians * (180 / Math.PI);
            this.rotation = angleInDegrees;
            //console.log("rot:" + this.rotation );

            //stamina/sprinting
            if (this.currentStamina >= 0 && leftShift && (leftArrow || rightArrow || upArrow || downArrow)){
                console.log("working?");
                this.currentStamina -= 1;
                this.currentSPEED = this.maxSPEED;
            } else {
                this.currentSPEED = this.regSpeed;
                leftShift = false;
            }

            if(this.currentStamina < this.maxStamina) {
                this.currentStamina += 0.333;
                //console.log("stamina:" + this.currentStamina + "/" + this.maxStamina);
            }
            
            //move
            if(leftArrow) {this.x -= this.currentSPEED}
            if(rightArrow) {this.x += this.currentSPEED}
            if(upArrow) {this.y -= this.currentSPEED}
            if(downArrow) {this.y += this.currentSPEED}
            //move();
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
          case KEYCODE_SHIFT: {leftShift = true} break;
          case 80: { 
            console.log("p pressed" + _gameState);
            if (_gameState == "pause"){
                _gameState = "play"; 
                console.log("p pressed play"); 
            } else if (_gameState == "play"){
                _gameState = "pause";
                console.log("p pressed pause");
            } 

         } break;
          default: { console.log(event.keyCode ); } break; 
         } 
         //move();
        }
        public keyUpHandler(event)
        {
         switch(event.keyCode)
         {
          case KEYCODE_LEFT:  {leftArrow = false} break;
          case KEYCODE_RIGHT: {rightArrow = false} break;
          case KEYCODE_UP:    {upArrow = false} break;
          case KEYCODE_DOWN:  {downArrow = false} break;
          case KEYCODE_SHIFT: {leftShift = false} break;
         } 
        }
        //my tips for sleep would be a fan(white noise and a lower body temperature help), clear your head, maybe exercise, don't drink coffee,  a cup of water   

        ////////////////////////////////////////
        ////get setters/////////////////////////
        get gameState():string {
            return _gameState;
        }

        set gameState(newState:string) {
            _gameState = newState;
        }
    }

    function move()
    {
    //console.log("key down move hj:"+this.KEYCODE_DOWN);
    
     if(this.leftArrow) {this.x -= this.currentSPEED}
     if(this.rightArrow) {this.x += this.currentSPEED}
     if(this.upArrow) {this.y -= this.currentSPEED}
     if(this.downArrow) {this.y += this.currentSPEED}
    }
}