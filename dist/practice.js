"use strict";
// 클래스에서 interface를 implements하기
var Circle = /** @class */ (function () {
    // `implements` 키워드를 사용하여 해당 클래스가 shape interface의 조건을 충족하겠다는 것을 명시하여야 한다.
    // radius: number; // 멤버 변수 radius 값을 설정한다.
    //  constructor(radius: number) {
    //     this.radius = radius;
    // }
    // 타입스크립트에서는 constructor의 파라미터 쪽에 public 또는 private accessor를 사용하면 직접 하나하나 설정해주는 작업을 생략할 수 있다.
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현한다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI; // Math.PI속성은 원주와 지름비율인 약 3.14를 나타낸다.
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //     this.width = width;
    //     this.height = height ;
    // }
    // 위 constructor에서 width, height선언 후 멤버 변수를 하나하나 설정해주었는데, 타입스크립트에서는 constructor의 파라미터 쪽에 public 또는 private accessor를 사용하면 직접 하나하나 설정해주는 작업을 생략할 수 있다.
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius); // public로 선언된 값이므로 클래스 외부에서 조회가 가능하다.
// console.log(rectangle.width);    // private로 선언된 값은 클래스 외부에서 조회가 불가능하다.
var shpaes = [new Circle(5), new Rectangle(10, 5)];
shpaes.forEach(function (shape) { return console.log(shape.getArea()); }); // forEach()메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행한다.
