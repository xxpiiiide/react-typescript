function sum(x: number, y: number): number{
    return ;
}

sum(1,2)
sum('q', 'n'); // 함수안에서도 타입을 지정하여 줄 수 있다.(number로 지정했으므로 string값은 받지 못한다.)


function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc+current, 0)
}

const total = sumArray([1,2,3,4,5])
console.log(total)


function returnNoting(): void {
    console.log('I am just saying hello world')
}
// 함수에서 아무것도 반환하지 않아야 한다면 void로 설정하면 된다.
