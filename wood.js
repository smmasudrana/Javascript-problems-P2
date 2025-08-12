/**
 * chair --> 3 cft.
 * table --> 10 cft.
 * bed --> 50 cft.
 */

function woodQuantity(chairQuantity , tableQuantity, bedQuantity){
    const perChairWood =3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = chairQuantity * perChairWood;
    const allTableWodd = tableQuantity * perTableWood;
    const allBedWood = bedQuantity * perBedWood;

    const totalWoodNeeded = allChairWood + allTableWodd + allBedWood;

    return totalWoodNeeded;

}

const wood =woodQuantity(5, 2, 1);
console.log('total wood needed:', wood, 'cft');