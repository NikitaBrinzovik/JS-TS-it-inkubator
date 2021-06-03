type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType = {}

beforeEach(() => {
    users = {
        "101": {id: 101, name: "Nick"},
        "1902": {id: 1902, name: "N"},
        "99903": {id: 99903, name: "Ni"},
        "104": {id: 104, name: "Nik"},
    }
})


test("shoud update user", () => {
    users["101"].name = "NNN"

    expect(users["101"].name).toBe("NNN")
    expect(users["101"]).toEqual({id: 101, name: "NNN"})
})
test("shoud delete user", () => {
    //users["101"].name = "NNN"
    delete users["101"]

    expect(users["101"]).toBeUndefined()
    expect(users["104"]).toBe("N")
})
