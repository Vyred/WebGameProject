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
        /**
         * Creates an instance of Menu.
         *
         */
        function Field() {
            return _super.call(this) || this;
        }
        //private _updateScoreBoard() {
        //    this._livesLabel.text = "Lives: " + core.lives;
        //    this._scoreLabel.text = "Score: " + core.score;
        //}
        /**
         *
         */
        Field.prototype.Start = function () {
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
        };
        Field.prototype.Update = function () {
            this._floor.update();
            this._player1.update();
            //console.log("Game Started...field");
            //this._collision.check(this._player1, this._island);
        };
        // EVENT HANDLERS ++++++++++++++++
        Field.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.DEATHSCREEN;
            core.changeScene();
        };
        return Field;
    }(objects.Scene));
    scenes.Field = Field;
})(scenes || (scenes = {}));
//# sourceMappingURL=field.js.map