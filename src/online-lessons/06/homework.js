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

//14. function addFriends, принимающая параметром массив students и добавляет каждому св-во friends,
//значением которого является массив имён всех остальных студ-ов(кроме себя)

const addFriends = (students) => {

    let stNames = students.map(st => st.name)

    let stWithFriends = students.map(st => {
        let filteredFriends = stNames.filter(stud => {
            return st.name !== stud
        })

        return {...st, friends: filteredFriends}
    });

    return stWithFriends
}
console.log(addFriends(students))