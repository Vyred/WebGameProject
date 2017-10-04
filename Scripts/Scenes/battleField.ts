module scenes {
    export class Field extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _floor: objects.Floor;
        private _player1: objects.Player1;
        public _playerContainer: createjs.Container;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _engineSound: createjs.AbstractSoundInstance;

        private _oldTime : number;
        private _deltaTime : number; 
        //delta time is = current time - old time

        //private _pauseButton: boolean;

        private _gameState: string;


        constructor() {
            super();
        }

        //private _updateScoreBoard() {
        //    this._livesLabel.text = "Lives: " + core.lives;
        //    this._scoreLabel.text = "Score: " + core.score;
        //}

        /**
         * start
         */
        public Start(): void {
            //Time objects
            this._oldTime = 0;
            this._deltaTime = 0;

            this._gameState = "play";
            console.log("random ex:" + (Math.random() * (100 - 0) + 0));
            this._floor = new objects.Floor("grassBackground");
            this.addChild(this._floor);
           
            //core.stage.numChildren+1

            this._player1 = new objects.Player1("wizardBlue");
            //this.addChild(this._player1);
            this._playerContainer = new createjs.Container();

            

           
              this.addChild(this._playerContainer);
              this.addChild(this._player1._inventory.inventoryContainer);
              this._playerContainer.addChild(this._player1);
            /////////////////////////////////////////////////////////////////////////////
            //index order is very important.////////////////////////////////////////////
            //the lower numbers get rendered first and therefore things that get rendered later
            //should have the appropriate core.stage.numchildren-x
           
            this.setChildIndex(this._floor, 0);
            this.setChildIndex(this._playerContainer, 1);
            this.setChildIndex(this._player1._inventory.inventoryContainer, 2);
            // player object


            // include a collision managers
            this._collision = new managers.Collision();



            // add this scene to the global scene container
            core.stage.addChild(this);



           
        }

        public Update(): void {
            
            if (this._player1.gameState === "play") {
                
                this.deltaTime = Math.floor(Date.now() / 1000) - this._oldTime;
                this._oldTime = Math.floor(Date.now() / 1000);

                this._floor.update();
                this._player1.update();
            
                console.log("Current time:" + Math.floor(Date.now()));
                
            } else if (this._player1.gameState === "pause") {
                console.log("paused");
            } else if (this._player1.gameState === "inventory") {

            }
            //this._playerContainer.;
            //console.log("Game Started...field");
            //this._collision.check(this._player1, this._island);

        }


        // EVENT HANDLERS ///////////////////////
        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.DEATHSCREEN;
            core.changeScene();
        }
        /////////////////////////////////////////////////////////
        //get setters
        get gameState():string {
            return this._gameState;
        }

        set gameState(newState:string) {
            this._gameState = newState;
        }
        //////////////////////////////////////////////////////
        get deltaTime():number {
            return this._deltaTime;
        }

        set deltaTime(newState:number) {
            this._deltaTime = newState;
        }
    }
}