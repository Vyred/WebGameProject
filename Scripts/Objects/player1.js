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
    var KEYCODE_LEFT;
    var KEYCODE_RIGHT;
    var KEYCODE_UP;
    var KEYCODE_DOWN;
    var SPEED;
    var leftArrow;
    var rightArrow;
    var upArrow;
    var downArrow;
    var Player1 = /** @class */ (function (_super) {
        __extends(Player1, _super);
        //window.onkeyup = keyUpHandler;
        //window.onkeydown = keyDownHandler;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        function Player1(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.SPEED = 10;
            _this.start();
            return _this;
        }
        Player1.prototype._checkBounds = function () {
            // checkbounds to stop player from going outside
            // check right bounds
            if (this.x >= (core.canvas.clientWidth - (this.width * 0.5))) {
                this.x = (core.canvas.clientWidth - (this.width * 0.5));
            }
            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
            // check right bounds
            if (this.y >= (core.canvas.clientHeight - (this.height * 0.5))) {
                this.y = (core.canvas.clientHeight - (this.height * 0.5));
            }
            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        };
        //start
        Player1.prototype.start = function () {
            this.x = core.canvas.clientWidth / 2;
            this.y = core.canvas.clientHeight / 2;
            KEYCODE_LEFT = 65;
            KEYCODE_RIGHT = 68;
            KEYCODE_UP = 87;
            KEYCODE_DOWN = 83;
            leftArrow = false;
            rightArrow = false;
            upArrow = false;
            downArrow = false;
            document.onkeydown = this.keyDownHandler;
            document.onkeyup = this.keyUpHandler;
        };
        //update
        Player1.prototype.update = function () {
            // player to follow mouse
            //
            var angleInRadians = Math.atan2(core.stage.mouseY - this.y, core.stage.mouseX - this.x);
            var angleInDegrees = angleInRadians * (180 / Math.PI);
            this.rotation = angleInDegrees;
            console.log("rot:" + this.rotation);
            objects.Vector2.forward(this.rotation);
            if (leftArrow) {
                this.x -= this.SPEED;
            }
            if (rightArrow) {
                this.x += this.SPEED;
            }
            if (upArrow) {
                this.y -= this.SPEED;
            }
            if (downArrow) {
                this.y += this.SPEED;
            }
            this._checkBounds();
            var retVect2 = objects.Vector2.forward(this.rotation);
            this.x += retVect2.x; //this.SPEED/5;
            this.y += retVect2.y; //this.SPEED/5;
        };
        Player1.prototype.keyDownHandler = function (event) {
            switch (event.keyCode) {
                case KEYCODE_LEFT:
                    {
                        leftArrow = true;
                        console.log("key down");
                    }
                    break; //this.leftArrow = true; break;
                case KEYCODE_RIGHT:
                    {
                        rightArrow = true;
                    }
                    break;
                case KEYCODE_UP:
                    {
                        upArrow = true;
                    }
                    break;
                case KEYCODE_DOWN:
                    {
                        downArrow = true;
                    }
                    break;
                default:
                    {
                        console.log(event.keyCode);
                    }
                    break;
            }
            move();
        };
        Player1.prototype.keyUpHandler = function (event) {
            switch (event.keyCode) {
                case KEYCODE_LEFT:
                    {
                        leftArrow = false;
                    }
                    break;
                case KEYCODE_RIGHT:
                    {
                        rightArrow = false;
                    }
                    break;
                case KEYCODE_UP:
                    {
                        upArrow = false;
                    }
                    break;
                case KEYCODE_DOWN:
                    {
                        downArrow = false;
                    }
                    break;
            }
        };
        return Player1;
    }(objects.GameObject));
    objects.Player1 = Player1;
    function move() {
        //console.log("key down move hj:"+this.KEYCODE_DOWN);
        if (this.leftArrow) {
            this.x -= this.SPEED;
        }
        if (this.rightArrow) {
            this.x += this.SPEED;
        }
        if (this.upArrow) {
            this.y -= this.SPEED;
        }
        if (this.downArrow) {
            this.y += this.SPEED;
        }
    }
})(objects || (objects = {}));
//# sourceMappingURL=player1.js.map