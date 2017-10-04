module objects.Items {

    //every object will have an id and a name and quantity if stackable
    //All items should by default have a visual at least, if they are dropped
    export class BaseItem extends objects.GameObject {

        //private _width:number;
        //private _height:number;
        //private _name:string;
        //private _position:Vector2;
        //private _isColliding:boolean;
        //private _enabled: boolean;
        //public sound:createjs.AbstractSoundInstance;
        private _itemId: number;
        private _itemName: string;
        //private itemDesription: string;
        private _itemMaxStack: number;
        private _itemStack: number;
        private _itemBaseValue: number;
        private _itemCategory: string;


        /*
         @description image, name, max stack, current stack, base value
        */
        constructor(imageString: string, name: string, stackable: number, baseValue: number, itemCategory: string) {
            super((imageString));
            //this.itemId =  
            this.itemName = name;
            this.itemMaxStack = stackable;
            this.itemStack = 0;
            this.itemBaseValue = baseValue;
            this.itemCategory = itemCategory;
            this.start();
        }

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
        get itemId(): number {
            return this._itemId;
        }

        set itemId(newState: number) {
            this._itemId = newState;
        }
        //////////////////////////////////////////
        get itemName(): string {
            return this._itemName;
        }

        set itemName(newState: string) {
            this._itemName = newState;
        }
        /////////////////////////////////////////
        get itemMaxStack(): number {
            return this._itemMaxStack;
        }

        set itemMaxStack(newState: number) {
            this._itemMaxStack = newState;
        }
        ////////////////////////////////////////
        get itemStack(): number {
            return this._itemStack;
        }

        set itemStack(newState: number) {
            this._itemStack = newState;
        }

        ////////////////////////////////////////
        get itemBaseValue(): number {
            return this._itemBaseValue;
        }

        set itemBaseValue(newState: number) {
            this._itemBaseValue = newState;
        }
        /////////////////////////////////////
        get itemCategory(): string {
            return this._itemCategory;
        }

        set itemCategory(newState: string) {
            this._itemCategory = newState;
        }
    }
}

/*Plan/////////////////////////////////////////////////////////////////////////////////////////

The player has an inventory that will store any items picked up with "e"
The player will also have active equips which are attached to hotkeys
the player will start with their respective gun. 

The gun has an array of bullets attached. 
If the player has bullets the gun can be reloaded. 
If the guns clip has ammo it can be fired.
When the player clicks the screen, a bullet is fired in the direction the player is facing. 

*/////////////////////////////////////////////////////////////////////////////////////////////