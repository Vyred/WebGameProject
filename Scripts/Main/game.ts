
namespace core {

    export let deltaTime : number;
    export let stage:createjs.Stage;
    export let canvas: HTMLElement = document.getElementById("canvas");
    export let assets: createjs.LoadQueue;
    
    let currentScene: objects.Scene;
    export let scene: number;

    let startScreen: scenes.StartScreen;
    let field: scenes.Field;
    let deathScreen: scenes.DeathScreen;



   let assetData: objects.Asset[] = [
      { id: "grassBackground", src: "../../Assets/images/grass.png" },
      { id: "wizardBlue", src: "../../Assets/images/gunner1.gif" },
      { id: "m9", src: "../../Assets/images/gun.gif" }
  ];

  function preload(): void {
    assets = new createjs.LoadQueue(true);
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
  // create a reference the HTML canvas Element
  stage = new createjs.Stage(canvas); 
  stage.enableMouseOver(20);
  createjs.Ticker.framerate = 60;
  createjs.Ticker.on("tick", gameLoop);
  
  scene = config.Scene.BATTLEFIELD; console.log("Game Started..5.");
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
              console.log("YUU");
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
  
    window.addEventListener("load", preload);
  
  };