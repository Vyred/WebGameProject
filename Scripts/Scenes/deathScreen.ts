module scenes {
    export class DeathScreen extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        //private _ocean:objects.Ocean;
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _finalScoreLabel: objects.Label;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            // Add Ocean Background
           // this._ocean = new objects.Ocean("ocean");
            //this.addChild(this._ocean);

            // Add Menu Label
            //this._gameOverLabel = new objects.Label(
            //    "GAME OVER", "60px","Dock51", "#FFFF00",
            //    320, 180, true
            //    );
            //this.addChild(this._gameOverLabel);

            // Add Score Label
            //this._finalScoreLabel = new objects.Label(
            //    "SCORE: " + core.score, "60px", "Dock51", "#FFFF00",
           //     320, 240, true
            //)
           // this.addChild(this._finalScoreLabel);

            // add the start button
            //this._restartButton = new objects.Button(
            //    "restartButton", 320, 420, true
           // )
            this.addChild(this._restartButton);

            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            //this._ocean.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _restartButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            //core.lives = 5;
            //core.score = 0;
           // core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}