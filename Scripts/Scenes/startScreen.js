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
    var StartScreen = /** @class */ (function (_super) {
        __extends(StartScreen, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function StartScreen() {
            return _super.call(this) || this;
        }
        /**
         *
         */
        StartScreen.prototype.Start = function () {
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
        };
        StartScreen.prototype.Update = function () {
            // scene updates happen here...
            //this._ocean.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        StartScreen.prototype._startButtonClick = function (event) {
            // Switch the scene
            //Main.scene = config.Scene.FIELD;
            core.changeScene();
        };
        return StartScreen;
    }(objects.Scene));
    scenes.StartScreen = StartScreen;
})(scenes || (scenes = {}));
//# sourceMappingURL=startScreen.js.map