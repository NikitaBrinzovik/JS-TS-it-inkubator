import {multiply, slitInToWords, sum} from "./01";

// чтоб не перезатёрлось всё, не присваиваем значения, а только тип
let a:number;
let b:number;
let c:number;
// задание каждому тесту перед стартом
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})


test('sum should be correct', () => {
    //data
    // let a = 1;  ПЕРЕНЕСЛИ ПЕРЕД ТЕСТАМИ
    // let b = 2;
    // let c = 3;

    //action
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})
test('multiply result should be correct', () => {
    //data

    //action
    const result1 = multiply(a, b);
    const result2 = multiply(b, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('spliting in to words', () => {
    //data
    const sent1 = "Hello my friends!"//использовали replace в функц
    const sent2 = "JS - the best  programming language"// tyt
    //импользовали два пробела см result2[4] и toLowerCase в функц

    //action
    const result1 = slitInToWords(sent1);
    const result2 = slitInToWords(sent2);

    //expected result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')//toLowerCase
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')//toLowerCase
    //expect(result2[1]).toBe('-')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    //expect(result2[4]).toBe('')//в тексте два пробела
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')


    }

)