'use strict';

//////////////////////////////////////////
//The Javascript Engine and Runtime
/*
Javascript engine is a computer program that executes Javascript code.
Javaxcipt engine always contains a Call Stack and a Heap.

The Call Stack is where our code in executed using something called Execution Contexts.
The Heap in an unstructured memory pool which stores all the objects that our application needs.

---Compilation & Interpretation---

1. Compilation:
Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer:
(Source Code)⏩Step 1-Compilation⏩(Portable file:Machine Code)⏩Step 2-Execution⏩(Program Running)
Eg. Any application you are using on your computer right now has been compiled before and you are using it way after it's compilation.

2.Interpretation
Interpreter runs through the source code and executes it line be line:
(Source Code)⏩Step 1-Execution Line by Line⏩(Program Running)
The source code still needs to be converted to machine code but it happens right before it is executed and not ahead of time.

3.Just-in-Time(JIT) Compilation ---Javascript---
Entire cod is converted into machine code at once, then executed immediately:
(Source Code)⏩Step 1-Compilation⏩(Machine Code: NO PORTABLE FILE TO EXECUTE!)⏩Step 2-Execution⏩(Program Running)
The execution happens immediately after compilation.

How this work:

1.Javascipt code enters engine
  ⏬
2.Parsing(Read Code) into AST abstract syntax tree.
Splits code into tree in meaningfull pieces eg. const's and functions.
Checks for syntax errors. 
This tree will be used to generate machine code.
This has nothing to do with the DOM.
  ⏬
3.Compilation               ⏪                ⏪                 ⏪ 
Takes the generated AST in compiles it into machine code.        
This gets executed right away                                    ⏫
  ⏬                                                             
4.Execution                                                      ⏫
Execution happens in the Javascript engine Call Stack.           
  ⏬                                                             ⏫
5. Optimization: 
Javascript executed code but then reruns the code and recompiles when program is already running.
After every execution the old code is swap for new optimized code without stopping execution.


Javascript Runtime
Runtime in browser:
Javascipt Runtime is like a big container including all the things we need to use Javascript(in this case the browser)
1. The heart of any Javascript Runtime is always the Javascript Engine(eg. Google V8)
2. We also need access to we API's.
API's are functionalities provided to the engine but are not part of the Javacript language itself.
3. CallBack Queue
This is a data structure that contains all the callback functions that are ready to be executed
Eg. We attach eventHandler functions to DOM elements like a Button to react to certain events.
These eventHandler fuctions are also called callback functions
Event Loop:
The event loop takes CallBack function from the CallBack Queue and puts them in the Call Stack so that they can be executed.

Javascript can exist outside of browser Eg. Node.js


//////////////////////////////////////////
//Execution Context and the Call Stack

1.Compilation
  ⏬ 
2.After compilation a Global Execution Context is created(for top level code)   
Top level code is any code that is not inside any function.
In the beginning only code that is outside of functions will be executed.

Execution Context:
In JavaScript, an execution context is like a "box" where the code is evaluated and executed. 
It is the context environment in which the Javascript code is executed.
It contains everything JavaScript needs to run your code, like:
Where your variables are stored.
  ⏬
3.Execution of Functions and waiting for Callbacks     
One execution context per function: For each function call, a new execution context is created. 
The same goes for methods.
When functions are executed the engine will wait for Callbacks to arrive so that it can execute these.

--------------------------------------------------------------------

What is inside a Execution Context:
  
  1. Variable Enviroment
    - let, const and var declarations
    - functions
    - argument objects (Contains all the arguments that were passed into the function that the current execution context belongs to.)
      Because each functions gets it's own execution context as soon as the function is called.

  2. Scope Chain(To be continued below)

  3. This Keyword

These three are generated in the "creation phase", right before execution.
Note: Arrows functions to not get there own arguments object or the this keyword.
      They can use the arguments object and this keyword from their closest function parent.

This is where the Call Stack comes in:
The Call Stack is a place where execution contexts get stack on top of each other, to keep track of where we are in the programs execution. 
The execution context that is on top of the stack is the one currently running.     
When it has finished running it will be removed from the stack and execution will go back to the previous execution context.

//////////////////////////////////////////
//Scope and The Scope Chain

Scoping:
How the program's variables are organized and accessed. Where do variables live? OR Where can we access a certain variable, and where not?

Lexical Scoping:
Scoping is controlled by placement of functions and blocks in the code.
Variable scoping is influenced by where exaclty we write our functions and code blocks.
Eg. a Function inside a function can access that functions variables.

Scope:
Space or enviroment where a certain variable is declared(variable environment in case of functions, which is stored in the functions execution context). 
What the difference between scope and varaiable environment? In the case of functions it is basically the same.
In Javascipt we have the global scope, function scope and block scope.

Scope of a variable:
Region of our code where a certain variable can be accessed.

--------------------------------------------------------------------

Three Different types of Scopes in Javascript:

1. Global Scope
  - For top level code.
  - Outside of any functions or blocks.
  - Variables declared in global scope are accesible everywhere.

2. Function Scope  
  - Each function creates a scope.
  - Variables declared inside that scope are only accesible inside that function. NOT outside.
  - Also called Local Scope. 

3. Block Scope(ES6)  
  - Starting in ES6 blocks also create scopes now.
  - Variables are only accessible inside the block(Block Scoped) 
    This is everthing inside curly braces such as if statement and for loop.
  - This only applies to let and const variables, NOT var.
  - Block Scopes don't apply to variables declared with var. var is Function Scoped and not Block Scoped.
  - Functions are also block scopes in strict mode.

--------------------------------------------------------------------

The Scope Chain:

  - Every scope always has access to all the variables to all it's outer scopes(Parent Scopes).
  - If a scope can't find a variable inside the current scope it will look up in the scope chain and see if it can find it in one of the parent scopes. This is called Variable Lookup.
  - This does not work the other way around. a Parent Scope cannot access a Inner Scope(Child Scope).
  - If for eg. we have two child scopes inside a parent scope, they are sibling scopes and they do not have access to each others variables. Because the on is not written inside the other one. Scope chain only work upwards and not sideways.

--------------------------------------------------------------------

Difference between The Scope Chain and The Call Stack:

  -  Scope Chain is the order in which functions are written in the code. Has nothing to do with the order in which functions were called.
  - Has nothing to with the order of the execution context in the Call Stack.
  - The Scope Chain does get the variable enviroment from the Call Stack but that is it.
  - The order on function calls are not relevant to the scope chain.

*/

//////////////////////////////////////////
//Scoping in Practice

// function caclAge(birthYear) {
//   //Defined in Global Scope
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} is ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Creating new variable with same name as outer scope's variable.
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       //reassigning outer scope's variable.
//       output = 'NEW OUTPUT';
//     }
//     // console.log(str); We get an error because const an let are block scoped, meaning they are only available inside the block they are created. But will work with var inside the function.
//     console.log(millenial);
//     // console.log(add(2, 3));  will only work with strict mode off.
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// caclAge(1991);
/*
//////////////////////////////////////////
//Variable Enviroment: Hoisting and The TDZ

Hoisting:
  - Makes some types of variables accessible/usable in the code before they are declared. "Variables lifted to the top of their scope"
  - What happens behind the scenes is that: Before execution, the code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.
  - This happens in the creation phase of the execution context.


How hoisting works for variable types:

  1. Function Declerations:
    Hoisted:        ✅
    Initial Value:  Actual Function
    Scope:          Block (in strict mode)

    - This means we can use function declaration before they are defined in the code.
    - Because they are store in variable environment object even before the code starts executing.

    eg. console.log(greet());  👉 Outputs: "Hello!"

        function greet() {
          return "Hello!";
        }

  2. var Variables:
    Hoisted:        ✅
    Initial Value:  undefined
    Scope:          Function   

    - If we try to access a var variable before it is declared in the code we get undefined.
    - One of the main reasons we don't use var in JavaScipt anymore.

  3. let & const Variables:
    Hoisted:        🚫
    Initial Value:  <uninitialized>, (TDZ)
    Scope:          Block  

    - It is as if hoisting was not happening at all. These variables are places in the Temporal Dead Zone(TDZ).
    - This means we can access these variables between the beginning of the scope and the place where these variables are declared.

  4. Function Expression & Arrow Functions:
    Hoisted:        ❓ Depends if they were created using var, const or let.
    Initial Value:  Depends if they were created using var, const or let.
    Scope:          Block  

    - They were created using variables and will then behave the same way.
    
--------------------------------------------------------------------

Temporal Dead Zone:
- The reason that the TDZ whas created is so that it is easier to avoid and catch errors.
- Accessing variables before declaration is bad practice and should be avoided.
- TDZ also exist to make const variables work the way they are supposed to.

eg.:
const myName = 'Jonas';

if (myName === 'Jonas'){
console.log(`Jonas is a ${job}`); - TDZ - Not been declared yet.(ReferenceError: Cannot access 'job' before initialization)
const age = 2037 - 1989;          - TDZ
console.log(age);                 - TDZ
const job = 'teacher';
console.log(x); (ReferenceError: x is not defined)
}

Only once the code reaches the variable where it is declared it is initialized and safe to use.

//////////////////////////////////////////
//Memory Management: Primitives vs Objects

Every value we create in JavaScript goes through a memory lifecycle

1. Allocate Memory:
  Whenever we assign a value to a new variable, the engine automatically allocates a piece of memory to store the value.
      ⏬ 
2. Use Memory:
  As the app runs in the users browser the allocated piece of memory is used whenever the stored value is being accessed.
  Eg. To write, read or update the value.
      ⏬ 
3. Release Memory
When a value is not needed anymore it is deleted from memory and space opens up for new values. 

--------------------------------------------------------------------

Memory Allocation:

For different types of values, memory is actually allocated in different places in the JavaScript engine.

There are Primitive Values & Objects

Primimtive Data Types:        Objects:
  - Numbers                     - Object Literals
  - Strings                     - Arrays
  - Booleans                    - Functions
  - Undefined                   - Maps
  - Null                        - Sets
  - Symbol                      
  - BigInt                      

Primitive Values are stored in the Call Stack
Primitive Vlaues are stored in the execution context in which they are created.

Objects are stored in the Heap

References to Objects are also stored in the Call Stack.

Object References:

The variable in the Call Stack only stored the reference to the object in the heap.
When we copy the values of a variable to a new variable we are only copying the reference to that object but not the object itself.
This means that both the old and new variable point to exactly the same object in the heap.
Where as with Primitives, each variable holds its own copy of the value.
If we change a value inside the new variable then this will also change to value inside the old variable.(The old value gets replaces in all previous variables in the object)

Function also get stored in the heap.
So the variable of the function will hold reference to the functions object in the heap.

//////////////////////////////////////////
//Memory Management: Garbage Collection (Releasing Memory)

Call Stack:
Variable enviroment is simply deleted when Execution Context pops off the Stack, and the memory that they occupied is released for future usage.
Global variables will never be deleted.

Heap:
To delete old unused objects from the memory JavaScript engines employ a proces called Garbage Collection(Central Memory Management Tool)
Javascipt engines use an Algorithm called Mark-And-Sweep

1. Step 1 - Mark Phase
  - The Algorithm starts looking for all objects that are reachable from a root are marke as alive.
  - Roots are starting point where the algorithm start looking for alive or reachable objects.
  - We can have different roots but the most obvious is the Global Execution Context, and any other Execution Context of running functions.
  - Objects can aslo be reached by eventListerners, Active Timers and Closures.

2. Step 2 - Sweep Phase
  - Where all the unmarkered/unreachable object are deleted.
  - Objects in the Globel Execution Context(Global Scope) will never be deleted from the heap because it is always reachable through the Call Stack.

  Memory Leaks:
  - Memory Leaks happen when an object that is no longer needed by our application is incorrectly still reachable by the garbage collector from one of the roots.
  - This means the object is marked as alive and not deleted.
  - This happens when an object is still incorrectly references somewhere.
  - a Major source of this is unnecessary eventListeners and Timers.
  - When a Timers/eventListener creates an object the object will always be reachable until the developer deletes it when no longer needed.
  - So always deactivate Timers and eventListeners when no longer needed.
  - Also avoid declaring large objects as Global Objects.
  
*/
/*
//Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//The 'this' keyword
// The this keyword will always point to the  object calling the method.

console.log(this);

const caclAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
caclAge(1991);

const caclAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
caclAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

//Copied the method from one object to another(method borrowing)
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

//Will not work because it is a regular function call.
const f = jonas.calcAge;
f();
/////////////////////////////////////////////////////////////////
//This keyword with regular functions and arrow functions
//Never use an arrow function as a method

var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    //Using self keyword to preserve the this keyword
    // const self = this; //self of that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solutions 2
    //Using arrow function inside a method
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

//Never use an arrow function as a method

jonas.greet();
jonas.calcAge();

//Arguments keyword
//The arguments keyword is only available in regular functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

//undefined in arrow functions
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8, 12);


//Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);

//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

//Copying Objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//Object.assign creates a shallow copy the only copies the properties in the first level.
//Did not change the family object because the array in the object is a deeply nested object.
const jessicacopy = Object.assign({}, jessica2);
jessicacopy.lastName = 'Davis';
jessicacopy.family.push('Mary');
jessicacopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicacopy);

*/
