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
    var forwardMovingProjectile = /** @class */ (function (_super) {
        __extends(forwardMovingProjectile, _super);
        /*
        @description image, speed, starting position, starting rotation,
        */
        function forwardMovingProjectile(imageString, startingRotation, startingPosition, speed) {
            var _this = _super.call(this, imageString, speed, startingPosition, startingRotation) || this;
            _this.start();
            return _this;
        }
        forwardMovingProjectile.prototype.update = function () {
            if (this.enabled == true) {
                this.projectileAction(this.speed);
            }
        };
        forwardMovingProjectile.prototype.projectileTimer = function () {
            //after 3 seconds the bullet should go back to purgatory
        };
        forwardMovingProjectile.prototype.projectileAction = function (speed) {
            this.straightFlying(speed);
        };
        //makes the projectile move forward
        forwardMovingProjectile.prototype.straightFlying = function (speed) {
            var retVect2 = objects.Vector2.forward(this.rotation);
            this.x += retVect2.x * speed;
            this.y += retVect2.y * speed;
        };
        return forwardMovingProjectile;
    }(objects.Projectile));
    objects.forwardMovingProjectile = forwardMovingProjectile;
})(objects || (objects = {}));
//# sourceMappingURL=forwardMovingProjectile.js.map