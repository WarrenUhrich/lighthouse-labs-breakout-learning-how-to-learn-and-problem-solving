
**Description**: a re-usable block of code that performs a specific task. It can take-in values and return a result value.

**Related Terms**:
* Parameters: Values our function expects to be passed-in.
* Arguments: Values being passed into a function during running/execution of the function.
* `return`: The value given by the function at end of execution.
* Declaration: Hoisted and difficult to keep track of, therefore has fallen out of favour.
* Expression: Looks like a regular assignment, can be created with `const` or `let`.
* Arrow: Looks like a regular assignment, can be created with `const` or `let`. Arrow functions lack binding of the `this` keyword.

**Code Example(s)**:

```javascript

/**
 * Function Declaration
 */
function hello() {
  return 'Hello!';
}

/**
 * Function Expression
 */
const hi = function() {
	return 'Hi!';
};

/**
 * Arrow Function
 */
const greetings = () => {
	return 'Greetings!';
};

// Function with parameters:
const sayHello = (name) => { // This is a parameter: name
	return `Hello, ${name}!`;
};

// Example of executing a function and storing its return value
const message = sayHello('George'); // George is an example of an argument

```
