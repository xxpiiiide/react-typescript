// 클래스에서 interface를 implements하기


// shape 이라는 interface를 선언한다.
interface Shape {
    getArea(): number; // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당함수는 반환값은 숫자이다.
}


class Circle implements Shape {
    // `implements` 키워드를 사용하여 해당 클래스가 shape interface의 조건을 충족하겠다는 것을 명시하여야 한다.
    
    // radius: number; // 멤버 변수 radius 값을 설정한다.
    //  constructor(radius: number) {
    //     this.radius = radius;
    // }
    // 타입스크립트에서는 constructor의 파라미터 쪽에 public 또는 private accessor를 사용하면 직접 하나하나 설정해주는 작업을 생략할 수 있다.

    constructor(public radius: number) { // public으로 선언된 값은 클래스 외부에서 조회할 수 있다. 
        this.radius = radius;
    }
   


    // 너비를 가져오는 함수를 구현한다.
    getArea() {
        return this.radius * this.radius * Math.PI; // Math.PI속성은 원주와 지름비율인 약 3.14를 나타낸다.
    }
}

class Rectangle implements Shape {
    
    // width: number;
    // height: number;

    // constructor(width: number, height: number) {
    //     this.width = width;
    //     this.height = height ;
    // }
    // 위 constructor에서 width, height선언 후 멤버 변수를 하나하나 설정해주었는데, 타입스크립트에서는 constructor의 파라미터 쪽에 public 또는 private accessor를 사용하면 직접 하나하나 설정해주는 작업을 생략할 수 있다.

    constructor(private width: number, private height: number) { //private로 선언된 값은 클래스 내부에서만 조회할 수 있다.
        this.width = width;
        this.height =  height;
    }

    getArea() { 
        return this.width * this.height;
    }
}


const circle = new Circle(5)
const rectangle = new Rectangle(10, 5)

console.log(circle.radius);     // public로 선언된 값이므로 클래스 외부에서 조회가 가능하다.
// console.log(rectangle.width);    // private로 선언된 값은 클래스 외부에서 조회가 불가능하다.

const shpaes: Shape[] = [new Circle(5), new Rectangle(10, 5)]

shpaes.forEach( shape => console.log(shape.getArea())) // forEach()메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행한다.