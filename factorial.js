function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const firstFactorial = getFactorial(5)
// console.log("my first factorial value", firstFactorial)

const secoundFactorial = getFactorial(10);
// console.log("my secound factorial value", secoundFactorial)


// write a function to find the lergest number 

function largestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
const firstNumber = 50;
const secoundNumber = 150;
const thirdNumber = 40;
const myLargestNumber = largestNumber(firstNumber, secoundNumber, thirdNumber)
// console.log("This is largest number", myLargestNumber)


// write the funcation to find the smolest number 

const smolestNumber = function (num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
const firstSmolestNumber = 10;
const secoundSmolestNumber = 20;
const thirdSmolestNumber = 30;
const mySmoloestNumber = smolestNumber(firstSmolestNumber, secoundSmolestNumber, thirdSmolestNumber)

// console.log(mySmoloestNumber)

// sum of all numbers in an arry 

const sumOfArry = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const sumArry = [25, 20, 15, 48, 64];
const totalArry = sumOfArry(sumArry);
// console.log(totalArry)

// multiply of all number in an arry 

const getMultiplyArry = function (numbers) {
    let multiply = 1;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        multiply = multiply * element;
    }
    return multiply;
}
const multiplyArry = [10, 25, 44, 5, 47, 25]
const totalMultiplay = getMultiplyArry(multiplyArry);
// console.log(totalMultiplay)