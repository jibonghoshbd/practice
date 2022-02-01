/* // search products in an arry of object 

const products = [
    { name: "iPhone", price: 120000, color: "black" },
    { name: "samgsung phone", price: 20000, color: "black" },
    { name: "lg phone", price: 15000, color: "black" },
    { name: "watch", price: 1200, color: "black" },
    { name: "laptop", price: 32000, color: "black" },
    { name: "alton phone", price: 12000, color: "black" },
]

const searchProducts = function (products, searchTex) {
    let matchProduct = [];
    for (const product of products) {
        const productName = product.name;
        if (productName.indexOf(searchTex) != -1) {
            matchProduct.push(productName);
        }
    }
    return matchProduct;
}

const searchText = "Phone";
const searchTextConvert = searchText.toLowerCase();
const searchResult = searchProducts(products, searchTextConvert)
console.log(searchResult)
console.log(searchProducts(products, 'watch')); */




