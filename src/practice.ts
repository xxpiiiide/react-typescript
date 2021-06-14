// 일반 객체를 interface로 타입 설정하기


// interface Person {
//     name: string;
//     age?: number;   // 여기서 물음표는 설정을 해도 되고 안해도 되는 값을 뜻한다.

// }

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[]
// }
// Person과 Developer가 형태가 유사할 경우 interface 선언 시 다른 interface를 extends 키워드를 사용해서 상속받을 수 있다.

interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person {
    skills: string[]
}

const person: Person = {
    name: '이필제',
    age: 31
}

const expert: Developer = {
    name: '허이나',
    age: 1,
    skills: ['javascript', 'react']
}

const people: Person[] = [person, expert]

