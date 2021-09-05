const reduced = [1, 2, 3, 4, 5].reduce((prev, next) => prev + next, 0);

console.log(reduced)
 /*******SUMA DE NUEMERO CHICOS******** */
const a = [5, 6, 10];
const b = [1, 6, 15];
let score = [0,0]
for (let i = 0; i < a.length; i++)
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
console.log(score);
 /***SUMA DE PUNTOS DE ACUERDO A LA PUNTUACION DE QUIEN SACO MAS SE LLEVA UN PUNTO**** */
const ar = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ];
const reduced = ar.reduce((prev, next) => prev + next, 0);
console.log(reduced)

/*******SUMA DE NUMEROS GRANDES********/
const arr = [[11, 2, 4],[4, 5, 6],[10, 8, -12]];
let n = arr.length; 
let d1 = 0;
let d2 = 0;
for(let i=0; i<n; i++){
   for(let j=0; j<n; j++){
     // finding the sum of primary diagonal
       if(i === j) {
         d1 += arr[i][j];
       }
     // finding the sum of secondary diagonal
       if(i + j === n - 1){
          d2 += arr[i][j];
       }
    }
}
console.log(Math.abs(d2 - d1));
 /*******DIFEREENCIA DE LA SUMA DE UNA MATRIZ CUADRADA EN DIAGONAL****** */
let arr = [ -4, 3, -9, 0, 4, 1 ];
let length = arr.length
let positive = 0
let negative = 0
let zero = 0
for (let i = 0; i < length; i++){
    if (arr[i] > 0) {
        positive++
    }
    else if (arr[i] < 0) {
        negative++
    }
    else if (arr[i] == 0) {
        zero++
    }
}

const ratioPositive = round((positive / length))
const ratioNegative = round((negative / length))
const ratioZero = round((zero / length))

console.log( ratioPositive + "\n" + ratioNegative + "\n" + ratioZero )

function round(value) {
return Number(value).toFixed(6);
}
 /******SEPARA LOS VALORES + , - Y 0 DIVIDELOS ENTRE LO LARGO DE TODO EL ARREGLO**** */
 const n = 6;
 for (let i = 1; i <= n; i++) {      
    console.log(" ".repeat(n-i) + "#".repeat(i))
}
/******staircase********** */
const arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((a, b) => a + b);
let maxVal = Math.max(...arr);
let minVal = Math.min(...arr);
console.log((sum - maxVal) + ' ' + (sum - minVal));
/***suma 4 de los valores y saca la suma mas alta y la mas baja***** */
const arr = [3, 1, 2, 3];
let high = Math.max(...arr);
let findHigh = arr.filter(x => x === high);
console.log(findHigh.length);

/*****ENCUENTRA LOS VALORES MAS ALTOS Y DEVUELVE CUANTOS SON****** */
const s = '07:05:45PM'
const arr = s.slice(0,8).split(':');
arr[0] = (s.indexOf('PM') > -1) ?
     (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
     (arr[0] == 12 ? '00' : arr[0]);
console.log(arr.join(':'));
/*******CONVERTIR LA HORA NORMAL A HORA MILITAR******* */
const grades = [73, 67, 38, 33];
let roundedGrades = [];
for (let i = 0; i < grades.length; i++) {
    let difference = multipleOfFive(grades[i]);
    let finalGrade = difference + grades[i];
    
    if ((difference < 3) && (finalGrade >= 40)) {
        roundedGrades.push(finalGrade);
    } else {
        roundedGrades.push(grades[i]);
    }
}
console.log('Grados redondeados: ', roundedGrades);
function multipleOfFive(x){
  let counter = 0;
  while (x % 5 != 0) {
      x++;
      counter++;
  }
  console.log('calcula los valores a redondear: ', counter);
}
/******REDONDEO DE CALIFICACIONES*********** */