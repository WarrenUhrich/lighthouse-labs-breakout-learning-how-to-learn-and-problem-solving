**Definition**: A re-usable (often named) piece of code.

**Related Terms**:
* Parameter: A value our function is expecting, we can name this (like a variable.)
* Argument: A value being passed into a function during execution.
* `return`: A keyword used to give a result when a function executes. If there is no return, the default is `undefined`.
* Function Declaration: 
* Function Expression: 
* Hoisting: The interpreter reads the code before execution, and notes any `function declarations` or `var`s.

**Code Example(s)**:

```js

helloWorld('Other');

// Define a function:

// Function Declaration
// keyword functionName (parameters)
function helloWorld(name) { // We can set a name for in-coming values, called a parameter
	// console.log('Hello, ' + name);
	return 'Hello, ' + name; // Return allows us to "give away" a result value
}

// Execute a function:
const helloString = helloWorld('World'); // We can pass in a value called an argument
console.log(helloString);


// Function Expression
const addTwoNums = function(num1, num2) {
	return num1 + num2;
};

const answer = addTwoNums(5, 3);
console.log(answer); // 8
```