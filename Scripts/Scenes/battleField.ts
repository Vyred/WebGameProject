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
            // ocean object
            this._gameState = "play";
            
            this._floor = new objects.Floor("grassBackground");
            this.addChild(this._floor);

            this._player1 = new objects.Player1("wizardBlue");
            //this.addChild(this._player1);
            this._playerContainer = new createjs.Container();
            this._playerContainer.addChild(this._player1);
            this.addChild(this._playerContainer);
            // player object


            // include a collision managers
            this._collision = new managers.Collision();



            // add this scene to the global scene container
            core.stage.addChild(this);



           
        }

        public Update(): void {
            if (this._player1.gameState === "play") {
                this._floor.update();
                this._player1.update();
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
    }
}