"use strict";
// 클래스에서 interface를 implements하기
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현한다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI; // Math.PI속성은 원주와 지름비율인 약 3.14를 나타낸다.
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());


var shpaes = [new Circle(5), new Rectangle(10, 5)];
shpaes.forEach(function (shape) { return console.log(shape.getArea()); }); // forEach()메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행한다.
