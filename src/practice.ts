// Type Alias 사용하기

type Person = {
    name: string
    age?: number 
}


// &는 Intersection으로 2개 이상의 타입들을 합쳐준다.
type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: '이필제'
}

const expert: Developer = {
    name: '허이나',
    skills: ['javascript', 'react']
}


type People = Person[]
const people: People = [person, expert]

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red'
const colors: Color[] = ['red', 'orange']