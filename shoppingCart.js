const products = [
    {name: 'wallet', price:620, quantity: 7},
    {name: 'medicine', price:999, quantity: 2},
    {name: 'shirt', price:500, quantity: 5},
    {name: 'pant', price:700, quantity: 2},
    {name: 'watch', price:580, quantity: 6},
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductcost= product.price * product.quantity;
        total = total + thisProductcost;
    }
    return total;
}

const shopCost = cartTotal(products);
console.log(shopCost);