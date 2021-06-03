type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users:UsersType = {
    "101": {id: 101, name: "Nick"},
    "1902": {id: 1902, name: "N"},
    "99903": {id: 99903, name: "Ni"},
    "104": {id: 104, name: "Nik"},
}
//доступ
console.log(users["1902"])
//добавление
const user = {id: 1000000, name: "Nickkk"};
users[user.id] = user
//удаление через delete
delete users[user.id]
//update
users[user.id].name = "Viktor"

export const usersArray = [
    {id: 101, name: "Nick"},
    {id: 1902, name: "N"},
    {id: 99903, name: "Ni"},
    {id: 104, name: "Nik"},
]
//доступ
console.log(usersArray[1])
//добавление
usersArray.push(user);
let usersCopy = [ ...usersArray, user];
//удаление
let usersS = usersCopy.filter(
    (e) => e.id !== user.id);
//update через map

