// Generics
// 함수에서 Generics 사용하기

// function merge(a: any, b: any): any {
//     return {
//         ...a,
//         ...b
//     }
// }

// 위 merge함수를 Generics 이용하기
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a, 
        ...b
    }
}

const merged = merge({foo: 1}, {bar: 1})


// Generics 이용한 또다른 함수 예
function wrap<T>(param: T) {
    return { 
        param
    }
}

const wrapped = wrap(10)





