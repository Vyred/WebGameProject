module objects {
   
    export abstract class GameObject extends createjs.Bitmap {
         // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _width:number;
        private _height:number;
        private _name:string;
        private _position:Vector2;
        private _isColliding:boolean;
        private _enabled: boolean;
        public sound:createjs.AbstractSoundInstance;
       
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++

        get width():number {
            return this._width;
        }

        set width(newWidth:number) {
            this._width = newWidth;
        }

        get halfWidth():number {
            return this._width * 0.5;
        }

        get height():number {
            return this._height;
        }

        set height(newHeight:number) {
            this._height = newHeight;
        }

        get halfHeight():number{
            return this._height * 0.5;
        }

        get name():string {
            return this._name;
        }

        set name(newName:string) {
            this._name = newName;
        }

        get position():Vector2 {
            return this._position;
        }

        set position(newPosition:Vector2) {
            this._position = newPosition;
        }

        get isColliding():boolean {
            return this._isColliding;
        }

        set isColliding(newState:boolean) {
            this._isColliding = newState;
        }

        get enabled():boolean{
            return this._enabled;
        }
        set enabled(newState:boolean){
            this._enabled = newState;
        }

        //Private Method
        private _purgatory():void {
            this.x = config.Screen.WIDTH * 444;
            this.y = config.Screen.HEIGHT * 444; 
            this.enabled = false;           
        }

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString:string) {
            super(core.assets.getResult(imageString));
            
            this._initialize(imageString);

            this.start();
        }
        
        private _initialize(imageString:string):void {
            console.log("init:"+ imageString);
            //console.log("init:"+ );
            this.name = imageString;
           // this.width = this.image.width;
            //
            this.width = this.getBounds().width;
            //
            this.height = this.getBounds().height;
           // this.height = this.image.height;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.position = new Vector2(this.x, this.y);
            this.isColliding = false;
            this.enabled = true;
        }

    
        public start():void {
            
        }

        public update():void {
           

        }


    }
}