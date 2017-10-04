var objects;
(function (objects) {
    var menus;
    (function (menus) {
        var Inventory = /** @class */ (function () {
            //inventory item Array
            function Inventory() {
                this.Start();
            }
            //private _updateScoreBoard() {
            //    this._livesLabel.text = "Lives: " + core.lives;
            //    this._scoreLabel.text = "Score: " + core.score;
            //}
            ////////////////////////////////////////////////////////////////////////
            ////start ///////////////////////////////////////////////////////////
            Inventory.prototype.Start = function () {
                this._inventoryContainer = new createjs.Container();
                this.drawInventory();
            };
            Inventory.prototype.Update = function () {
                this._inventoryContainer.x = 0;
                this._inventoryContainer.y = 0;
            };
            Inventory.prototype.drawInventory = function () {
                var _this = this;
                this.indexerGraphic = 0;
                //this could be done many different ways but these basically just draw the panel
                this.graphicsArray = new Array();
                this.buttonArray = new Array();
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
                this.graphicsArray.forEach(function (element) {
                    var Panel = new createjs.Shape(element);
                    console.log("inventory");
                    _this._inventoryContainer.addChild(Panel);
                    _this._inventoryContainer.setChildIndex(Panel, _this.indexerGraphic++);
                    //indexerGraphic++;
                });
                var indexerButton = 0;
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
                var buttonArrowRight = new objects.Button("buttonArrowRight", config.Screen.WIDTH * 0.475, config.Screen.HEIGHT * 0.68);
                var buttonArrowLeft = new objects.Button("buttonArrowLeft", config.Screen.WIDTH * 0.425, config.Screen.HEIGHT * 0.68);
                this._inventoryContainer.addChild(buttonArrowRight);
                this._inventoryContainer.setChildIndex(buttonArrowRight, this.indexerGraphic++);
                this._inventoryContainer.addChild(buttonArrowLeft);
                this._inventoryContainer.setChildIndex(buttonArrowLeft, this.indexerGraphic++);
                this.buttonArray.forEach(function (element) {
                    _this._inventoryContainer.addChild(element);
                    _this._inventoryContainer.setChildIndex(element, _this.indexerGraphic++);
                });
            };
            Object.defineProperty(Inventory.prototype, "inventoryContainer", {
                /////////////////////////////////////////
                //get setters
                get: function () {
                    return this._inventoryContainer;
                },
                set: function (newState) {
                    this._inventoryContainer = newState;
                },
                enumerable: true,
                configurable: true
            });
            return Inventory;
        }());
        menus.Inventory = Inventory;
    })(menus = objects.menus || (objects.menus = {}));
})(objects || (objects = {}));
//# sourceMappingURL=inventory.js.map