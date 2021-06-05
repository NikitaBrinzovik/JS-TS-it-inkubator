import {
    addJob,
    addNewBooks,
    changeNotebook, grouSkill,
    moveUser,
    moveUserWithAll, removeBook, renameComp, updateCompanyTitle2, updateNewBooks,
    UserWithBookType,
    UserWithLaptopType
} from "./immutability";

export type ManType = {
    name: string
    age: number
    hair: number
    address: { title: string }
}
export type SkillsType = { [key: string]: { progress: number } }
export type CompaniesType = {
    companies: Array<{ id: number, title: string }>
}

function makeHairstyle(u: ManType, power: number) {
    u.hair = u.hair / power
}

function makeHairstyleClearF(u: ManType, power: number) {
    let uCopy = {
        ...u,
        hair: u.hair / power
    }
    //uCopy.hair = u.hair / power
    return uCopy
}

test("ООП подход - мутируем", () => {
    let user: ManType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk"
        }
    }

    makeHairstyle(user, 2)

    expect(user.hair).toBe(16)
})
test("Функциональный подход- чистых функций", () => {
    let user: ManType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk"
        }
    }

    const cutUser = makeHairstyleClearF(user, 2)

    expect(user.hair).toBe(32)
    expect(cutUser.hair).toBe(16)
})
test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
    }
    const movedUser = moveUser(user, "Kiev")

    expect(movedUser).not.toBe(user)
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser.address.title).toBe("Kiev")
})
test("upgade notebook", () => {
    let user: UserWithLaptopType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
    }
    const userWithMac = changeNotebook(user, "Mac")

    expect(userWithMac).not.toBe(user)
    expect(userWithMac.laptop).not.toBe(user.laptop)
    expect(userWithMac.address).toBe(user.address)
    expect(userWithMac.laptop.title).toBe("Mac")
    expect(user.laptop.title).toBe("Zeenbook")
})
test("upgade ", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
        books: ['css', 'js', 'html', 'react',],
    }
    const userWithAll = moveUserWithAll(user, "AAA")

    expect(userWithAll).not.toBe(user)
    expect(userWithAll.laptop).toBe(user.laptop)
    expect(userWithAll.books).toBe(user.books)
    expect(userWithAll.address).not.toBe(user.address)
    expect(userWithAll.address.title).toBe("AAA")
    expect(user.address.title).toBe("Minsk")
})
test("update book ", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
        books: ['css', 'js', 'html', 'react',],
    }
    const userWithAll = updateNewBooks(user, 'js', 'rest api')

    expect(userWithAll).not.toBe(user)
    expect(userWithAll.books).not.toBe(user.books)
    expect(user.books.length).toBe(4)
    expect(userWithAll.books.length).toBe(4)
    expect(userWithAll.books[1]).toBe('rest api')
})
test("add new books ", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
        books: ['css', 'js', 'html', 'react',],
    }
    const userWithAll = addNewBooks(user, ['js', 'rest api'])

    expect(userWithAll).not.toBe(user)
    expect(userWithAll.books).not.toBe(user.books)
    expect(user.books.length).toBe(4)
    expect(userWithAll.books.length).toBe(6)
    expect(userWithAll.books[5]).toBe('rest api')
})
test('skills', () => {
    let skills: SkillsType = {
        'aaa': {progress: 22},
        'bbbb': {progress: 33},
        'ccc': {progress: 44}
    }

    let grouedSkill = grouSkill(skills, 'bbbb', 10)

    expect(grouedSkill['bbbb'].progress).toBe(43)
})
test('remove book', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
        books: ['css', 'js', 'html', 'react',],
    }

    let userWithClearLibrary = removeBook(user, 'css')

    expect(user.books.length).toBe(4)
    expect(userWithClearLibrary.books.length).toBe(3)
    expect(userWithClearLibrary.books[0]).toBe('js')
})
test('add', () => {
    let withCompanies: UserWithLaptopType & CompaniesType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: "IT-Inc"}]
    }

    let userWithNewJob = addJob(withCompanies, {id: 3, title: "google"})

    expect(userWithNewJob.companies.length).toBe(3)
    expect(userWithNewJob.companies[2]).toStrictEqual({id: 3, title: "google"})
})
test('rename', () => {
    let withCompanies2: UserWithLaptopType & CompaniesType = {
        name: "Nick",
        age: 29,
        hair: 32,
        address: {
            title: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zeenbook",
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: "IT-Inc"}]
    }

    let userWithNewJob2 = renameComp(withCompanies2, 2, "yandex")

    expect(userWithNewJob2.companies.length).toBe(2)
    expect(userWithNewJob2.companies[0].title).toStrictEqual('Epam')
    expect(userWithNewJob2.companies[1]).toStrictEqual({id: 2, title: "yandex"})
})
test('update company', () => {

    let companies: { [key: string]: Array<{ id: number, title: string }> } = {
        "Nick": [{id: 1, title: 'Epam'}, {id: 2, title: "IT-Inc"}],
        "Dimich": [{id: 1, title: 'Epam'}, {id: 2, title: "IT-Inc"}],
    }

    const newCompanies = updateCompanyTitle2(companies, "Nick", 1, "yandex")

    expect(newCompanies['Nick']).not.toBe(companies['Nick'])
    expect(newCompanies['Dimich']).toBe(companies['Dimich'])
    expect(newCompanies['Nick'][0].title).toBe("yandex")
})