// create a function and convert seer to moon 

const seerToMoon = function (seer) {
    if (seer < 0) {
        return "Please enter a possitive number"
    } if (seer != "number") {
        return "please enter a number"
    }
    const moon = seer / 40;
    return moon;
}

const seer = "abul";
const totalMon = seerToMoon(seer);
// console.log(totalMon);

// total seels 
const getTotalSeals = function (shart, pant, tShart) {
    if (shart < 0) {
        return "shart!! enter a possitive number"
    };
    if (pant < 0) {
        return "pant!! enter a possitive number"
    };
    if (tShart < 0) {
        return "tShart!!enter a possitive number "
    };
    const perShartPrice = 500;
    const perPantPrice = 1000;
    const perTshart = 15;
    const shartPrice = perShartPrice * shart;
    const pantPrice = perPantPrice * pant;
    const tShartPrice = perTshart * tShart;
    const total = shartPrice + pantPrice + tShartPrice;
    return total;
}

const shartQuantity = 4;
const pantQuantity = 5;
const tShartQuantity = 10;
const totalSeals = getTotalSeals(shartQuantity, pantQuantity, tShartQuantity);

// console.log(totalSeals);

// perfacet friend 
var friens = ["Asif", "Rohim", "Rohan", "Abul", "Khalid", "Jobayer", "Md. Arif", "Boktiyar", "Jibon Ghosh"];
function perfectFriend(arr) {
    var large = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length == large.length) {
            large = arr[i];
        }
    }
    return large;
}
// console.log(perfectFriend(friens));



