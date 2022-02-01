/* const fabonascciSerise = function (num) {
    const fabo = [0, 1]
    for (let i = 2; i < num; i++) {
        fabo[i] = fabo[i - 1] + fabo[i - 2];

    }
    return fabo;
}

const fiboSeries = fabonascciSerise([50])
console.log(fiboSeries)

 */
// create a fiboSerise 
const fiboSerise = function (num) {
    if (typeof num != 'number') {
        return 'please give me a number'
    } if (num < 2) {
        return ' plice give me a positive number '
    }
    fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const faboNumber = 10;
const fiboniscci = fiboSerise(faboNumber);
// console.log("fiboniscci serise", fiboniscci)

// find the fibo element of recursive method

/* const fibonasccie = function (n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonasccie(n - 1) + fibonasccie(n - 2);
}

const fiboElement = 9;
const fiboElementResult = fibonasccie(fiboElement);
console.log("fibonascci serise number is", fiboElementResult) */

const fibonascci = function (n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonascci(n - 1) + fibonascci(n - 2);

}

const fiboElement = 6;
const fiboResult = fibonascci(fiboElement);
// console.log("fibonassci serise number is", fiboResult)

// fint out the arry of height number

/* const getHeightNumber = function (num) {
    let heightNumber = 0;
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        if (element > heightNumber) {
            heightNumber = element;
        }
    }
    return heightNumber;
}

const numbers = [5, 10, 18, 25, 47, 30, 54, 11];
const findHeightNumber = getHeightNumber(numbers); */
// console.log(findHeightNumber)

// find out the loest number in an arry
/* const getLowestNumber = function (number) {
    let lowestNumber = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < lowestNumber) {
            lowestNumber = element;
        }
    }
    return lowestNumber;
}
const numbersArry = [5, 10, 18, 25, 47, 30, 11];
const findLowestNumber = getLowestNumber(numbersArry); */
// console.log(findLowestNumber)

// sum of all numbers in an arry
/*
const getSum = function (number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        sum = sum + element;
    }
    return sum;
}
let sumNumbers = [12, 11, 22, 24, 57, 74]
const sumResult = getSum(sumNumbers);
console.log(sumResult)

 */


// multiply of all numbers in an arry 

const getMultiply = function (number) {
    let multiplay = 1;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        multiplay = multiplay * element;
    }
    return multiplay;
}

const multiplayArry = [1, 2, 4, 2, 8, 4, 7]
const multiplyResult = getMultiply(multiplayArry);
console.log("Result of multiply", multiplyResult)