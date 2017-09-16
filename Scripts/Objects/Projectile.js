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
        function Projectile(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.start();
            return _this;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        //private _purgatory():void {
        //    this.x = config.Screen.WIDTH * 666;
        //    this.y = config.Screen.HEIGHT * 666;
        //    this.currentSpeed = 0;
        //     
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
            if (this.y >= (config.Screen.HEIGHT * 1.5 + (this.height * 0.5))) {
                this._reset();
            }
            if (this.y <= (0 - (config.Screen.HEIGHT * 0.5) + (this.height * 0.5))) {
                this._reset();
            }
            if (this.x >= (config.Screen.WIDTH * 1.5 + (this.width * 0.5))) {
                this._reset();
            }
            if (this.x <= (0 - (config.Screen.WIDTH * 0.5) + (this.width * 0.5))) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        Projectile.prototype.start = function () {
            this._reset();
        };
        /////////////////////////////
        //Straight flying Projectile
        /////////////////////////////
        Projectile.prototype.straightFlying = function () {
            this.direction = this.rotation;
        };
        Projectile.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        };
        return Projectile;
    }(objects.GameObject));
    objects.Projectile = Projectile;
})(objects || (objects = {}));
//# sourceMappingURL=Projectile.js.map