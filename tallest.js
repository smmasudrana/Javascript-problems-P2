const heights = [65, 99, 68, 72, 78, 60, 65, 66];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is', max);


//min num get from array
const heights2=[64, 84, 63, 12, 64, 84, 35, 87]

function getMin(numbers){
    let min =numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const minnum=getMin(heights2);
console.log(minnum);