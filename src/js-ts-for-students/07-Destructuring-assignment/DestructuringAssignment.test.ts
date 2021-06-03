import {MainType} from "./DestructuringAssignment";

let prooops: MainType;
beforeEach(() => {
    prooops = {
        name: "Nick",
        age: 29,
        lessons: [{title: "1"}, {title: "2"}, {title:"e3e"}],
        address: {
            street: {
                title: "ssssss street"
            }
        }
    }
})

test("rrrrr", () => {
    const a = prooops.age;
    const l = prooops.lessons;

    const {age, lessons} = prooops;

    const {address: {street: {title}}} = prooops;// так делать не надо- слишком нечитаемо
    const title2 = prooops.address.street.title //лучше уж так или через деструктуризацию

    expect(a).toBe(29)
    expect(age).toBe(29)

    expect(l.length).toBe(3)
    expect(lessons.length).toBe(3)

    expect(title).toBe("ssssss street")
    expect(title2).toBe("ssssss street")

})

test("h", () => {

    const {age, lessons} = prooops;
    const {age: a, lessons: l} = prooops;

    expect(a).toBe(29)
    expect(age).toBe(29)

    expect(l.length).toBe(3)
    expect(lessons.length).toBe(3)
})
test("деструктуризация в массиве", () => {

    const l1 = prooops.lessons[0];
    const l2 = prooops.lessons[1];

    //const [ls1, ls2] = prooops.lessons;
    const [ , ls2] = prooops.lessons;//ls2-просто имя, а запятая обозначает место в массиве
    const [ls1, ...restLessons] = prooops.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    //expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(ls1.title).toBe('1')
    expect(restLessons.length).toBe(2)

})