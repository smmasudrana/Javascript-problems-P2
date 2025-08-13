// function layerDiscountedTotal(quantity){
//     const first100Price =100;
//     const second100price= 90;
//     const above200Price= 70;

//     if(quantity <= 100){
//         const total =quantity * first100Price;
//         return total;
//     }
//     else if(quantity <= 200){
//         const first100Total=100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal= remainingQuantity * second100price;
//         const total=first100Total + remainingTotal;
//         return total;
//     }
//     else{
//         const first100Total= 100* first100Price;
//         const second100Total= 100* second100price;
//         const remainingQuantity= quantity - 20;
//         const remainingTotal= remainingQuantity *above200Price;
//         const total= first100Total + second100Total + remainingTotal;
//         return total;
//     }
// }



// ফাংশন ডেফিনশন
function layerDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    } 
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100price;
        const total = first100Total + remainingTotal;
        return total;
    } 
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100price;
        const remainingQuantity = quantity - 200; 
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}


const totalBill = layerDiscountedTotal(250);
console.log("Total bill:", totalBill);



//-----------------------------
function calculateTotalPrice(quantity) {
    const priceTier1 = 100;  // প্রথম ১-১০০ পিস পর্যন্ত
    const priceTier2 = 90;   // ১০১-২০০ পিস পর্যন্ত
    const priceTier3 = 70;   // ২০০-এর বেশি

    let total = 0;

    if (quantity <= 100) {
        total = quantity * priceTier1;
    }
    else if (quantity <= 200) {
        const tier1Units = 100;
        const tier2Units = quantity - 100;

        total = (tier1Units * priceTier1) + (tier2Units * priceTier2);
    }
    else {
        const tier1Units = 100;
        const tier2Units = 100;
        const tier3Units = quantity - 200;

        total = (tier1Units * priceTier1) + (tier2Units * priceTier2) + (tier3Units * priceTier3);
    }

    return total;
}

const totalCost = calculateTotalPrice(250);
console.log("Total price:", totalCost);