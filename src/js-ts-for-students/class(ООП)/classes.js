//чтоб вывести в консоль:
//C:\Users\Kompek\Desktop\it_incubator\JS-native>node src/js-ts-for-students/class(ООП)/classes.js

class User {

    //сделаем приватное св-во name
    #name = "" //его нельзя менять
    constructor(name, site, dOB) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dOB
    }

    hello() {//метод
        console.log(`Hello! My name is ${this.#name}!`)
    }

    //Гетер- это метод перед которым ставится get
    getName() {//ф-ия для работы с приватными св-вами
        return this.#name //теперь мы можем получить приватное св-во
    }

    get name() {//   GETTER
        return this.#name
    }

    //Сетер
    setName(value) {//ф-ия для работы с приватными св-вами
        this.#name = value
    }

    set name(value) {// SETTER
        this.#name = value
    }
}

//   ==========Создание однотипных объектов=============
const u1 = new User("Nikita", "www.it.com", "15.12")
const u2 = new User("Gleb", "www.B.com", "20.12")


//==========ООП ПРИНЦИПЫ=====
//---1------инкапсуляция------

//methods
u1.hello(); //в консоле: Hello! My name is Nikita!
u2.hello();
//privat #
console.log(u1.getName()) //вывели приватное св-во в консоль:Nikita
u1.setName("Gricha")//меняем приватное св-во
console.log(u1.getName()) //вывели изменёное приватное св-во в консоль:Gricha
//!!!!!getter setter!!!!!!
//хоть это и методы, но обращаемся как к св-ву через точку, без вызова
console.log(u1.name) //getter - вывели  приватное св-во в консоль:Gricha
console.log(u1.name = 'Nikita') //setter - вывели изменёное приватное св-во в консоль:Nikita

//---2------наследование--------

let users = [u1, u2]
users.forEach(u => u.hello())

class Coder extends User {
    constructor(name, site, dOB, tech) { //родительские, потом свои
        // чтоб сконструировать себя, нужно вызвать super()- так как Coder, это расширенный класс (от User)
        super(name, site, dOB);// только родительские, потом свои. Если оставить пустым, не наследует тогда

        this.tech = tech
    }

    code() {
        console.log(`hey, Im ${this.name} and Im coding now: клац-клац-клац, 
        I made ${this.site} by my super skills in ${this.tech}!`)
    }

    //хотим переопределить метод родителяЖ
    hello() {
        super.hello();//оставляем всё, что было у родителя
        console.log(`don't cry, I'll teach you`)//это только у кодеров будет
    }
}

const coder1 = new Coder('Nikitos', 'www.bestjsfrom.me', '15.12', 'ultra-super-mega-JS+TS')
coder1.code()
coder1.hello()

//----3-------полиморфизм------

let users2 = [u1, u2, coder1]//разные объекты на одном родительском классе
users2.forEach( u => u.hello())//будет делать каждый, как умеет