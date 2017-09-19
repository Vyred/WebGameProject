var core;
(function (core) {
    core.canvas = document.getElementById("canvas");
    var currentScene;
    var startScreen;
    var field;
    var deathScreen;
    var assetData = [
        { id: "grassBackground", src: "../../Assets/images/grass.png" },
        { id: "wizardBlue", src: "../../Assets/images/gunner1.gif" },
        { id: "m9", src: "../../Assets/images/gun.gif" }
    ];
    function preload() {
        core.assets = new createjs.LoadQueue(true);
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    function init() {
        // create a reference the HTML canvas Element
        core.stage = new createjs.Stage(core.canvas);
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        core.scene = config.Scene.BATTLEFIELD;
        console.log("Game Started..5.");
        changeScene();
    }
    // Main Game Loop function that handles what happens each "tick" or frame
    function gameLoop(event) {
        // redraw/refresh stage every frame
        currentScene.Update();
        core.stage.update();
    }
    //   function Start() {
    //    console.log("Game Started..rip.");
    //  canvas = document.getElementById("canvas");
    //  stage = new createjs.Stage(canvas);
    //   stage.enableMouseOver(20);
    //   createjs.Ticker.framerate = 60;
    //    createjs.Ticker.on("tick", Update, this);
    //  Main();
    // }
    function Update() {
        //helloLabel.rotation += 5;
        //stage.update();
        //console.log("Game Started..mainuu.");
    }
    function Main() {
        console.log("Game Started...");
        //stage.addChild(helloLabel);
    }
    function changeScene() {
        // Launch various scenes
        switch (core.scene) {
            //case config.Scene.STARTSCREEN:
            // show the MENU scene
            //   stage.removeAllChildren();
            //   intro = new scenes.Intro();
            //   currentScene = intro;
            //   console.log("Starting INTRO Scene");
            //   break;
            case config.Scene.BATTLEFIELD:
                // show the PLAY scene
                console.log("YUU");
                core.stage.removeAllChildren();
                field = new scenes.Field();
                currentScene = field;
                console.log("Starting Main");
                break;
        }
        console.log(currentScene.numChildren);
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
;
//# sourceMappingURL=game.js.map