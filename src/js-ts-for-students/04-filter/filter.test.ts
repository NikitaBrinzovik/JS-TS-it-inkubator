// import chipPredicate from "./filter"
import {CityType} from "../02-objects/02_02";
import {deleteHousesOnTheStreet, getBuildingWithStaffCountMoreThen} from "./04_02";
export {}
// type coursesType = {
//     price: number
//     title: string
// }

test("should take only chip courses", () => {
    const courses = [
        {title:"css", price: 110},
        {title:"js", price: 200},
        {title:"react", price: 150}
    ]
    // const chipPredicate = (course:coursesType) => {
    //     return course.price < 160
    // }
    //короткая запись:
    //const chipPredicate =(course) => course.price < 160
    //const chipCourses = courses.filter(chipPredicate);
    //ещё короче:
    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("css")
    expect(chipCourses[1].title).toBe("react")
})

test("get only completed tasks", () => {
    const tasks = [
        {id:1, title:"bread", complited: true},
        {id:2, title:"milk", complited: false},
        {id:3, title:"sugar", complited: true},
        {id:4, title:"fish", complited: false},
    ]

    //const completedTask = tasks.filter(task => task.complited === true)
    //короче:
    const completedTask = tasks.filter(task => task.complited)
    // если бы хотели НЕ выоплненые, то запись:
    //const completedTask = tasks.filter(task => !task.complited)
    expect(completedTask.length).toBe(2)
    expect(completedTask[0].id).toBe(1)
    expect(completedTask[1].id).toBe(3)
})

// ФАЙЛ 04-02


let city:CityType
city = {
    title: 'New-York',
    houses: [
        {
            id: 1, buildAt: 2012, repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        },
        {
            id: 2, buildAt: 2008, repaired: true,
            address: {number: 100, street: {title: 'Happy street'}}
        },
        {
            id: 3, buildAt: 2020, repaired: true,
            address: {number: 1000, street: {title: 'White street'}}
        }],
    governmentBuildings: [
        {
            type: "HOSPITAL",
            address: {title: "Central Str"},
            //number: 12,
            staffCount: 280
        },
        {
            type: "FIRE-STATION",
            address: {title: "South Str"},
            //number: 12,
            staffCount: 1000
        }
    ],
    citizensNumber: 1000000,
}

test("delete houses", () => {
    deleteHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
})

test("buildingss with correct staff count", () => {
    let buildings =
        getBuildingWithStaffCountMoreThen(
            city.governmentBuildings,
            500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})