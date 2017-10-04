module objects.physics {

    export abstract class Projectile {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy: number;
        private _dx: number;

        private currentSpeed: number;

        private _speed: number;
        private _startingRotation : number;
        private _startingPosition : Vector2;

        
        private direction: number;

        //@description Image, Speed, Starting Position, Starting Rotation
    

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        //private _purgatory():void {
        //}

        private _reset(): void {

            //this._dy = Math.floor((Math.random() * 5) + 5); // vertical speed
            //this._dx = Math.floor((Math.random() * 4) - 2); // horizontal drift

            //this.y = -this.height;

            // get a random x location
            //this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
      
        }

        /**
         * This method checks if the object has reached its boundaries
        **/
        public _checkBounds(itemGameObject : objects.GameObject): boolean {
            if (itemGameObject.y >= (config.Screen.HEIGHT * 2 + (itemGameObject.height * 0.5))) {
                return false
            }
            if (itemGameObject.y <= (0 - (config.Screen.HEIGHT) + (itemGameObject.height * 0.5))) {
                return false
            }
            if (itemGameObject.x >= (config.Screen.WIDTH * 2 + (itemGameObject.width * 0.5))) {
                return false;
            }
            if (itemGameObject.x <= (0 - (config.Screen.WIDTH) + (itemGameObject.width * 0.5))) {
                return false
            }
            return true;
        }


        //in case the weapon is either timed (grenade)
        private _checkTimer() {

        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        //////////////////////////////////////////////////////
        //whenever this is called, the used ammo objects will 
        //be activated
        public abstract projectileAction(speed: number, itemGameObject:objects.GameObject): void;



        //public update(): void {
            //this.position = new Vector2(this.x, this.y);
            // this.y += this._dy;
            //this.x += this._dx;
           // if (this.enabled == true) {
                //this.projectileAction();
             //   this._checkBounds();
          //  }
        //}

        ///////////////////////////////////////////////
        //Get Setters
        get speed(): number {
            return this._speed;
        }

        set speed(newState: number) {
            this._speed = newState;
        }
        ////////////////////////////////////////////
        get startingPosition(): Vector2 {
            return this._startingPosition;
        }

        set startingPosition(newState: Vector2) {
            this._startingPosition = newState;
        }
        /////////////////////////////////////////////
        get startingRotation(): number {
            return this._startingRotation;
        }

        set startingRotation(newState: number) {
            this._startingRotation = newState;
        }
        ///////////////////////////////////////////////
    }
}

/* notes

all actual physics like missle arching or moving the object
towards a specific direction should be done in a class related
to the vector/gameobject objects
///////////////////////
There are several ways this structure can be done:
1. we can create an instance of an ammo class here and then
    use it
2. the ammo class inherets from the projectile class(only if
    the projectile can be a child of the parent projectile class)
3. do it all in one class-messy
//////////////////////
what can be done:
-player clicks
-----charged weapons (energy, bows, melee, grenade)
-----Specific position (e.g grenade, air stike)
-bullet spawns at weapon barrels position with possible delay
--bullet applies it's on fire effect
-bullet moves in the specified way
--it moves at the specfied speed
--it moves in the spread direction
--it may leave a trail
-bullet hits target. 
--the bullet has an id and the hit object has a pierce resistance
--the bullets on hit effects are applied has on hit
--if the resistance is too high the bullet does it's damage and dies
-the bullet prepares despawn
--on death effects are activated
--sent to purgatory then disabled
///////////////////////////////////////////////////
this class and the ammo class are very similar. 
this class is to be focused on the projectile and it's 
movement. The ammo class, which should be focused on the 
stats of the projectile which are to be interpreted by each
projectile child class

-the weapon fires the projectile and applies the stats extra stats
-the weapon fires the projectile based on the used ammo
*/