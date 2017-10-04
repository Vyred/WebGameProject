var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Field = /** @class */ (function (_super) {
        __extends(Field, _super);
        function Field() {
            return _super.call(this) || this;
        }
        //private _updateScoreBoard() {
        //    this._livesLabel.text = "Lives: " + core.lives;
        //    this._scoreLabel.text = "Score: " + core.score;
        //}
        /**
         * start
         */
        Field.prototype.Start = function () {
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
        };
        Field.prototype.Update = function () {
            if (this._player1.gameState === "play") {
                this.deltaTime = Math.floor(Date.now() / 1000) - this._oldTime;
                this._oldTime = Math.floor(Date.now() / 1000);
                this._floor.update();
                this._player1.update();
                console.log("Current time:" + Math.floor(Date.now()));
            }
            else if (this._player1.gameState === "pause") {
                console.log("paused");
            }
            else if (this._player1.gameState === "inventory") {
            }
            //this._playerContainer.;
            //console.log("Game Started...field");
            //this._collision.check(this._player1, this._island);
        };
        // EVENT HANDLERS ///////////////////////
        Field.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.DEATHSCREEN;
            core.changeScene();
        };
        Object.defineProperty(Field.prototype, "gameState", {
            /////////////////////////////////////////////////////////
            //get setters
            get: function () {
                return this._gameState;
            },
            set: function (newState) {
                this._gameState = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "deltaTime", {
            //////////////////////////////////////////////////////
            get: function () {
                return this._deltaTime;
            },
            set: function (newState) {
                this._deltaTime = newState;
            },
            enumerable: true,
            configurable: true
        });
        return Field;
    }(objects.Scene));
    scenes.Field = Field;
})(scenes || (scenes = {}));
//# sourceMappingURL=battleField.js.map