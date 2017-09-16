module scenes {
    export class Field extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _floor: objects.Floor;
        private _player1: objects.Player1;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _engineSound: createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        //private _updateScoreBoard() {
        //    this._livesLabel.text = "Lives: " + core.lives;
        //    this._scoreLabel.text = "Score: " + core.score;
        //}

        /**
         * 
         */
        public Start(): void {
            // ocean object
            this._floor = new objects.Floor("grassBackground");
            this.addChild(this._floor);

            // player object
            this._player1 = new objects.Player1("wizardBlue");
            this.addChild(this._player1);
           

            // include a collision managers
            this._collision = new managers.Collision();

           
            
            // add this scene to the global scene container
            core.stage.addChild(this);
            
        }

        public Update(): void {
            this._floor.update();
            this._player1.update();
            
            //console.log("Game Started...field");
            //this._collision.check(this._player1, this._island);

        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.DEATHSCREEN;
            core.changeScene();
        }
    }
}