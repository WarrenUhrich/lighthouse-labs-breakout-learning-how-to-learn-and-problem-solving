// Build a function that adds an array of numbers and gives us the sum.

/**
 * INPUT:
 * - parameter
 * - Array<number>
 * - [1, 2, 3]
 * 
 * OUTPUT:
 * - return
 * - number
 * - 6
 * 
 * PROCESSING:
 * - Create a sum variable to keep track of any adding we do
 * - We have an array, so a for...of loop can help us get each number, one at-a-time
 * - Store each number in a variable, and add it to a sum variable
 * - return the value from our function
 */

/**
 * Sums the numbers in an array.
 * 
 * @param {Array<number>} arrOfNums - Array of numbers to add.
 * @return {number} - Sum of the array numbers.
 */
const sumOfArr = (arrOfNums) => {
    let sum = 0;

    // processing...
    // 1) ✔ make sum variable
    // 2) ✔ for...of loop for array
    for(const num of arrOfNums) {
        // 3) ✔ Add this num to the sum variable
        sum = sum + num;
    }

    // 4) ✔ Return summed number result
    return sum;
};

let result = sumOfArr([1, 2, 3]);
console.log('sumOfArr([1, 2, 3]) = ', result, 'Should be:', 6);

result = sumOfArr([5]);
console.log('sumOfArr([5]) = ', result, 'Should be:', 5);

result = sumOfArr([8, -5, 2]);
console.log('sumOfArr([8, -5, 2]) = ', result, 'Should be:', 5);
