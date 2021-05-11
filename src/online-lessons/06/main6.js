let students4 = [
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

const user = {
    name: "Nikita",
    age: 29,
    friends: ["Ivan", "Petr", "Gleb"]
}
//1.создаём поверхностную копию
let copyUser = {...user} // {}фигурные скобки  = функции new Object()
// в если квадратные = new Array()

// Проверка
console.log(copyUser === user) //false
console.log(copyUser.friends === user.friends)//true

//2. Полная(глубокая) копия объекта
let deepCopyUser = {...user, friends: [...user.friends]};

// проверка
console.log(user === deepCopyUser) //false
console.log(user.friends === deepCopyUser.friends) //false

//3. Поверхностная копия
let copyStudents = [...students4]

// Cheek
console.log(copyStudents === students4) //false
console.log(copyStudents[1] === students4[1]) //true

//4. Deep copy. map.
let deepCopyStudents = students4.map(st => ({...st})); //map - новый массив

console.log(deepCopyStudents === students4) //false
console.log(deepCopyStudents[1] === students4[1]) //false

//5. Отсортировать по алфавиту
function sortFn(a, b) { //пишем функцию сортировки
    switch (a.name > b.name) {
        case true:
            return 1
        case false:
            return -1
        default:
            return 0
    }
}

let sortByName = deepCopyStudents.sort(sortFn)//в метод сорт подставляем ф-ию сортировки
console.log(sortByName)

//5. По оценкам (from best). if we want from loser, then change on: a.scores.-b.scores
let sortByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortByScores)

//6.массив студентов у которых больше 100 баллов
let bestStudents = deepCopyStudents.filter(st => st.scores >= 100);
console.log(bestStudents)


//SPLICE

let topStudents = deepCopyStudents.splice(0, 3, true, true);//
//вырезаем из deepCopyStudents элементы начиная с нулевого(start),
// по третий [0,1,2](deleteCount), вставляем элемент (true*2) вместо них

console.log(topStudents)
console.log(deepCopyStudents)

let topStudents2 = deepCopyStudents.splice(0, 0, true, true);
//просто вставили true*2 вначало массива) ещё можно использовать отриц индекс
console.log(topStudents2)
console.log(deepCopyStudents)
//let topStudents2 = deepCopyStudents.splice(-1,1, true, true); удалит последний и вставит тру

//6b. объеденить [] deepCopyS и topS так, чтоб сохранить порядок сортировки

let newDeepCopyStudents = topStudents.concat(deepCopyStudents)// создает поверхностную копию из двух
console.log(newDeepCopyStudents)//можно несколько раз исп concat в одном выражении
//более современная запись:
let newDeepCopyStudents2 = [...topStudents, 56, ...deepCopyStudents, true];
console.log(newDeepCopyStudents2)

//7.массив холостых(filter)
let newDeepCopyStudents3 = students4.map(st => ({...st})) //обновим
//let notMarriedSt = newDeepCopyStudents3.filter(st => st.isMarried === false) запишем короче:
let notMarriedSt = newDeepCopyStudents3.filter(st => !st.isMarried)
console.log(notMarriedSt)

//8. массив имён студентов (map)
let stNames = newDeepCopyStudents3.map(st => st.name)
console.log(stNames)

//8.1 Сформировать строку из имён ст, разделённых : а. Запятой c пробелом б. точкой (join)
console.log(stNames.join())//по умолчанию просто запятая
let nameWithSpace = stNames.join(', ')
let nameWithComma = stNames.join('.')

console.log(nameWithSpace)
console.log(nameWithComma)


//9. добавить всем ст 'isStudent'  со знач true (map)
let trueSt = newDeepCopyStudents3.map(st => ({...st, isStudent: true}))
console.log(trueSt)

//10. Nick женился. map
let newMarriedSt = newDeepCopyStudents3.map(st => st.name === "Nick" ? {...st, isMarried: true} : st)
console.log(newMarriedSt)

//11 find Nick
let nick = newDeepCopyStudents3.find(st => st.name === "Nick")
console.log(nick)

//12 find heights score st. reduce
let topScSt = newDeepCopyStudents3.reduce((acc, st) => acc.scores < st.scores ? st : acc)
console.log(topScSt)

//13. sum of all students.score
let totalScore = newDeepCopyStudents3.reduce((acc, st) => acc + st.scores, 0)
console.log(totalScore)

//14. function addFriends, принимающая параметром массив students и добавляет каждому св-во friends,
//значением которого является массив имён всех остальных студ-ов(кроме себя)
let friends = [];
const addFriends = (students4) => {students4.map(st => ({...st, friends: friends}))}
    //acc.name !== st.name ? st.name = st.name : st.name = '', myName)
    // let notMe = newDeepCopyStudents3.reduce((acc, st) => {
    //     if (acc.name === myName) return ''
    //     else return "ff"
    // }
console.log(addFriends(students4))


let friendsArr =(stu)=>  newDeepCopyStudents3.filter(stu => stu !==stu.name)

let stWithFriends = newDeepCopyStudents3.map(st => ({...st, friends: friendsArr}));
console.log(stWithFriends)
console.log(friendsArr(stWithFriends))

let totalNames = newDeepCopyStudents3.reduce((acc, st) => acc + st.name , [])
//let joinTotalNames = totalNames
console.log(totalNames)