
namespace core {

  export let deltaTime: number;
  export let stage: createjs.Stage;
  export let canvas: any = document.getElementById("canvas");
  export let assets: createjs.LoadQueue;

  let currentScene: objects.Scene;
  export let scene: number;

  let startScreen: scenes.StartScreen;
  let field: scenes.Field;
  let deathScreen: scenes.DeathScreen;


  let assetData: objects.Asset[] = [
    { id: "grassBackground", src: "../../Assets/images/grass.png" },
    { id: "wizardBlue", src: "../../Assets/images/gunner1.gif" },
    { id: "m9", src: "../../Assets/images/M9.gif" },
    { id: "buttonConsumables", src: "../../Assets/images/buttonConsumables.gif" },
    { id: "buttonEquipment", src: "../../Assets/images/buttonEquipment.gif" },
    { id: "buttonEquipped", src: "../../Assets/images/buttonEquipped.gif" },
    { id: "buttonInventory", src: "../../Assets/images/buttonInventory.gif" },
    { id: "buttonStats", src: "../../Assets/images/buttonStats.gif" },
    { id: "buttonWeaponry", src: "../../Assets/images/buttonWeaponry.gif" },
    { id: "buttonArrowUp", src:"../../Assets/images/ArrowUp.png"},
    { id: "buttonArrowDown", src:"../../Assets/images/ArrowDown.png"},
    { id: "buttonArrowRight", src:"../../Assets/images/ArrowRight.png"},
    { id: "buttonArrowLeft", src:"../../Assets/images/ArrowLeft.png"}
  ];

  function preload(): void {
    assets = new createjs.LoadQueue(true);
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
  }

  function init(): void {
    // create a reference the HTML canvas Element
    canvas.width = (config.Screen.WIDTH);
    canvas.height = (config.Screen.HEIGHT)
    stage = new createjs.Stage(canvas);
    //let factor = 1;
    //canvas = document.createElement("canvas");
    // canvas.style.width = canvas.width * factor;
    //canvas.style.height = canvas.height * factor;

    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop);

    scene = config.Scene.BATTLEFIELD; console.log("Game Started...");
    changeScene();
  }

  // Main Game Loop function that handles what happens each "tick" or frame
  function gameLoop(event: createjs.Event): void {



    // redraw/refresh stage every frame
    currentScene.Update();
    stage.update();
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

  export function changeScene(): void {
    // Launch various scenes
    switch (scene) {
      //case config.Scene.STARTSCREEN:
      // show the MENU scene
      //   stage.removeAllChildren();
      //   intro = new scenes.Intro();
      //   currentScene = intro;
      //   console.log("Starting INTRO Scene");
      //   break;
      case config.Scene.BATTLEFIELD:
        // show the PLAY scene
        console.log("Scene: battlefield ");
        stage.removeAllChildren();
        field = new scenes.Field();
        currentScene = field;
        console.log("Starting Main");
        break;
      //case config.Scene.DEATHSCREEN:
      // show the game OVER scene
      // stage.removeAllChildren();
      // rightCave = new scenes.RightCave();
      //  currentScene = rightCave;
      //  console.log("Starting RIGHT_CAVE Scene");
      //   break;
    }

    console.log(currentScene.numChildren);
  }


  //window.addEventListener('resize', resize, false);
  window.addEventListener("load", preload);



};

//function resize() {
  //core.stage.canvas.width = window.innerWidth;
 // core.stage.canvas.height = window.innerHeight;
//}