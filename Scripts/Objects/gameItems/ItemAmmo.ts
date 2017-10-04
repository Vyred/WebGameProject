//Possible 
/*
Generic: Sniper Rifle, Pistol, Sub machine gun, Shotgun, AR, Special Ammo, Heavy Ammo


https://www.peakprosperity.com/wsidblog/81183/understanding-ammunition
Real: 
0.50 BMG
5.56x45mm is 5.56mm wide and 45mm long
9x19mm cartridge is 9mm wide and 19mm long
Shotshells are measured in “gauge”, with a lower number being a larger diameter.  Typical 12 gauge shells are 70mm long, which works out to be 2½”, but offered in a 3” magnum as well
12 gauge Shotshell
8mm (7.9mm) Mauser
7.62x54mm Russian (Notice that this cartridge does not have a “rim” at the base)
7.62x51mm or .308 Winchester
7.62x39mm Soviet
5.45x39mm Soviet
5.56x45mm NATO or .223 Remington
.44 Magnum (Notice that this cartridge does not have a “rim” at the base)
.45 Automatic Colt Pistol (ACP)
9x19 Para. (Also known as: Luger, Parabellum, and commonly known as simply “9mm,” although there are other 9mm’s which have different lengths.)
.22 Long Rifle
50 AE
*/

//Bullets have a velocity and certain degree of piercing



module objects.Items {

    //every object will have an id and a name and quantity if stackable
    //All items should by default have a visual at least, if they are dropped
    export class ItemAmmo extends objects.Items.BaseItem {

        //private _width:number;
        //private _height:number;
        //private _name:string;
        //private _position:Vector2;
        //private _isColliding:boolean;
        //private _enabled: boolean;
        //public sound:createjs.AbstractSoundInstance;
        //private _itemId: number;
        //private _itemName: string;
        //private itemDesription: string;
        //private _itemMaxStack: number;
        //private _itemStack: number;
        //private _itemBaseValue: number;
        //private _itemCategory: string;


        /*
         @description image, name, max stack, current stack, base value
        */
        private _projectileSpeed: number;
        private _projectileSize: number;

        private _baseDamagePerPellet: number;
        private _baseProjectileType: objects.physics.Projectile;//(forward, seeking, trap, thrown, laser)//forward projectiles
        private _numberOfPellets: number; //each has a spread
        private _pelletTypes: string;// (regular, explosive, cyro, toxic, electric, incendiary)
        private _projectileEffects: number; //(Knockback, path effect)
        private _piercing: number; //(how far it can pierce e.g 0 is hit and no pierce and 1 is pierce 1 time)

        private _fire : boolean;

        constructor(
            //super
            imageString: string, name: string, stackable: number, baseValue: number, itemCategory: string,
            //properties
            projectileSpeed: number, projectileSize: number, baseProjectileType: objects.physics.Projectile,
            numberOfPellets: number, pelletTypes: string, projectileEffects: number,
            piercing: number, baseDamagePerPellet: number

        ) {
            super(imageString, name, stackable, baseValue, itemCategory);
           
            this.projectileSpeed = projectileSpeed;
            this.projectileSize = projectileSize;
            
            this.baseDamagePerPellet = baseDamagePerPellet;
            this.numberOfPellets = numberOfPellets;
            this.pelletTypes = pelletTypes;//!

            this.baseProjectileType = baseProjectileType;
            this.piercing = piercing;
            this._fire = false;
        }


        ////////////////////////////////////////////////////
        //Launch the projectile
        public lauchProjectile(){
            this._fire = true;
            while (this._fire == true){
                this._baseProjectileType.projectileAction(this.projectileSpeed, this)
                if (this._baseProjectileType._checkBounds(this) == false){
                    this._fire = false;
                    this.enabled = false;
                }
            }
        }
        /////////////////////////////////////////////////
        //get setters
        ///////////////////////////////////////////////
        get baseDamagePerPellet(): number {
            return this._baseDamagePerPellet;
        }
        set baseDamagePerPellet(newState: number) {
            this._baseDamagePerPellet = newState;
        }
        //////////////////////////////////////////////////
        get projectileSpeed(): number {
            return this.projectileSpeed;
        }
        set projectileSpeed(newState: number) {
            this._projectileSpeed = newState;
        }
        //////////////////////////////////////////////////
        get projectileSize(): number {
            return this._projectileSize;
        }
        set projectileSize(newState: number) {
            this._projectileSize = newState;
        }
        /////////////////////////////////////////////////
        //special stats
        //(Forward, Seeking, trap, thrown)
        get baseProjectileType():  objects.physics.Projectile {
            return this._baseProjectileType;
        }
        set baseProjectileType(newState:  objects.physics.Projectile) {
            this._baseProjectileType = newState;
        }
        ////////////////////////////////
        //each has a spread
        get numberOfPellets(): number {
            return this.numberOfPellets;
        }
        set numberOfPellets(newState: number) {
            this.numberOfPellets = newState;
        }
        /////////////////////////////////////
        // (regular, explosive, cyro, toxic, electric, incendiary)
        get pelletTypes(): string {
            return this._pelletTypes;
        }
        set pelletTypes(newState: string) {
            this._pelletTypes = newState;
        }
        ////////////////////////////////////
        //(Knockback, path effect) should really be a list
        get projectileEffects(): number {
            return this._projectileEffects;
        }
        set projectileEffects(newState: number) {
            this._projectileEffects = newState;
        }
        ///////////////////////////////////////
        //(how far it can pierce
        get piercing(): number {
            return this._piercing;
        }
        set piercing(newState: number) {
            this._piercing = newState;
        }
    }
}