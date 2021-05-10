const array = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]

//чисто для себя сделал поиск максимума через reduce
function findMax(acc, el) {
    if (el > acc) acc = el
    return acc
}

console.log(array.reduce(findMax, 0))

// СОРТИРОВКА
//олд скулл метод пузырьком
for (let j = 0; j < array.length - 1; j++) {//внешний цикл
    for (let i = 0; i < array.length - 1 - j; i++) {//внутренний. -j сокращаем колличество действий,
        // так как первое число уже отсортированно
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
            //более короткая запись трех строк, без вспомогат переменн temp (диструктуризация массивов):
            //[array[i], array[i + 1]] = array[[i + 1], array[i]]
        }
    }

}
console.log(array)

//ещё раз про диструктуризацию
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b)

// метод SORT
//sort -> compareFunc -> a
// a <= 0 тогда не переставляется. a > 0  переставляем
const names = ["Bob", 199, 1999, "Alex", "Donald", "Ramzan", "bob", "200", 201, "рок"] //цифры- заглав- строч
names.sort() //цифры- заглав- строч. а цифры смотрит как строки (199, 1999, 200)
console.log(names)
// возвращает отсорт массив: не создовая новый
names.sort().reverse() //понятно)
console.log(names)

//для сортировки чисел:
function comp(a, b) { // по возвр. дальше короче запишем
    if (a <= b) {
        return -100 //отриц число
    } else {
        return 88 //положит
    }
}

const numbers2 = [110, 1, 1000, 333, 9, 22226]
console.log(numbers2.sort(comp))

const shortComp = (a, b) => a - b // так этот метод работает
console.log(numbers2.sort((a, b) => a - b)) //возр
console.log(numbers2.sort((a, b) => b - a)) //убывание


let students3 = [
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
//возмём по очкам по убыванию
console.log(students3.sort((x, y) => y.scores - x.scores))

//по возросту от молодого
console.log(students3.sort((x, y) => x.age - y.age))
//можно от старшего к младшему записать двумя способами: поменять x и y или дописать reverse
console.log(students3
    .sort((x, y) => x.age - y.age)
    .reverse())

//by alphabet. use toUppercase to clear comp-on
console.log(students3.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))

