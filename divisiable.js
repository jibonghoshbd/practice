/* for (let i = 0; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foobar")
    } else if (i % 3 == 0) {
        console.log("foo")
    } else if (i % 5 == 0) {
        console.log("bar")
    } else {
        console.log(i)
    }
}
 */

// find the cheapest phone in an arry of object 
const phones = [
    { name: "Samsung s5", price: 40000, color: "Blue", stroage: "32gb" },
    { name: "Oppo", price: 30000, color: "Black", stroage: "32gb" },
    { name: "Realmi", price: 25000, color: "Black", stroage: "32gb" },
    { name: "Nokia", price: 45000, color: "Blue", stroage: "32gb" },
    { name: "Alton", price: 15000, color: "Blue", stroage: "16gb" }

];

const cheapestPhonePrice = function (phones) {
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const cheapestPhone = cheapestPhonePrice(phones);
// console.log("This is cheapeast phone is:", cheapestPhone)


// find the expensive phone in an arry of object


const expensivePhonePrice = function (phones) {
    let expensive = phones[0];
    for (const phone of phones) {
        if (phone.price > expensive.price) {
            expensive = phone;
        }
    }
    return expensive;
}

const expensivePhone = expensivePhonePrice(phones);
// console.log("This is expensive phone is;", expensivePhone)