module scenes {
    export class StartScreen extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
       // private _ocean: objects.Ocean;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;

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
          
            // Add Menu Label
            //this._menuLabel = new objects.Label(
             //   "Gauntlet", "60px","Dock51", "#FFFF00",
             //   320, 240, true
             //   );
            //this.addChild(this._menuLabel);

            // add the start button
         
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // add this scene to the global scene container
            //Objects.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            //this._ocean.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            //Main.scene = config.Scene.FIELD;
            core.changeScene();
        }
    }
}