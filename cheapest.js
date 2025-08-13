const mobiles = [
    {name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'iphone', price: 120000, camera: '12mp', color: 'black'},
    {name: 'walton', price: 29000, camera: '12mp', color: 'black'},
    {name: 'htc', price: 25999, camera: '12mp', color: 'black'},
]

function getCheapestPhone(phones){
    let cheap = phones[0];
    for(const phone of phones){
        if(phone.price < cheap.price){
            cheap = phone;
        }

    }
    return cheap;
}

const cheap = getCheapestPhone(mobiles);
console.log(cheap);