var _this = this;
var mytest = function () {
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
            var _this = this;
            this.length = 9;
            this.breadth = 10;
            this.perimeter = function () {
                console.log("from perimeter: ", _this);
                return 2 * (_this.length + _this.breadth);
            };
        }
        Rectangle.prototype.area = function () {
            console.log("from area: ", this);
            this.perimeter();
            return this.length * this.breadth;
        };
        return Rectangle;
    }());
    console.log(_this); //
    var rect = new Rectangle();
    rect.area();
    // rect.perimeter();
};
mytest();
