import {CompaniesType, SkillsType} from "./immutability.test";

export type ManType = {
    name: string
    age: number
    hair: number
    address: { title: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = ManType & {
    laptop: LaptopType
}
export type UserWithBookType = ManType & {
    books: Array<string>
}

export const moveUser = (u: UserWithLaptopType, title: string): UserWithLaptopType => {
    /*    let userCopy = {
            ...u,
        }
        userCopy.address = {...userCopy.address, title: title}
        return userCopy*/
    return {
        ...u,
        address: {
            ...u.address,
            title: title
        }

    }
}
export const changeNotebook = (u: UserWithLaptopType, ntbk: string): UserWithLaptopType => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: ntbk
        }
    }
}
export const moveUserWithAll = (u: UserWithLaptopType & UserWithBookType, title: string) => {
    return {
        ...u,
        address: {
            ...u.address,
            title: title
        }

    }
}
export const addNewBooks = (u: UserWithLaptopType & UserWithBookType, newBooks: Array<string>) => {
    return {
        ...u,
        books: [
            ...u.books.concat(newBooks)
        ]

    }
}
export const updateNewBooks = (u: UserWithLaptopType & UserWithBookType, oldBook: string, newBook: string) => {


    return {
        ...u,
        books: [
            ...u.books.map(b => b === oldBook ? newBook : b)
            // if(b === oldBook){
            //     return newBook;
            // }else{
            //     return b
            // }
            //})
        ]

    }
}
export const grouSkill = (s: SkillsType, chousenSkill: string, points: number) => {
    return {
        ...s,
        [chousenSkill]: {progress: s[chousenSkill].progress + points}
    }
}
export const removeBook = (u: UserWithLaptopType & UserWithBookType, bookForDelete: string) => {
    return {
        ...u,
        books: [
            ...u.books.filter(b => b !== bookForDelete)
        ]
    }
}
export const addJob = (u: UserWithLaptopType & CompaniesType, newJob: { id: number, title: string }) => {
    return {
        ...u,
        //companies: [...u.companies.concat(newJob)]
        companies: [...u.companies, newJob]

    }
}
export const renameComp = (u: UserWithLaptopType & CompaniesType, id: number, newTitle: string) => {
    return {
        ...u,
        companies: u.companies.map(b => b.id === id ? {...b, title: newTitle} : b)
    }
}
export const updateCompanyTitle2 = (companies: { [key: string]: Array<{ id: number, title: string }> },
                                    user: string,
                                    companyID: number,
                                    newTitle: string) => {
    let companyCopy = {...companies};
    companyCopy[user] = companies[user].map(c => c.id === companyID
        ? {...c, title: newTitle}
        : c)
    return companyCopy
}