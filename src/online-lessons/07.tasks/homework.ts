export type StudentType = {
    name:string
    age: number
    isMarried: boolean
    scores:number
}

export let students:Array<StudentType> = [
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

export const addFriends = (students:Array<StudentType>):Array<StudentType> => {

    const stNames = students.map(st => st.name)

    const stWithFriends = students.map(st => {
        const filteredFriends = stNames.filter(stud => {
            return st.name !== stud
        })

        return {...st, friends: filteredFriends}
    });

    return stWithFriends
}
console.log(addFriends(students))