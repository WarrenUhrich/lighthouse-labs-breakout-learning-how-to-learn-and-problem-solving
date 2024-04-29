**Definition**: A named value that we can reference, and sometimes manipulate, throughout our code.

**Related Terms**:
* `var`: Oldest. Can be re-assigned. [[Functions]]-scoped (lives and dies in function.)
* `const`: Cannot be re-assigned. Block-scoped (lives and dies in any block it starts in.)
* `let`: Can be re-assigned. Block-scoped (lives and dies in any block it starts in.)
* `Block Scope`: Curly braces assigned in is the only place it will exist.
* `Function Scope`: Only exists in the `function` it starts in.

**Code Example(s)**:

```js

function() {
	var myBoolean = true;
}

{
	var myOtherValue = 123;
	const myString = 'Hello!';

	let num = 2;
	num = num + 1; // Can be re-assigned
}

myOtherValue; // Defined
myString;     // Not defined

```