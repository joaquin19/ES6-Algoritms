let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));


let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));


let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart());


let hello = 'hello world    ';
console.log(hello);
console.log(hello.trimEnd());


let entries = [['name', 'Joaquin'], ['age', 29]];
let entriesconvert = Object.fromEntries(entries);
console.log(Object.fromEntries(entries));
console.log(entriesconvert);


let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);

