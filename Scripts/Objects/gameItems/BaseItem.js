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
var objects;
(function (objects) {
    var Items;
    (function (Items) {
        //every object will have an id and a name and quantity if stackable
        //All items should by default have a visual at least, if they are dropped
        var BaseItem = /** @class */ (function (_super) {
            __extends(BaseItem, _super);
            /*
             @description image, name, max stack, current stack, base value
            */
            function BaseItem(imageString, name, stackable, baseValue) {
                var _this = _super.call(this, (imageString)) || this;
                //this.itemId =  
                _this.itemName = name;
                _this.itemMaxStack = stackable;
                _this.itemStack = 0;
                _this.itemBaseValue = baseValue;
                _this.start();
                return _this;
            }
            Object.defineProperty(BaseItem.prototype, "itemId", {
                //////////////////////////////////////////////
                ///Spawn Item
                //This spawns the object at whatever position with in random
                //number of stacks depending upon it's value and if it's stackable
                //public spawnItem(location : objects.Vector2, dropValue:number){
                //    if (this._itemMaxStack > 1){
                //        this._itemStack = Math.floor(dropValue/this._itemBaseValue);
                //    }
                //}
                ////////////////////////////////////////////
                //get setters//////////////////////////////
                get: function () {
                    return this._itemId;
                },
                set: function (newState) {
                    this._itemId = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseItem.prototype, "itemName", {
                //////////////////////////////////////////
                get: function () {
                    return this._itemName;
                },
                set: function (newState) {
                    this._itemName = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseItem.prototype, "itemMaxStack", {
                /////////////////////////////////////////
                get: function () {
                    return this._itemMaxStack;
                },
                set: function (newState) {
                    this._itemMaxStack = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseItem.prototype, "itemStack", {
                ////////////////////////////////////////
                get: function () {
                    return this._itemStack;
                },
                set: function (newState) {
                    this._itemStack = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseItem.prototype, "itemBaseValue", {
                ////////////////////////////////////////
                get: function () {
                    return this._itemBaseValue;
                },
                set: function (newState) {
                    this._itemBaseValue = newState;
                },
                enumerable: true,
                configurable: true
            });
            return BaseItem;
        }(objects.GameObject));
        Items.BaseItem = BaseItem;
    })(Items = objects.Items || (objects.Items = {}));
})(objects || (objects = {}));
/*Plan/////////////////////////////////////////////////////////////////////////////////////////

The player has an inventory that will store any items picked up with "e"
The player will also have active equips which are attached to hotkeys
the player will start with their respective gun.

The gun has an array of bullets attached.
If the player has bullets the gun can be reloaded.
If the guns clip has ammo it can be fired.
When the player clicks the screen, a bullet is fired in the direction the player is facing.

*/ //////////////////////////////////////////////////////////////////////////////////////////// 
//# sourceMappingURL=BaseItem.js.map