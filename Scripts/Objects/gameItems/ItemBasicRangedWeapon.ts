module objects.Items {

    //every object will have an id and a name and quantity if stackable
    //All items should by default have a visual at least, if they are dropped

    //cloud split up the gun and magazine into two different classes
    export class ItemBasicRangedWeapon extends objects.Items.BaseItem {

        //Weapon Spread
        private _initialBulletAccuracy: number;
        private _recoilTimer: number;
        private _currentRecoilTimer: number;
        private _baseSpread: number;
        private _baseSpreadChance: number

        //weapon base stats
        private _baseReloadSpeed: number;
        private _baseFireRate: number;
        private _baseWeaponClip: number;
        private _currentClip: number;

        //ammunition
        private _baseDamagePerPellet: number;
        
        private _projectileSpeed: number;
        private _projectileSize: number;

        private _localBulletSpawnPosition: Vector2;
        private _currentProjectile: number;
        private _ammoType: string;
        //special stats //not all of this is needed 
        private _baseProjectileType: string;//(forward, seeking, trap, thrown, laser)//forward projectiles--
        private _numberOfPellets: number; //each has a spread--the number of bullets in this class as opposed to the ammo class opens opportunity for double/triple fire buffs--
        //private _pelletTypes: string;// (regular, explosive, cyro, toxic, electric, incendiary)//--
        private _projectileEffects: number; //(Knockback, path effect, regular, explosive, cyro, toxic, electric, incendiary)//this may need to be an array--general buff to all bullets fired
        private _piercing: number; //(how far it can pierce)

        //the bullet array, different guns might need different array sizes 
        private _bulletCycler: number;
        private _bulletsToInstantiate: number;
        private _bulletArray: objects.Items.ItemAmmo[];


        /*
        *@description 
        */
        constructor(
            //super
            imageString: string, name: string, stackable: number, baseValue: number, itemCategory: string,
            //instantiation
            _bulletsToInstantiate: number,
            //spread
            initialBulletAccuracy: number, recoilTimer: number, baseSpread: number,
            baseSpreadChance: number,
            //base stats/ammo
            baseReloadSpeed: number, baseFireRate: number, baseWeaponClip: number,
            currentClip: number, baseDamagePerPellet: number, projectileSpeed: number,
            projectileSize: number, localBulletSpawnPosition: Vector2, currentProjectile: number,
            _ammoType: string,
            //special stats
            baseProjectileType: string, piercing: number


        ) {
            super(imageString, name, stackable, baseValue, itemCategory);
            ///////////////////////////////////////////////////////////////////////////////////
            //Parent descriptors
            this.itemName = name;
            this.itemMaxStack = stackable;
            this.itemStack = 1;
            this.itemBaseValue = baseValue;
            ///////////////////////////////////////////////////////////////////////////////////
            //Bullets
            this._bulletCycler = 0;
            this._bulletsToInstantiate = _bulletsToInstantiate;
            ///////////////////////////////////////////////////////////////////////////////////
            //spread
            this.initialBulletAccuracy = initialBulletAccuracy;
            this.recoilTimer = recoilTimer;
            this.baseSpread = baseSpread;
            this.baseSpreadChance = baseSpreadChance;
            ///////////////////////////////////////////////////////////////////////////////////
            //base stats
            this.baseReloadSpeed = baseReloadSpeed;
            this.baseFireRate = baseFireRate;
            this.baseWeaponClip = baseWeaponClip;
            this.currentClip = currentClip;
            this.baseDamagePerPellet = baseDamagePerPellet;
            this.projectileSpeed = projectileSpeed;
            this.projectileSize = projectileSize;
            this.localBulletSpawnPosition = localBulletSpawnPosition;
            this.currentProjectile = currentProjectile;
            /////////////////////////////////////////////////////////////////////////////////
            this.baseProjectileType = baseProjectileType;
            this.piercing = piercing;

            this.start();
        }

        public Start(): void {
            this.enabled = false;
        }

        /////////////////////////////////////////////////////////////////////////////////
        //Weapon actions
        public rightClickAction(){

        }

        public leftClickAction(){
            this.fireProjectile(1);
        }


        /////////////////////////////////////////////////////////////////////////////////////
        //Instantiate projectile array
        //Is it better to keep the image and move it on screen when needed? Or delete it so it doesn't get drawn?
        //There are several ways to do this. 
        //-The first is at runtime create the bullet and fire it. performance issue as the weapon is fired. Very bad because it may add choppy gameplay
        //-The second is creating a pool of bullets of each type and have them move to screen and fire. performance issue in that too many objects may be drawn. 
        //-The third is creating a pool of bullets for each weapon-performance issue in that too many objects may be drawn
        //there is an optimal way to calculate the length of this array, let's not get into thatp. 
        private bulletsInstantiation() : void{
            for (let instantiationCounter = 0; this._bulletsToInstantiate > this._bulletArray.length; instantiationCounter++){
                if (this._ammoType == "pistol" ){
                    let idk = new objects.Items.projectiles.projectile9mm();
                   this._bulletArray[instantiationCounter] = idk.projectile9mmAmmo; //forwardMovingProjectile(this._bulletArray[instantiationCounter].speed, this );
                }
               
            }
        }
       

        ////////////////////////////////////////////////////////////////////////////////////
        //Reload


        ////////////////////////////////////////////////////////////////////////////////////
        //Fire Bullet
        public fireProjectile(movementEffectMultiplier: number) {
    
            this._currentProjectile[this._bulletCycler].rotaion = this.randomSpreadShot(1, this.rotation);
            this._currentProjectile[this._bulletCycler].position = this.position; 
            this._currentProjectile[this._bulletCycler].launchProjectile = true;
            this._bulletCycler++;

        }
        //////////////////////////////////////////////////////////////////
        //spread shot
        public randomSpreadShot(movementEffectMultiplier: number, inputRotaion: number): number {
            // 1/(accuracy rating) the higher the accuracy rating the more likely the shot will be accurate. 
            //To continue, (1/f) * rotation possibility * currentMovementType(e.g Standing 0.3, walking 0.8, running 1.1, sprinting/dodging 1.5) 

            let projectileAngleRandomizer = Math.random() * (this._baseSpreadChance - 1) + 1;
            let positiveOrNegative = Math.round(Math.random());
            let effectOnRotation = 0;
            if (this._currentRecoilTimer <= 0.2) {
                //recoiless//makes weapons more accurate for the first shot. 
                //-The recoil should last no longer than 2 seconds
                //This might be enhanced to by incrementally increased instead 
                let effectOnRotation = (projectileAngleRandomizer * this._baseSpread) * movementEffectMultiplier * this._initialBulletAccuracy;
            } else if (this._currentRecoilTimer > 0.2) {
                let effectOnRotation = (projectileAngleRandomizer * this._baseSpread) * movementEffectMultiplier;
            }
            this._currentRecoilTimer = this._recoilTimer;

           if (positiveOrNegative == 0){
             effectOnRotation * -1;
           }
            return (effectOnRotation + inputRotaion);
        }
        //////////////////////////////////////////////////////////////////////////
        //Equip item


        /////////////////////////////////////////////////////////////////////////
        //get setters
        //Weapon Spread
        get initialBulletAccuracy(): number {
            return this._initialBulletAccuracy;
        }
        set initialBulletAccuracy(newState: number) {
            this._initialBulletAccuracy = newState;
        }
        ///////////////////////////////////
        get recoilTimer(): number {
            return this._recoilTimer;
        }
        set recoilTimer(newState: number) {
            this._recoilTimer = newState;
        }
        ///////////////////////////////////
        get currentRecoilTimer(): number {
            return this._currentRecoilTimer;
        }
        set currentRecoilTimer(newState: number) {
            this._currentRecoilTimer = newState;
        }

        ///////////////////////////////////
        get baseSpread(): number {
            return this._baseSpread;
        }
        set baseSpread(newState: number) {
            this._baseSpread = newState;
        }
        ///////////////////////////////////////
        get baseSpreadChance(): number {
            return this._baseSpreadChance;
        }
        set baseSpreadChance(newState: number) {
            this._baseSpreadChance = newState;
        }
        /////////////////////////////////////////////
        //weapon base stats
        //
        get baseReloadSpeed(): number {
            return this._baseReloadSpeed;
        }
        set baseReloadSpeed(newState: number) {
            this._baseReloadSpeed = newState;
        }
        ///////////////////////////////////////////////
        get baseFireRate(): number {
            return this._baseFireRate;
        }
        set baseFireRate(newState: number) {
            this._baseFireRate = newState;
        }
        ///////////////////////////////////////////////
        get baseWeaponClip(): number {
            return this._baseWeaponClip;
        }
        set baseWeaponClip(newState: number) {
            this._baseWeaponClip = newState;
        }
        ///////////////////////////////////////////////
        get currentClip(): number {
            return this._currentClip;
        }
        set currentClip(newState: number) {
            this._currentClip = newState;
        }
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
        ////////////////////////////////////////////////
        get localBulletSpawnPosition(): Vector2 {
            return this._localBulletSpawnPosition;
        }
        set localBulletSpawnPosition(newState: Vector2) {
            this._localBulletSpawnPosition = newState;
        }
        ////////////////////////////////////////////////
        get currentProjectile(): number {
            return this._currentProjectile;
        }
        set currentProjectile(newState: number) {
            this._currentProjectile = newState;
        }
        //////////////////////////////////////////////////
        get ammoType(): string {
            return this._ammoType;
        }
        set ammoType(newState: string) {
            this._ammoType = newState;
        }
        /////////////////////////////////////////////////
        //special stats
        //(Forward, Seeking, trap, thrown)
        get baseProjectileType(): string {
            return this._baseProjectileType;
        }
        set baseProjectileType(newState: string) {
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
        //get pelletTypes(): string {
        //    return this._pelletTypes;
        //}
        //set pelletTypes(newState: string) {
        //    this._pelletTypes = newState;
        //}
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

/*
unlike other items, weapons are actively equipped in the inventory menu
 and automatically if the weapon slots haven't yet been filled. These are 
 bound to the hotkeys 1-9

 The other thing to do is give weapons to enemies. Enemies automatically use
  their weapons when they come into comftable range by calling the fire
  button of the weapon

  Each weapon will have the following stats: 

  ///Special stats//////////////////////////////////////////////////////
  -Base projectile type (Forward, Seeking, trap, thrown)
  -Number of pellets
  -Pellet types (regular, explosive, cyro, toxic, electric, incendiary)
  -Projectile effects(Knockback, path effect)
  -Piercing

  ///Regular Stats///////////////////////////////////////////////////
  -Base reload speed
  -Base fire rate
  -Base damage per pellet
  -Projectile speed
  -projectile size 

  ///Spread//////////////////////////////////////////////////////////
  This can be done a couple ways:
    1. three numbers. Regular shot spread, bad shot spread, bad shot frequency. 
        this can be calculated the clip is reloaded or when the bullet is fired
    2. Two numbers or three, the Max rotation and the frequncy of high severity misses
    3. One number, max rotation and all angles have an equal chance or diminishing returns
    4. Four numbers,
        -Good Accuracy: (simple, lowest rotaion 0 is best case)
        -RegularAccuracy: (simple, regular rotation 5 is decent)
        -WorstCaseAccuracy: (simple max rotation 90 is atrocious)
        -BestCaseFrequency
        -WorstCaseFrequency: 
        (e.g if the number is 1000 then 1/1000 times the shot is a bad one
            for greater precision
        rand between 0 and 100
         if (rand > ){

        }
        )
    one rand number. if the rand number is
        high
    

  -Base Spread(Influences shots if the Recoil timer hasn't yet been passed)
  -Base Accuracy(Influences first shot)
  -Base Recoil(Influences first shot timer)

each weapon is spawned with these values. much of the properites are reflected in the 
fire method and upon 

*/