var config;
(function (config) {
    // Scene Constants
    var Scene = /** @class */ (function () {
        function Scene() {
        }
        Scene.STARTSCREEN = 0;
        Scene.BATTLEFIELD = 1;
        Scene.DEATHSCREEN = 2;
        return Scene;
    }());
    config.Scene = Scene;
    // Screen Constants
    var Screen = /** @class */ (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    // Game Constants
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map