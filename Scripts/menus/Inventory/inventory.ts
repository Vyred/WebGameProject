module objects.menus {

    export class Inventory {
        ///////////////////////////////////
        //equipment
        //////////////////////////////////
        //equipped:
        //-Weapon - ammo
        //-Consumable
        //-armor
        //////////////////////////////////
        //stats:health,stamina, reload speed,
        //////////////////////////////////

        //let inventoryMainPanel: scenes;

        private _inventoryContainer: createjs.Container;

        buttonConsumables: objects.Button;
        buttonEquipment: objects.Button;
        buttonEquipped: objects.Button;
        buttonInventory: objects.Button;
        buttonStats: objects.Button;
        buttonWeaponry: objects.Button;

        buttonTextInventory: objects.ButtonWithText;
        buttonTextWeaponry: objects.ButtonWithText;
        buttonTextEquipment: objects.ButtonWithText;
        buttonTextConsumables: objects.ButtonWithText;
        buttonTextStats: objects.ButtonWithText;
        buttonTextEquipped: objects.ButtonWithText;

        indexerGraphic: number;
        graphicsArray: createjs.Graphics[]
        buttonArray: objects.ButtonWithText[];


        
        //inventory item Array

        constructor() {
            this.Start();

        }

        
        //private _updateScoreBoard() {
        //    this._livesLabel.text = "Lives: " + core.lives;
        //    this._scoreLabel.text = "Score: " + core.score;
        //}

        ////////////////////////////////////////////////////////////////////////
        ////start ///////////////////////////////////////////////////////////
        public Start(): void {
            this._inventoryContainer = new createjs.Container();
            this.drawInventory();
            this._inventoryContainer.visible = false;


        }

        public Update(): void {
            this._inventoryContainer.x = 0;
            this._inventoryContainer.y = 0;
        }

        private drawInventory() {
            this.indexerGraphic = 0;

            //this could be done many different ways but these basically just draw the panel
            this.graphicsArray = new Array<createjs.Graphics>();
            this.buttonArray = new Array<objects.ButtonWithText>();
            //black background
            this.graphicsArray[0] = new createjs.Graphics().beginFill("#000000").drawRect(config.Screen.WIDTH * 0.05, config.Screen.HEIGHT * 0.05, config.Screen.WIDTH * 0.9, config.Screen.HEIGHT * 0.9);
            //blue background
            this.graphicsArray[1] = new createjs.Graphics().beginFill("#3355FF").drawRect(config.Screen.WIDTH * 0.055, config.Screen.HEIGHT * 0.055, config.Screen.WIDTH * 0.89, config.Screen.HEIGHT * 0.89);
            //top panel(equipment/stats)
            this.graphicsArray[2] = new createjs.Graphics().beginStroke("#000000").drawRect(config.Screen.WIDTH * 0.05, config.Screen.HEIGHT * 0.05, config.Screen.WIDTH * 0.9, config.Screen.HEIGHT * 0.65);
            //left panel(stats)
            this.graphicsArray[3] = new createjs.Graphics().beginStroke("#000000").drawRect(config.Screen.WIDTH * 0.05, config.Screen.HEIGHT * 0.05, config.Screen.WIDTH * 0.6, config.Screen.HEIGHT * 0.65);
            //top labels panel(equipment/stats)
            this.graphicsArray[4] = new createjs.Graphics().beginStroke("#000000").drawRect(config.Screen.WIDTH * 0.05, config.Screen.HEIGHT * 0.05, config.Screen.WIDTH * 0.9, config.Screen.HEIGHT * 0.05);
            //bottom label section
            this.graphicsArray[5] = new createjs.Graphics().beginStroke("#000000").drawRect(config.Screen.WIDTH * 0.05, config.Screen.HEIGHT * 0.7, config.Screen.WIDTH * 0.9, config.Screen.HEIGHT * 0.045);
            //inventory Panel
            this.graphicsArray[6] = new createjs.Graphics().beginStroke("#000000").drawRect(config.Screen.WIDTH * 0.05, config.Screen.HEIGHT * 0.1, config.Screen.WIDTH * 0.6, config.Screen.HEIGHT * 0.52);
            /////////////////////////////////////////////////
            this.graphicsArray.forEach(element => {
                let Panel = new createjs.Shape(element);
                console.log("inventory");
                this._inventoryContainer.addChild(Panel);
                this._inventoryContainer.setChildIndex(Panel, this.indexerGraphic++);
                //indexerGraphic++;
            });


            let indexerButton = 0;

            //labels/buttons
            this.buttonTextInventory = this.buttonArray[0] = new objects.ButtonWithText(config.Screen.WIDTH * 0.13, config.Screen.HEIGHT * 0.07, "Inventory", (config.Screen.WIDTH * 0.02).toString() + "px", "Courier", "#ffffff", true);
            this.buttonTextWeaponry = this.buttonArray[1] = new objects.ButtonWithText(config.Screen.WIDTH * 0.26, config.Screen.HEIGHT * 0.07, "Weaponry", (config.Screen.WIDTH * 0.02).toString() + "px", "Courier", "#ffffff", true);
            this.buttonTextEquipment = this.buttonArray[2] = new objects.ButtonWithText(config.Screen.WIDTH * 0.40, config.Screen.HEIGHT * 0.07, "Equipment", (config.Screen.WIDTH * 0.02).toString() + "px", "Courier", "#ffffff", true);
            this.buttonTextConsumables = this.buttonArray[3] = new objects.ButtonWithText(config.Screen.WIDTH * 0.54, config.Screen.HEIGHT * 0.07, "Consumables", (config.Screen.WIDTH * 0.02).toString() + "px", "Courier", "#ffffff", true);
            this.buttonTextStats = this.buttonArray[4] = new objects.ButtonWithText(config.Screen.WIDTH * 0.7, config.Screen.HEIGHT * 0.07, "Stats", (config.Screen.WIDTH * 0.025).toString() + "px", "Courier", "#ffffff", true);
            this.buttonTextEquipped = this.buttonArray[5] = new objects.ButtonWithText(config.Screen.WIDTH * 0.13, config.Screen.HEIGHT * 0.715, "Equipped", (config.Screen.WIDTH * 0.025).toString() + "px", "Courier", "#ffffff", true);
            //Buttons for navigating inventory/stats
            //let buttonArrowUp = new objects.Button("buttonArrowUp", config.Screen.WIDTH * 0.4, config.Screen.HEIGHT * 0.16);
            //let buttonArrowDown = new objects.Button("buttonArrowDown", config.Screen.WIDTH * 0.4, config.Screen.HEIGHT * 0.69);
            let buttonArrowRight = new objects.Button("buttonArrowRight", config.Screen.WIDTH * 0.475, config.Screen.HEIGHT * 0.68);
            let buttonArrowLeft = new objects.Button("buttonArrowLeft", config.Screen.WIDTH * 0.425, config.Screen.HEIGHT * 0.68);
            this._inventoryContainer.addChild(buttonArrowRight);
            this._inventoryContainer.setChildIndex(buttonArrowRight, this.indexerGraphic++);
            this._inventoryContainer.addChild(buttonArrowLeft);
            this._inventoryContainer.setChildIndex(buttonArrowLeft, this.indexerGraphic++);

            this.buttonArray.forEach(element => {
                this._inventoryContainer.addChild(element);
                this._inventoryContainer.setChildIndex(element, this.indexerGraphic++);
            });

            

        }



        /////////////////////////////////////////
        //get setters
        get inventoryContainer(): createjs.Container {
            return this._inventoryContainer;
        }

        set inventoryContainer(newState: createjs.Container) {
            this._inventoryContainer = newState;
        }

    }
}
