    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    const member =  new person('lilits', 'lnameotro');
    person.getFullName = function() {
        return `${this.fname} ${this.lname}`
    }

    console.log(member.getFullName()); // TypeError
/******************************** */

const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)  // [ '🍇', '🍊', '🍎' ]
/******************************* */
class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  Dog.prototype.bark = function() {
    console.log(`Woof I am ${this.name}`);
  };
  
  const pet = new Dog('Mara');
  
  pet.bark();
  
  delete Dog.prototype.bark;
  
  pet.bark(); // output woof i am mara TypeError

/********************************** */
  function compareMembers(person1, person2 = person) {
    if (person1 !== person2) {
      console.log('Not the same!');
    } else {
      console.log('They are the same!');
    }
  }
  
  const person = { name: 'Lydia' };
  
  compareMembers(person);

  const { name: myName } = { name: 'Lydia' };

console.log(name); // output they are the same!
/******************************** */
function addToList(item, list) {
    return list.push(item);
  }
  
  const result = addToList('apple', ['banana']);
  console.log(result);  // output 2

/********************************* */
  class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count) // output 3
//************************************** */
  setInterval(() => console.log('HI'), 1000) // 155, HI

/********************************************* */

const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
    .catch(err => console.log(err))    // output third
    
/******************************** */

const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)   // output { email: 'my@email.com', address: {} }

/************************************************** */

const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])   //output { emoji: '🐈', name: 'Sara' }

/*********************************** */
[...'Lydia'];  // output Array(5) [ "l", "a", "y", "l", "a" ]

/************************************ */

const config = {
    languages: [],
    set language(lang) {
      return this.languages.push(lang);
    },
  };
  
  console.log(config.language); // output undefined

  /************************************** */

  const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}                          // output  We don't have to buy bananas!

/**************************************** */
const teams = [
    { name: 'Team 1', members: ['Paul', 'Lisa'] },
    { name: 'Team 2', members: ['Laura', 'Tim'] },
  ];
  
  function* getMembers(members) {
    for (let i = 0; i < members.length; i++) {
      yield members[i];
    }
  }
  
  function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
      // ✨ SOMETHING IS MISSING HERE ✨
      yield getMembers(teams[i].members) //es el perdido
    }
  }
  
  const obj = getTeams(teams);
  obj.next(); // { value: "Paul", done: false }
  obj.next(); // { value: "Lisa", done: false }

  /************************************************* */

  const set = new Set([1, 1, 2, 3, 4]);

console.log(set);  // Set { 1, 2, 3, 4 }

/******************************************** */
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar(); 
foo();
baz();        // frist third second

/************************************************** */
// Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?
function getName(name) {
  const hasName = /****** !!name *** */
}

/********************************************** */
let e = 'mames';
console.log(e, console.log('e',e))

/******************************
 * e mames
mames undefined
En resumen primero se ejecuta el console log de dentro y luego lo de fuera con un undefina al final
 */

const string = 'NAVJ910304KI8'
console.log(string.slice(0, -9));
console.log(string.slice(4, -3));
console.log(string.slice(10));
