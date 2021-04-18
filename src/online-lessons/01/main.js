console.log('hey')

//copy objects and arrays

const student = {  //ссылка 42
    name: "Nikita",
    age: 29,
    friends: ["bbob", 'nick']
}
const studentN = { // 43
    name: "Nikita",
    age: 29,
}

console.log(student === studentN) // false

student.age = 30
// student.id = 30
// console.log(student)


//1.const -присваивание значения только один раз
//2. если это объект (array and func), то в переменной хранится ссылка
//на этот объект ("адрес" в памяти)
const copyStudent = {...student, friends: [...student.friends]} //ссылка 44 спрет
// создали новый объект но в котором такие-же значения
console.log(student === copyStudent)
student.friends.push("ann")
console.log(copyStudent)

//
function fn(num) {
    const pow = Math.pow(num, 2)
    const sqrt = Math.sqrt(num)
    return [pow, sqrt]
}
console.log(fn(10))
const result = fn(10)
const tenPow = result[0]
const tenSqrt = result[1]
const [tenPow, tenSqrt] = result //более короткая запись двух строк выше

//вместо хаписи 37-41 запишем:
const [tPow, tSqrt] = fn(10)

function fn1(num) {
    const pow = Math.pow(num, 2)
    const sqrt = () => console.log (pow)
    return [pow, sqrt]
}
const [numPow, logNumPow] = fn1(11)
console.log(logNumPow())