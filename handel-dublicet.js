/* // handel dublict in an arry of string

const names = ["abul", "kabul", "abul", "sabul", "jabul", "kabul", "jabul", "sabul"];

const handelDublect = function (name) {
    let unicq = [];
    for (const element of name) {
        if (unicq.indexOf(element) == -1) {
            unicq.push(element)
        }
    }
    return unicq;
}

const unicqName = handelDublect(names);
// console.log(unicqName) */


/* // handel dublict numbers in an arry
const numbers = [5, 4, 40, 2, 5, 40, 4, 2, 47];

const handelDublictNumber = function (num) {
    let unicq = [];
    for (const element of num) {
        if (unicq.indexOf(element) == -1) {
            unicq.push(element);
        }
    }
    return unicq;
}

const unicqNumber = handelDublictNumber(numbers);
console.log(unicqNumber) */

// findout the lowest number in an arry 

/* const numbers = [5, 4, 40, 2, 5, 40, 4, 2, 47];
const lowestNumber = function (number) {
    let lowest = number[0]
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const findLowestNumber = lowestNumber(numbers);
console.log(findLowestNumber) */

/* // handel dublict name in an arry 
const names = ["abul", "kabul", "abul", "sabul", "jabul", "kabul", "jabul", "sabul"];
const dubllictName = function (name) {
    const unicq = [];
    for (const element of name) {
        if (unicq.indexOf(element) == -1) {
            unicq.push(element);
        }
    }
    return unicq;
}

const unicqName = dubllictName(names);
console.log(unicqName) */

