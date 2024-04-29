// Build a function that adds an array of numbers and gives us the sum.

/**
 * 1) Identify INPUT -> Array(Numbers)
 * 2) Identify OUTPUT -> Sum -> Number
 * 3) Plan the PROCESSING
 */

/**
 * Sum array of numbers.
 * 
 * @param {Array<Number>} numArr - Array of numbers.
 * @return {Number} - Sum of all numbers in the array.
 */
const sumArrOfNums = function(numArr) {
    let sum = 0;

    // PROCESSING PLAN:
    // 1) Iterate through the array
    for(let i = 0; i < numArr.length; i++) {
        // 2) Add number to our sum
        const num = numArr[i];
        sum = sum + num;
    }
    
    return Number(sum);
}

const exp1 = sumArrOfNums([1, 2, 3]);
console.log('Expect:', 6, 'Got:', exp1);

const exp2 = sumArrOfNums([2, 2, 3]);
console.log('Expect:', 7, 'Got:', exp2);
