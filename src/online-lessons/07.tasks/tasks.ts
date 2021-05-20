export function sum(a:number, b:number):number {
    return a + b
}

export function rest(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el, 0)
}

export function rest1(a:string, b:boolean, ...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el, 0)
}//первые два параметра будут отдель, а ОСТАЛЬНЫЕ собранны в массив, потому rest




export function multyplay(a:number, b:number):number {
    return a * b
}export function div(a:number, b:number):number {
    return a / b
}export function sub(a:number, b:number):number {
    return a - b
}

export type actionType = {type: 'sum' | 'sub' | 'div' | 'mult'}
export function calc(a:number, b:number, action: actionType ){
    switch (action.type) {
        case "sum": return a + b
        case "sub":return a - b
        case 'mult': return a * b
        case "div": return a / b
        default: return "try correct symbol"
    }
}