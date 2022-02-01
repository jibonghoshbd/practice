const getHeightNumber = function (number) {
    let heightNumber = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > heightNumber) {
            heightNumber = element;
        }
    }
    return heightNumber;
}
const numbers = [10, 15, 14, 09, 28, 48, 8]
const heightResult = getHeightNumber(numbers);
// console.log("This is height number", heightResult)


const getLowestNumber = function (number) {
    let lowestNumber = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element < lowestNumber) {
            lowestNumber = element;
        }
    }
    return lowestNumber;
}

const numberArry = [47, 25, 14, 64, 5, 24, 08, 99];
const lowestResult = getLowestNumber(numberArry);
console.log("This is smolest number ", lowestResult);

