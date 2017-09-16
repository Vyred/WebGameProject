module config {

    // Scene Constants
    export class Scene {
        public static STARTSCREEN: number = 0;
        public static FIELD: number = 1;
        public static DEATHSCREEN: number = 2;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}