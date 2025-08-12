const mim = 85;
const jim = 76;
const dim = 94;

if(mim > jim && mim > dim){
    console.log('mim is the boss')
}
else if(jim > mim && jim > dim){
    console.log('jim is the boss')
}
else{
    console.log('dim is the boss')
}

//inside a function
function whosBoss(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

allNumbers=whosBoss(716, 645, 865);
console.log(allNumbers);


//shortcut way
const examNumbers=Math.max(65, 63, 69, 32, 47, 98, 50, 35, 54)
console.log(examNumbers);