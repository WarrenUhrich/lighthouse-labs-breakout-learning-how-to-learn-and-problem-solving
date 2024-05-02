
**Definition**: a stored value with a name.

**Related Terms**:
* We can store `primitives` and more complex data-types like `Array` or `Object`
* `const`: This named value *CANNOT* be re-assigned. Block-scoped.
* `let`: The named value *CAN* be re-assigned. Block-scoped.
* `var`: The named value *CAN* be re-assigned. `var`-based variables are hoisted, won't crash the program if you reference them before assignment. Function-scoped.
* Block Scope: The variable lives and dies in the curly braces it is defined in.
* [[Functions]] Scope: The variable live and dies in the function it is defined in.

**Code Example(s)**:

```javascript

// We can create a variable like so!
const myVal = 123;
// We can't re-assign a const variable.

// We can also create one like this!
let myVal2 = 'Hello, World!';
// This CAN be re-assigned.
myVal2 = 567;

```
