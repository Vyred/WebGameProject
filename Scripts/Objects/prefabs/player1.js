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
    var KEYCODE_SHIFT;
    var _gameState;
    var leftArrow;
    var rightArrow;
    var upArrow;
    var downArrow;
    var leftShift;
    var Player1 = /** @class */ (function (_super) {
        __extends(Player1, _super);
        //private _gameState : string = "play";
        //window.onkeyup = keyUpHandler;
        //window.onkeydown = keyDownHandler;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        function Player1(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.regSpeed = 4;
            _this.currentSPEED = 4;
            _this.maxSPEED = 10;
            _this.playerContainer = new createjs.Container();
            _this.playerContainer.addChild();
            _this.playerContainer.x = _this.x;
            _this.playerContainer.y = _this.y;
            _this.maxStamina = 100;
            _this.currentStamina = _this.maxStamina;
            _this.start();
            return _this;
        }
        //held weapon/equipment/weapon type
        //
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
            if (this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
            }
        };
        //start
        Player1.prototype.start = function () {
            this.x = core.canvas.clientWidth / 2;
            this.y = core.canvas.clientHeight / 2;
            this.gameState = "play";
            KEYCODE_LEFT = 65;
            KEYCODE_RIGHT = 68;
            KEYCODE_UP = 87;
            KEYCODE_DOWN = 83;
            KEYCODE_SHIFT = 16;
            leftArrow = false;
            rightArrow = false;
            upArrow = false;
            downArrow = false;
            leftShift = false;
            document.onkeydown = this.keyDownHandler;
            document.onkeyup = this.keyUpHandler;
            //document.onmousedown
        };
        //update
        Player1.prototype.update = function () {
            // player follow mouse
            var angleInRadians = Math.atan2(core.stage.mouseY - this.y, core.stage.mouseX - this.x);
            var angleInDegrees = angleInRadians * (180 / Math.PI);
            this.rotation = angleInDegrees;
            //console.log("rot:" + this.rotation );
            //stamina/sprinting
            if (this.currentStamina >= 0 && leftShift && (leftArrow || rightArrow || upArrow || downArrow)) {
                console.log("working?");
                this.currentStamina -= 1;
                this.currentSPEED = this.maxSPEED;
            }
            else {
                this.currentSPEED = this.regSpeed;
                leftShift = false;
            }
            if (this.currentStamina < this.maxStamina) {
                this.currentStamina += 0.333;
                //console.log("stamina:" + this.currentStamina + "/" + this.maxStamina);
            }
            //move
            if (leftArrow) {
                this.x -= this.currentSPEED;
            }
            if (rightArrow) {
                this.x += this.currentSPEED;
            }
            if (upArrow) {
                this.y -= this.currentSPEED;
            }
            if (downArrow) {
                this.y += this.currentSPEED;
            }
            //move();
            this._checkBounds();
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
                case KEYCODE_SHIFT:
                    {
                        leftShift = true;
                    }
                    break;
                case 80:
                    {
                        console.log("p pressed" + _gameState);
                        if (_gameState == "pause") {
                            _gameState = "play";
                            console.log("p pressed play");
                        }
                        else if (_gameState == "play") {
                            _gameState = "pause";
                            console.log("p pressed pause");
                        }
                    }
                    break;
                default:
                    {
                        console.log(event.keyCode);
                    }
                    break;
            }
            //move();
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
                case KEYCODE_SHIFT:
                    {
                        leftShift = false;
                    }
                    break;
            }
        };
        Object.defineProperty(Player1.prototype, "gameState", {
            ////////////////////////////////////////
            ////get setters/////////////////////////
            get: function () {
                return _gameState;
            },
            set: function (newState) {
                _gameState = newState;
            },
            enumerable: true,
            configurable: true
        });
        return Player1;
    }(objects.GameObject));
    objects.Player1 = Player1;
    function move() {
        //console.log("key down move hj:"+this.KEYCODE_DOWN);
        if (this.leftArrow) {
            this.x -= this.currentSPEED;
        }
        if (this.rightArrow) {
            this.x += this.currentSPEED;
        }
        if (this.upArrow) {
            this.y -= this.currentSPEED;
        }
        if (this.downArrow) {
            this.y += this.currentSPEED;
        }
    }
})(objects || (objects = {}));
//# sourceMappingURL=player1.js.map