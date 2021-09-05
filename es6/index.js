function newFunction(name, age, country) {
    var name = name || 'Joaquin';
    var age = age || 29;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Joaquin', age = 29, country = 'MX') {
    console.log(name, age, country)
}

newFunction2();
newFunction2('Yamileth', 28, 'SZ');

let hello = 'Hello';
let world = 'World';
let epicPharse = hello + ' ' + world + '!!!'

console.log(epicPharse);
let newPharse = `${hello} ${world}!!!` //es6
console.log(newPharse);

let lorem = 'asdasdasdasd \n' + 'nalskdla';
let lorem2 = `dasdASDASD 
              SADASD8pie`; // es6

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Joaquin',
    'age': 29,
    'country': 'MX'
}

console.log(person.name, person.age); // es6

let { name, age } = person // es6 plus
console.log(name, age);


let team1 = ['Joaquin', 'Yamileth', 'Julian'];
let team2 = ['Oscar', 'Valeria', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

// var se define una variable que esta dispobnible de forma global
// let solo esta disponible en el scope o en el bloque de codigo donde se llama

{
    var globalVar = 'Variable Global';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
    
}
console.log(globalVar);
console.log(globalLet); // error

const a = 'b'; // es una constante por ende no puede ser modificado
a = 'a';
console.log(a);

let name = 'Joaquin';
let age = 29;

obj = { name: name, age : age};
obj2 = { name, age}; // es6
console.log(obj2);

const names = [
    {
        name: 'Joaquin',
        age: 29,
    },
    {
        name: 'Yamileth',
        age: 28,
    }
]

let lisOfName = names.map(function (item){
    console.log(item.name);
})

let lisOfNames = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

//PROMESAS en algun timepo ocurrira algo que indicamos

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('HEY!! is ok');
        } else {
            reject('Ups!! error');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('holi'))
.catch(error => console.log(error));

// CLASES
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));


import {hello } from './module';
hello();


function* helloWorld() {
    if (true) {
        yield 'hello';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

