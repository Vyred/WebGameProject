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
    var ButtonWithText = /** @class */ (function (_super) {
        __extends(ButtonWithText, _super);
        //CONSTRUCTOR
        function ButtonWithText(x, y, labelString, fontSize, fontFamily, fontColour, isCentered) {
            var _this = 
            //"bold 86px Arial" Courier
            //labelString, (fontSize + " " + fontFamily), fontColour
            _super.call(this, labelString, "bold " + fontSize + " Courier", fontColour) || this;
            _this.labelString = labelString;
            _this.fontSize = fontSize;
            _this.fontFamily = fontFamily;
            _this.fontColour = fontColour;
            _this.x = x;
            _this.y = y;
            _this.width = 150;
            _this.height = 50;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.on("mouseover", _this.overButton, _this);
            _this.on("mouseout", _this.outButton, _this);
            if (isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            return _this;
        }
        // PRIVATE METHODS
        // Event Handler for mouse over
        ButtonWithText.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.6;
        };
        // Event Handler for mouse out
        ButtonWithText.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return ButtonWithText;
    }(createjs.Text));
    objects.ButtonWithText = ButtonWithText;
})(objects || (objects = {}));
//# sourceMappingURL=buttonWithText.js.map