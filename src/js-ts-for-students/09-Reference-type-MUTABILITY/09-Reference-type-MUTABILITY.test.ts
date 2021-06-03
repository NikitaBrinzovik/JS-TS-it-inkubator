
export type UserType ={
    name: string
    age: number
}

function icreaseAge(u:UserType) {
    u.age++;
    u.age = u.age + 1;
}

test ("reference type text", () => {
    let user:UserType = {
        name: "Nick",
        age: 29,
    }
    icreaseAge(user)
    const superman = user;
    superman.age +=1000;
    //expect(user.age).toBe(31)
    expect(user.age).toBe(1031)
})

test ("array test", () => {
    let users = [
        {name: "Dim", age: 32,},
        {name: "Nick", age: 29,},
    ];
    let admins = users;

    admins.push({name: "Hey",age: 88,})

    expect(users.length).toBe(3)

})

test("value type test", () => {
    let usersCount = 100;
    let adminCount = usersCount;

    // let plusOne = (mass:number) => {
    //     mass = mass +1
    // }
    // plusOne(usersCount)
    adminCount++
    expect(usersCount).toBe(100)
    expect(adminCount).toBe(101)

})