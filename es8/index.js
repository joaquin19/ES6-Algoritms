const data = {
    frontend: 'Joaquin',
    backend: 'Rorex',
    design: 'Yamileth',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Joaquin',
    backend: 'Rorex',
    design: 'Yamileth',
}

const value = Object.values(data);
console.log(value);
console.log(value.length);


const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----------'));
console.log('food'.padEnd(12, '-----------'));

const obj = {
    name: 'Joaquin',
}

// ASYNC Y AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) // false error
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log('Error');
        
    }
}

anotherFunction();