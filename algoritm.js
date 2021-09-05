
const items = ["X:-1", "Y:1", "X:-4", "B:3", "X:5"];
let numbersX = [];
let numbersY = [];
let numbersB = [];
let numbersA = [];
let numbersZ = [];
let sumNumbersX;
let sumNumbersY;
let sumNumbersB;
let sumNumbersA;
let sumNumbersZ;
let letter = [];
let finalLetter; 
for (var i=0; i < items.length; i++){
    let newGP = items[i].split(':', -1);
    switch (newGP[0]) {
        case 'X':
            numbersX.push(Number(newGP[1]));
            sumNumbersX = numbersX.reduce((p, n) => p + n, 0);
        break
        case 'Y':
            numbersY.push(Number(newGP[1]));
            sumNumbersY = numbersY.reduce((p, n) => p + n, 0);
        break
        case 'B':
            numbersB.push(Number(newGP[1]));
            sumNumbersB = numbersB.reduce((p, n) => p + n, 0);
        break
        case 'A':
            numbersA.push(Number(newGP[1]));
            sumNumbersA = numbersA.reduce((p, n) => p + n, 0);
        break
        case 'Z':
            numbersZ.push(Number(newGP[1]));
            sumNumbersZ = numbersZ.reduce((p, n) => p + n, 0);
        break
        default:
            console.log(newGP[0]);
    }

    letter.push(newGP[0].toString())
    let value = Array.from(new Set(letter.map(a => a.id))).map(id => {
        return letter.find(a => a.id === id)
    })

    for (const ltr of letter) {
        if (ltr !== 'X') {
            value.push(ltr)
        }
    }
    
    let regroup = [];
    regroup.push(sumNumbersX, sumNumbersY, sumNumbersB)
    const regrouppAll = value.map((e, i) => `${e}:${regroup[i]}`);
    const newRGA = new Array(regrouppAll.slice(1,3)[1], regrouppAll.slice(1,3)[0]); 
    console.log(newRGA);   

    // console.log(value, [sumNumbersX], [sumNumbersY], [sumNumbersB]);
}

/* 
    queria repetir el ciclo validando las 
    letras pero algo no logre solucionar que no me permite realizar la suma,
    al final solo es reagrupar y hacer un join como en este ultimo return
**/



function texto()
{
	var palabra=prompt("ana").toLowerCase();
 
	// eliminamos los espacios en blanco
	palabra=palabra.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}