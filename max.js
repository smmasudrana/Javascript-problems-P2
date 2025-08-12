const disha = 56;
const salman = 80;
if(disha > salman){
    console.log('disha get the warm clap')
}
else{
    console.log('salman get the warm clap')
}

//samething inside the function.
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const numbers =getMax(56, 80);
console.log(numbers);