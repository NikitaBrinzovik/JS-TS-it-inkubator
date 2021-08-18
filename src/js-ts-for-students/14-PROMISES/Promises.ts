
/*type UsersType ={
    id: number
    name: string
    friend: number
}*/


// CATCH, TRY-CATCH, ASYNC-AWAIT

const axios = {
    _fake(url:string, data:any) {
        return new Promise((resolve) =>{
            setTimeout(() => {
                let responseData = {
                    text: `${url} loves you`
                };
            if (url.indexOf(`it-kamasutra`) > 0) {
                responseData = {
                // @ts-ignore
                    requestedCount: data.count,
                    message: 'we will prepare students for you'
                }
            } else if (url.indexOf(`google`) > 0) {
                responseData = {
                    // @ts-ignore
                    vacancies: 12
                }
            } else if (url.indexOf(`microsoft`) > 0) {
                responseData = {
                    // @ts-ignore
                    vacancies: 21
                }
            }
            resolve({
                request: {},
                status: 200,
                headers: {},
                config: {},
                data: responseData,
            })
            }, randomIntFromInterval(1, 5) * 1000);
    });

    },

    post(url:string, data:any) {
        return this._fake(url, data);
    },
    get(url:string, data:any) {
        return this._fake(url, data);
    }
};
export const findUserInDB = (id: number) => {
    const users = [ {id: 1, name: 'Nikita', friend: 3}, {id: 2, name: 'Nik', friend: null}, {id: 3, name: 'kit', friend: 2},]

    return new Promise( ((resolve, reject) => {
        setTimeout( () => {
            let user = users.find( u => u.id === id);
            if ( user === null) {
                reject(`user not found`)
            } else {
                resolve(user);
            }
        }, randomIntFromInterval(500, 1500))
    }))
};
function randomIntFromInterval(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Promise PENDING(в ожидании):
//распрастранённый синтаксис:
// @ts-ignore
axios.get('https://google.com').then((data: any) => { })
// так пишут редко, обычно не ловят в переменную, но для учебных целей  мы будем:
// @ts-ignore
const promise1 = axios.get('https://google.com')

promise1
    .then((data: any) => {// выполни эту ф-ию когда обещание исполнишь (зарезолвишься)
        //когда перейдёшь в состояние resolve, выполнится код дальше:
        console.log(data)
    })
    .catch(() => {
        console.log('aaaaaaaa')
    })

const promise2 = findUserInDB(1)

//так делают редко, но можно и так работать с ошибкой:
promise2.then((user: any) => {
    if (user !== null) {

    } else {

    }
    console.log(user)
})

// но обычно используют catch:
promise2.catch((error: any) => {
    console.warn(error)
})
// А записывают всегда цепочкой (Чейн). ПРАВИЛЬНАЯ ЗАПИСЬ:
promise2
    .then((user: any) => {
        console.log(user)
    })
    .catch((error: any) => {
        console.warn(error)
    })
    //                               .FINALLY

    .finally(() => { //в него не приходит никаких данных, выполняется в любом случае после resolve(.then) или reject(.catch).
        console.log('finish')
    })

//       .all( [] )
const otherPromise = Promise.all([promise1, promise2])//выполнится при resolve всех промиссов внутри []
otherPromise
    .then((results) => {//results это МАССИВ РЕЗУЛЬТАТОВ
        //console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
        console.log('finish')
    })
    .catch(() => {
        console.log('initialization failed. Try later.')
    })

//      .allSettled
const otherPromise2 = Promise.allSettled([promise1, promise2])//выполнится при переходе всех промиссов внутри [] из состояния
    //pending в любое другое
otherPromise2
    .then((results) => {//results это МАССИВ РЕЗУЛЬТАТОВ
        console.log(results)
        let dataFromGoogle = results[0].status === 'fulfilled'
            ? results[0].value
            : {data: {vacancies: null}}

        let userFromDB = results[1].status === 'fulfilled'
            ? results[1].value
            : {name: results[1].reason}
        //console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name)
    })

//      .resolve
const resolvedPr = Promise.resolve([{}]) //сразу зарезолвленный
console.log(resolvedPr)
resolvedPr
    .then( data => console.log(data)) // выдаст в консоле массив, где сидит пустой объект
    .catch(error => console.warn(error))//не сработает

//      .reject
const rejectedPr = Promise.reject({message: 'some error'})//сразу речектнутый
console.log(rejectedPr)

rejectedPr
    .then( data => console.log(data)) // не сработает
    .catch(error => console.warn(error))//выдаст в консоле {message: 'some error'}

// цепочки промиссов!!


// ASYNC AWAIT

function  wait (ms: number) {
    return new Promise( (resolve) => {
        //setTimeout(() => {resolve()}, ms)//в браузере работает
    })
}
async function run () {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}
run();




