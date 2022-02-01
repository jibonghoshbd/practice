// sum of resursive method
/* 
function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}

const totalSum = sum(6);
console.log(totalSum)
 */

/* let sum = 0;
for (let i = 6; i >= 0; i--) {
    sum = sum + i;
}
console.log(sum) */

// multiply of resrusive method 

const multiplay = function (n) {
    if (n == 1) {
        return 1;
    }
    return n * multiplay(n - 1);
}

console.log(multiplay(6))