/**
 * upto 0-100: ---> 120tk
 * more than 101-200: -->90tk
 * more than 200: --> 70tk
 */


function disconutedPrice(quantity){
    if(quantity <= 100){
        const totalPrice = quantity * 120;
        return totalPrice;
    }
    else if(quantity <= 200){
        const totalPrice = quantity * 90;
        return totalPrice;
    }
    else{
        const totalPrice = quantity * 70;
        return totalPrice;
    }
}


const disPrice = disconutedPrice(250);
console.log(disPrice);
