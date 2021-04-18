import { StudentType } from "../02-objects/02";

export function sum (a:number, b:number) {
    return a + b;
}

export const sum2 = (a:number, b:number) => {
    return a + b;
};

export const addSkill = (student:StudentType, skill:string) => {
    student.skills.push({
        id: new Date().getTime(),
        name: skill,
    })
};
export function addSkill2 (student:StudentType, skill:string) {
    student.skills.push({
        id: new Date().getTime(),
        name: skill,
    })
}

export function finishStudy(stu:StudentType) {
    stu.isActive = false
}

export function checkCountry(studeeeeent:StudentType, countryNameee:string) {
    return studeeeeent.address.city.country === countryNameee

}