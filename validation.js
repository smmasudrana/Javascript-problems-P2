//input parameter valid with number
function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){    //sudhu number input dile kaj korbe
        return 'please provide a number';
    }
    const mult = num1 * num2;
    return mult;
}

const result =multiply(50, 5);
console.log(result); 


//input parameter valid with string
function fullName(first, second){
    if(typeof first !== 'string' || typeof second !== 'string' ){   //sudhu string input dile kaj korbe.
        return 'please provide a string'
    }
    const name = first + ' ' + second;
    return name;
}

const ffullName = fullName('Masud', 'Sarker');
console.log(ffullName); 