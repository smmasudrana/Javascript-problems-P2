const products = [
    {name: 'wallet', price:620},
    {name: 'medicine', price:999},
    {name: 'shirt', price:500},
    {name: 'pant', price:700},
    {name: 'watch', price:580},
]

function totalProductsPrice(products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price;
    }
    return sum;
}

const totalPrice = totalProductsPrice(products);
console.log(totalPrice);