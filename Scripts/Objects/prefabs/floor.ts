module objects {
   
    export class Floor extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy:number;

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this.start();
        }

        private _reset():void {
            this.y = 0;
        }
  
        private _checkBounds():void {
            if(this.y > 0) {
                this._reset();
            }
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        public start():void {
            console.log("Floor start");
            this._reset();
            //this._dy = 5; // 5px per frame down
        }

        public update():void {
            //this.y += this._dy;
            this._checkBounds();
        }
    }
}