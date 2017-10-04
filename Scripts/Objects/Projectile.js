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
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        //@description Image, Speed, Starting Position, Starting Rotation
        function Projectile(imageString, startingRotation, startingPosition, speed) {
            var _this = _super.call(this, imageString) || this;
            _this.speed = speed;
            _this.startingPosition = startingPosition;
            _this.startingRotation = startingRotation;
            _this.start();
            return _this;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        //private _purgatory():void {
        //}
        Projectile.prototype._reset = function () {
            //this._dy = Math.floor((Math.random() * 5) + 5); // vertical speed
            //this._dx = Math.floor((Math.random() * 4) - 2); // horizontal drift
            //this.y = -this.height;
            // get a random x location
            //this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
        **/
        Projectile.prototype._checkBounds = function () {
            if (this.y >= (config.Screen.HEIGHT * 2 + (this.height * 0.5))) {
                this.enabled = false;
            }
            if (this.y <= (0 - (config.Screen.HEIGHT) + (this.height * 0.5))) {
                this.enabled = false;
            }
            if (this.x >= (config.Screen.WIDTH * 2 + (this.width * 0.5))) {
                this.enabled = false;
            }
            if (this.x <= (0 - (config.Screen.WIDTH) + (this.width * 0.5))) {
                this.enabled = false;
            }
        };
        //in case the weapon is either timed (grenade)
        Projectile.prototype._checkTimer = function () {
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        Projectile.prototype.start = function () {
            this.enabled = true;
            //this._reset();
        };
        Projectile.prototype.update = function () {
            //this.position = new Vector2(this.x, this.y);
            // this.y += this._dy;
            //this.x += this._dx;
            if (this.enabled == true) {
                //this.projectileAction();
                this._checkBounds();
            }
        };
        Object.defineProperty(Projectile.prototype, "speed", {
            ///////////////////////////////////////////////
            //Get Setters
            get: function () {
                return this._speed;
            },
            set: function (newState) {
                this._speed = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Projectile.prototype, "startingPosition", {
            ////////////////////////////////////////////
            get: function () {
                return this._startingPosition;
            },
            set: function (newState) {
                this._startingPosition = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Projectile.prototype, "startingRotation", {
            /////////////////////////////////////////////
            get: function () {
                return this._startingRotation;
            },
            set: function (newState) {
                this._startingRotation = newState;
            },
            enumerable: true,
            configurable: true
        });
        return Projectile;
    }(objects.GameObject));
    objects.Projectile = Projectile;
})(objects || (objects = {}));
//# sourceMappingURL=Projectile.js.map