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
        function forwardMovingProjectile(imageString, startingRotation, startingPosition) {
            var _this = _super.call(this, imageString, startingRotation, startingPosition) || this;
            _this.start();
            return _this;
        }
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