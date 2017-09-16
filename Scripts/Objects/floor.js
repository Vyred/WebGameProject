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
    var Floor = /** @class */ (function (_super) {
        __extends(Floor, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        function Floor(imageString) {
            var _this = _super.call(this, core.assets.getResult(imageString)) || this;
            _this.start();
            return _this;
        }
        Floor.prototype._reset = function () {
            this.y = 0;
        };
        Floor.prototype._checkBounds = function () {
            if (this.y > 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        Floor.prototype.start = function () {
            console.log("Floor start");
            this._reset();
            //this._dy = 5; // 5px per frame down
        };
        Floor.prototype.update = function () {
            //this.y += this._dy;
            this._checkBounds();
        };
        return Floor;
    }(createjs.Bitmap));
    objects.Floor = Floor;
})(objects || (objects = {}));
//# sourceMappingURL=floor.js.map