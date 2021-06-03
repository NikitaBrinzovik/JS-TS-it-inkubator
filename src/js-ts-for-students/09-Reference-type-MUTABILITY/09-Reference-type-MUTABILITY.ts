export type UserType ={
    name: string
    age: number
}

let user:UserType = {
    name: "Nick",
    age: 29,
}

function icreaseAge(user:UserType) {
    user.age++
}