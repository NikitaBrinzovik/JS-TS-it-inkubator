


const tlID_1 = "34jf-76kg"//v1
const tlID_2 = "34jf-jjkg"//v1

const todoList = [
    {
        id: tlID_1,
        title: "what to learn",
        filter: "all",

    },
    {
        id: tlID_2,
        title: "what to buy",
        filter: "all",

    },
]

const tasks = {
    "tlID_1": //кавычки восприймет как строку, вариант лучше смотри ниже
        [
            {name: "HTML",isDone: true},
            {name: "React",isDone: false}
        ],
    [tlID_2]: //записывать в кв скобках: дать выражение, которое интерпретатор будет выполнять. получим: 34jf-jjkg
        [
            {name: "beer", isDone: true},
            {name: "candy", isDone: true}
        ],
    [ 3 + 2 ]: [] ,//отобразит 5
    [ 3 > 2 ]: [] //true

}
console.log(tasks)
console.log(tasks[todoList[0].id])//undefined-"tlID_1" строка
console.log(tasks[todoList[1].id])// [{…}, {…}]
console.log(tasks[tlID_2])// same
console.log(tasks[todoList[1].id][1].name)// candy
console.log(tasks[tlID_2][1].name) //candy

// REDUCE - сокращать (понижать)
// свести массив к одному значению

let numbers =[ 3, 6, 8, 11];
console.log(numbers.reduce((acc,el)=>acc + el, 0))
//0+3, 3+6, 9+8, 17+11 =28
console.log(numbers.reduce((acc,el) => acc > el ? acc : el)) //11


let students2 = [
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

function findAlex(acc, el) { // с помощью редьюс найдём объект в массиве
    if (el.name === "Alex") {acc = el}
    return acc
}
console.log(students2.reduce(findAlex, null)) //import students from main2.js
//если будет несколько алексов, вернёт последнего

function getBestStudents(acc, el) {
    if(el.scores >= 100) {acc.push(el)}
    return acc
}
console.log(students2.reduce(getBestStudents, []))//создаём массив лучш студ

function addScores(acc, el) { //добавить всем по 10 баллов
    acc.push({...el, scores: el.scores + 10})
    return acc
}
console.log(students2.reduce(addScores, []))//