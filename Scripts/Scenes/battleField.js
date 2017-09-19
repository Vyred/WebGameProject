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
        };
        Field.prototype.Update = function () {
            if (this._player1.gameState === "play") {
                this._floor.update();
                this._player1.update();
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
        return Field;
    }(objects.Scene));
    scenes.Field = Field;
})(scenes || (scenes = {}));
//# sourceMappingURL=battleField.js.map