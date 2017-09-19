module objects {
 
    export class Projectile extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy:number;
        private _dx:number;

        private currentSpeed: number;
        private speed: number;
            
        private direction : number;

        constructor(imageString: string, startingRotation:number, startingPosition:Vector2) {
            super(imageString);

            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        //private _purgatory():void {
        //    this.x = config.Screen.WIDTH * 666;
        //    this.y = config.Screen.HEIGHT * 666;
        //    this.currentSpeed = 0;
       //     
        //}

        private _reset():void {

            //this._dy = Math.floor((Math.random() * 5) + 5); // vertical speed
            //this._dx = Math.floor((Math.random() * 4) - 2); // horizontal drift

            //this.y = -this.height;

            // get a random x location
            //this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
        }

        /**
         * This method checks if the object has reached its boundaries
        **/
        private _checkBounds():void {
            if(this.y >= (config.Screen.HEIGHT * 1.5 + (this.height * 0.5))) {
                this._reset();
            }
            if(this.y <= (0 - (config.Screen.HEIGHT * 0.5) + (this.height * 0.5))) {
                this._reset();
            }
            if(this.x >= (config.Screen.WIDTH * 1.5 + (this.width * 0.5))) {
                this._reset();
            }
            if(this.x <= (0 - (config.Screen.WIDTH * 0.5) + (this.width * 0.5))) {
                this._reset();
            }
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        public start():void {
            this._reset();
        }


        public update():void {
            this.position = new Vector2(this.x, this.y);
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        }
    }
}