// const message: string = 'hello world';
// console.log(message)

// meessage는 string이므로 number인 1은 될 수 없다고 뜬다.
// const message: string = 1;
// console.log(MessagePort)

let count = 0; //숫자
count += 1;
count = "갑자기 분위기 문자열" // 현재 에러 발생

const message: string = 'hello world'; // 문자열

const done: boolean = true  // 불리언 값

const numbers: number[] = [1, 2, 3]  // 숫자배열

const messages: string[] = ['hello', 'wolrd'] // 문자배열

messages.push(1); // 이거는 문자배열안에 숫자를 넣으려고 하기 때문에 되지 않을 것이다.

let mightBeUndefined: string | undefined = undefined;  // mightBeUndefined가 string일 수도 있고, undefined일 수도 있다.

let nullableNumber: number | null = null // nullableNumber가 number일 수도 있고, null일 수도 있다.

let color: 'red' | 'orange' | 'yellow' = 'red' // 'red'나 'orange'나 'yellow'중에 'red'가 하나임

color = 'yellow'
color = 'green' // 현재 에러 발생
