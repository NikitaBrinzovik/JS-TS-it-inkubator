import {StudentType} from "../02-objects/02";
import {addSkill, checkCountry, finishStudy} from "./03";
import {types} from "util";



let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Nikita",
        age: 29,
        isActive: true,
        address: {

            street: "The best one",
            building: 11,
            apartments: 22222,
            city: {
                name:"Saint-Petersburg",
                country: "Russia"
            },
        },
        technologies: [
            "css", "html", "react", 'ts', 'js'
        ],
        skills: [
            {
                id: 1,
                name: "copy-paste",

            },
            {
                id: 2,
                name: "watch youtube",

            },
            {
                id: 3,
                name: "crying on homework",

            }
        ],
    };
})

test('new skill should be added to student ', () => {
    expect(student.skills.length).toBe(3)
    addSkill(student,'clacssss-clacsss on kaviatureee');

    expect(student.skills.length).toBe(4);

    expect(student.skills[3].name).toBe('clacssss-clacsss on kaviatureee');
    expect(student.skills[3].id).toBeDefined(); //проверка, что id определён
})

test('student should finish studying (isActive===false)', () => {
    expect(student.isActive).toBe(true);

    finishStudy(student);

    expect(student.isActive).toBe(false);
})

test('Is student living in Vietnam?', () => {
    expect(student.address.city.country).toBe('Russia')

    let result1 = checkCountry(student, "Russia");
    let result2 = checkCountry(student, "Vietnam");

    expect(result1).toBe(true)
    expect(result2).toBe(false)

})



