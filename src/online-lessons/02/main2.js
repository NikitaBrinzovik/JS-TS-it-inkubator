let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 21,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
];

students.map(st => ({...st, age: st.age + 1})) //...-spread-означают, что копируем исходный объект,
// а потом затираем св-во age и создаём изменяя на еденицу
console.log(students)
console.log(students.map(st => ({...st, age: st.age + 1})))

function mapN(array, func) { //тут мы описали схему работы метода MAP
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = func(array[i], i)
    }
    return newArr;
}

console.log(mapN(students, st => ({...st, age: st.age + 1})))

function mapNew(array, func) {
    const newArray = []
    // array.forEach((st) => {
    //     newArray.push(func(st))
    // })
    //мы можем использовать индекс вместо метода push
    array.forEach((st, i) => {
        newArray[i] = func(st)
    })
    return newArray;
}

console.log(mapNew(students, st => ({...st, age: st.age + 2})))

function addProp(elem) {
    return {...elem, isMaried: false}
}

//FILTER

function filter(array, func) {
    const nwArr = []
    //for (let i = 0; i < array.length; i++) {
    //     if (func(array[i]) === true) {
    //         nwArr.push(array[i])
    //     }
    // }
    // можно через forEach
    array.forEach((st, i) => {
        if (func(array[i]) === true) {
            nwArr.push(st)
        }
    })
    return nwArr;
}

function notMarriedSt(st) {
    //return st.isMarried === false
    return !st.isMarried // запись короче
}

console.log(filter(students, notMarriedSt))
console.log(filter(students, st => !st.isMarried))//тоже самое, но короче и без доп f

// FIND - возвращает первый соответсвующий эл и только его

function find(array, func) {
    const nwAr = []
    for (let i = 0; i < array.length; i++) {

        //if (func(array[i]) === true) {-полная запись
        if (func(array[i])) { //запись с псевдо-истинной
            // чтоб получить false-0, "", null(в объектах), NaN, underfined
            //[],{}, " " -> true
            return array[i]
        }
    }
}

const getAlex = s => s.name === "Alex"
console.log(find(students, getAlex))

const getByNameAndAge = s => s.name === "Alex" && s.age > 20
console.log(find(students, getByNameAndAge))

