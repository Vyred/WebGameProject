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
        var ItemBasicRangedWeapon = /** @class */ (function (_super) {
            __extends(ItemBasicRangedWeapon, _super);
            /*
            *@description
            */
            function ItemBasicRangedWeapon(
                //super
                imageString, name, stackable, baseValue, 
                //instantiation
                _bulletsToInstantiate, 
                //spread
                initialBulletAccuracy, recoilTimer, baseSpread, baseSpreadChance, 
                //base stats/ammo
                baseReloadSpeed, baseFireRate, baseWeaponClip, currentClip, baseDamagePerPellet, projectileSpeed, projectileSize, localBulletSpawnPosition, currentProjectile, _ammoType, 
                //special stats
                baseProjectileType, piercing) {
                var _this = _super.call(this, imageString, name, stackable, baseValue) || this;
                ///////////////////////////////////////////////////////////////////////////////////
                //Parent descriptors
                _this.itemName = name;
                _this.itemMaxStack = stackable;
                _this.itemStack = 1;
                _this.itemBaseValue = baseValue;
                ///////////////////////////////////////////////////////////////////////////////////
                //Bullets
                _this._bulletCycler = 0;
                _this._bulletsToInstantiate = _bulletsToInstantiate;
                ///////////////////////////////////////////////////////////////////////////////////
                //spread
                _this.initialBulletAccuracy = initialBulletAccuracy;
                _this.recoilTimer = recoilTimer;
                _this.baseSpread = baseSpread;
                _this.baseSpreadChance = baseSpreadChance;
                ///////////////////////////////////////////////////////////////////////////////////
                //base stats
                _this.baseReloadSpeed = baseReloadSpeed;
                _this.baseFireRate = baseFireRate;
                _this.baseWeaponClip = baseWeaponClip;
                _this.currentClip = currentClip;
                _this.baseDamagePerPellet = baseDamagePerPellet;
                _this.projectileSpeed = projectileSpeed;
                _this.projectileSize = projectileSize;
                _this.localBulletSpawnPosition = localBulletSpawnPosition;
                _this.currentProjectile = currentProjectile;
                /////////////////////////////////////////////////////////////////////////////////
                _this.baseProjectileType = baseProjectileType;
                _this.piercing = piercing;
                _this.start();
                return _this;
            }
            /////////////////////////////////////////////////////////////////////////////////////
            //Instantiate projectile array
            //is it better to keep the image and move it on screen when needed, or delete it so it doesn't get drawn
            ////////////////////////////////////////////////////////////////////////////////////
            //Reload
            ////////////////////////////////////////////////////////////////////////////////////
            //Fire Bullet
            ItemBasicRangedWeapon.prototype.fireProjectile = function (movementEffectMultiplier) {
                // 1/(accuracy rating) the higher the accuracy rating the more likely the shot will be accurate. 
                //To continue, (1/f) * rotation possibility * currentMovementType(e.g Standing 0.3, walking 0.8, running 1.1, sprinting/dodging 1.5) 
                var projectileAngleRandomizer = Math.random() * (this._baseSpreadChance - 1) + 1;
                if (this._currentRecoilTimer <= 0.2) {
                    //recoiless
                    var effectOnRotation = (projectileAngleRandomizer * this._baseSpread) * movementEffectMultiplier * this._initialBulletAccuracy;
                }
                else if (this._currentRecoilTimer > 0.2) {
                    var effectOnRotation = (projectileAngleRandomizer * this._baseSpread) * movementEffectMultiplier;
                }
                this._currentRecoilTimer = this._recoilTimer;
                this._currentProjectile[this._bulletCycler];
            };
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "initialBulletAccuracy", {
                //////////////////////////////////////////////////////////////////////////
                //Equip item
                /////////////////////////////////////////////////////////////////////////
                //get setters
                //Weapon Spread
                get: function () {
                    return this._initialBulletAccuracy;
                },
                set: function (newState) {
                    this._initialBulletAccuracy = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "recoilTimer", {
                ///////////////////////////////////
                get: function () {
                    return this._recoilTimer;
                },
                set: function (newState) {
                    this._recoilTimer = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "currentRecoilTimer", {
                ///////////////////////////////////
                get: function () {
                    return this._currentRecoilTimer;
                },
                set: function (newState) {
                    this._currentRecoilTimer = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseSpread", {
                ///////////////////////////////////
                get: function () {
                    return this._baseSpread;
                },
                set: function (newState) {
                    this._baseSpread = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseSpreadChance", {
                ///////////////////////////////////////
                get: function () {
                    return this._baseSpreadChance;
                },
                set: function (newState) {
                    this._baseSpreadChance = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseReloadSpeed", {
                /////////////////////////////////////////////
                //weapon base stats
                //
                get: function () {
                    return this._baseReloadSpeed;
                },
                set: function (newState) {
                    this._baseReloadSpeed = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseFireRate", {
                ///////////////////////////////////////////////
                get: function () {
                    return this._baseFireRate;
                },
                set: function (newState) {
                    this._baseFireRate = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseWeaponClip", {
                ///////////////////////////////////////////////
                get: function () {
                    return this._baseWeaponClip;
                },
                set: function (newState) {
                    this._baseWeaponClip = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "currentClip", {
                ///////////////////////////////////////////////
                get: function () {
                    return this._currentClip;
                },
                set: function (newState) {
                    this._currentClip = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseDamagePerPellety", {
                ///////////////////////////////////////////////
                get: function () {
                    return this._baseDamagePerPellet;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseDamagePerPellet", {
                set: function (newState) {
                    this._baseDamagePerPellet = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "projectileSpeed", {
                //////////////////////////////////////////////////
                get: function () {
                    return this.projectileSpeed;
                },
                set: function (newState) {
                    this._projectileSpeed = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "projectileSize", {
                //////////////////////////////////////////////////
                get: function () {
                    return this._projectileSize;
                },
                set: function (newState) {
                    this._projectileSize = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "localBulletSpawnPosition", {
                ////////////////////////////////////////////////
                get: function () {
                    return this._localBulletSpawnPosition;
                },
                set: function (newState) {
                    this._localBulletSpawnPosition = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "currentProjectile", {
                ////////////////////////////////////////////////
                get: function () {
                    return this._currentProjectile;
                },
                set: function (newState) {
                    this._currentProjectile = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "ammoType", {
                //////////////////////////////////////////////////
                get: function () {
                    return this._ammoType;
                },
                set: function (newState) {
                    this._ammoType = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "baseProjectileType", {
                /////////////////////////////////////////////////
                //special stats
                //(Forward, Seeking, trap, thrown)
                get: function () {
                    return this._baseProjectileType;
                },
                set: function (newState) {
                    this._baseProjectileType = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "numberOfPellets", {
                ////////////////////////////////
                //each has a spread
                get: function () {
                    return this.numberOfPellets;
                },
                set: function (newState) {
                    this.numberOfPellets = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "pelletTypes", {
                /////////////////////////////////////
                // (regular, explosive, cyro, toxic, electric, incendiary)
                get: function () {
                    return this._pelletTypes;
                },
                set: function (newState) {
                    this._pelletTypes = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "projectileEffects", {
                ////////////////////////////////////
                //(Knockback, path effect) should really be a list
                get: function () {
                    return this._projectileEffects;
                },
                set: function (newState) {
                    this._projectileEffects = newState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ItemBasicRangedWeapon.prototype, "piercing", {
                ///////////////////////////////////////
                //(how far it can pierce
                get: function () {
                    return this._piercing;
                },
                set: function (newState) {
                    this._piercing = newState;
                },
                enumerable: true,
                configurable: true
            });
            return ItemBasicRangedWeapon;
        }(objects.Items.BaseItem));
        Items.ItemBasicRangedWeapon = ItemBasicRangedWeapon;
    })(Items = objects.Items || (objects.Items = {}));
})(objects || (objects = {}));
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
    3. One number, max rotation and all angles have an equal chance
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
//# sourceMappingURL=ItemBasicRangedWeapon.js.map