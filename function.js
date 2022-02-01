// function funName(num1, num2) {
//     var sum = num1 + num2;
//     return sum;
// }
// var firstNumber = 10;
// var secoundNumber = 20;
// var total = funName(firstNumber, secoundNumber);
// console.log(total);


// continue
var numberArry = [10, 20, 40, 51, 60, 70, 15, 35]
for (var i = 0; i < numberArry.length; i++) {
    var element = numberArry[i];
    if (element > 50) {
        continue;
    }
    // console.log(element);
}

// break
// for (var i = 0; i < numberArry.length; i++) {
//     var number = numberArry[i];
//     if (number > 50) {
//         break;
//     }
//     console.log(number);
// }

// var phones = ['vivo', 'sumsung', 'shoumi', 'lg']

// if (phones.indexOf('opp') == -1) {
//     console.log('Opps! its not avaibale');
// }
// if (phones.indexOf('vivo') != -1) {
//     console.log("vivo is avaiable");
// }

// object 

var microPhone = {
    brand: "iPhone",
    color: "black",
    price: 250,
    isAvaiable: true,
}

// console.log(microPhone.isAvaiable);
// console.log(microPhone.color);


// functional odd Number 

function isOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
// let myOddNumber = 50;
// let oddResult = isOdd(myOddNumber)
// console.log('My odd Numberis', oddResult);
// let herNumberOdd = 47841;
// let herOddResult = isOdd(herNumberOdd)
// console.log(" Her Odd Number is", herOddResult);

// functional even number 
function isEven(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

// const myEvenNumber = 25441;
// const myEvenResult = isEven(myEvenNumber)
// console.log(myEvenResult)


// leap year calculate 

function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    return false;
}
// const leapYearCount = 2024;
// const leapYearResult = leapYear(leapYearCount)
// console.log("Is leap Year", leapYearResult)

function leapyear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return "is leap year";
    }
    return "is not leap year";
}

// const myYear = 2030;
// const isLeapYear = leapyear(myYear)
// console.log(isLeapYear)
// const yourYear = 2024;
// const isYourLeapYear = leapyear(yourYear);
// console.log(isYourLeapYear)