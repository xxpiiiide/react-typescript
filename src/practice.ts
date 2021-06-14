// Generics


// interface에서 Generics 사용하기
interface Items<T> {
    list: T[]
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}




// type에서 Generics 사용하기
type Item<T> = {
    list: T[]
}

const item: Item<string> = {
    list: ['a', 'b', 'c']
}

