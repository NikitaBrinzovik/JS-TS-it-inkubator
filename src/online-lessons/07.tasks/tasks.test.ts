import {calc, rest, rest1, sum} from "./tasks";

test("sum of two numbers", () => {
    //1. test data
    const a:number = 10
    const b:number = 8

    //2. Выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)

    //3. Проверка ожидаемого результата
    expect(result).toBe(18)
})
//то же самое короче:
test("sum of two numbers. var2", () => {
    expect(sum(10, 8)).toBe(18)
})

test("sum of several numb", () => {
    expect(rest(10, 8)).toBe(18)
    expect(rest(10, 8, 12)).toBe(30)
    expect(rest(10, 8, 12, 20)).toBe(50)
    expect(rest(10, 8, 12, 20, 10, 10, 10)).toBe(80)
})
test("rest with 'a' anb 'b' ", () => {
    expect(rest1('s', true, 10, 8)).toBe(18)
    expect(rest1('hey', false,10, 8, 12)).toBe(30)

})

test('calculate all mtrfcka', () => {

    expect(calc(2, 3, {type:'sum'})).toBe(5)
    expect(calc(2, 3, {type:'sub'})).toBe(-1)
    expect(calc(6, 3, {type:'div'})).toBe(2)
    expect(calc(2, 3, {type:'mult'})).toBe(6)
    //expect(calc(2, 3, 'mult')).toBe("try correct symbol")
    // expect(calc(2, 3, {type:'aaaa'})).toBe("try correct symbol")
})

