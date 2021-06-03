import {MainType} from "./DestructuringAssignment";

let prooops: MainType;
beforeEach(() => {
    prooops = {
        name: "Nick",
        age: 29,
        lessons: [{title: "1"}, {title: "2"},],
        address: {
            street: {
                title: "ssssss street"
            }
        }
    }
})

test("", () => {
    // let prooops = {
    //     name: "Nick",
    //     age: 29,
    //     lessons: [{title: "1"}, {title: "2"},],
    //     address:{
    //         street:{
    //             title:"ssssss street"
    //         }
    //     }
    // }
    const a = prooops.age;
    const l = prooops.lessons;

    const {age, lessons} = prooops;

    const {address: {street: {title}}} = prooops;// так делать не надо- слишком нечитаемо
    const title2 = prooops.address.street.title //лучше уж так или через деструктуризацию

    expect(a).toBe(29)
    expect(age).toBe(29)

    expect(l.length).toBe(2)
    expect(lessons.length).toBe(2)

    expect(title).toBe("ssssss street")
    expect(title2).toBe("ssssss street")

})

test("hh", () => {

    const {age, lessons} = prooops;
    const {age: a, lessons: l} = prooops;

    expect(a).toBe(29)
    expect(age).toBe(29)

    expect(l.length).toBe(2)
    expect(lessons.length).toBe(2)
})

test("h", () => {

    const {age, lessons} = prooops;
    const {age: a, lessons: l} = prooops;

    expect(a).toBe(29)
    expect(age).toBe(29)

    expect(l.length).toBe(2)
    expect(lessons.length).toBe(2)
})