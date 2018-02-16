
# The Goal
Your goal is to demonstrate (to yourself, mostly) that you have learned enough fundamentals of JavaScript and programming to be able to jump into the full time course. This is a essentially a spring board that allows you to go deeper into the waters of programming.

## Some things you should have already seen
- Dev tools
- console.log
- Data types
- Operators
- Variables
- Comparing values
- Booleans
- If...Else Statements
- Logical Operators
- Ternary Operator
- Switch Statements
- Loops
- Functions
- Arrays / Array methods
- Objects
---

## Quick Code Review
Try writing some JavaScript that will do the following:

1. Declare a variable that is an empty array that will eventually hold a list of students.
2. Make a student object variable (your name) that has the following properties: firstName, lastName, email, and favoriteHobbies (3 hobbies please).
3. Write a function that when invoked, will log the student object passed to it.
4. Write another function that when invoked, will log the following:
```JavaScript
`My name is _firstName_, and I like to _first hobbie_.`
```

**Note:**
_If you are struggling with this, don't worry. I will go over this after you have tried it._
---

## Writing Clean Code

### What is readability?
Code readability refers to writing code whose purpose is clear and self-explanatory, and whose syntax, layout, and structure are consistent and unsurprising.

Code with lots of inconsistencies requires more mental effort from the code reader, who must parse through random visual differences to determine what differences are actually meaningful.

Often that confused code reader is **you**.

Confusing yourself and struggling to parse your own code in the context of an interview is Bad News. Don't make things harder for yourself!

Follow these guidelines, and you'll be ok.

- Indentation
- Declaring Variables
- Symbols and Punctuation
- Operators
- Brevity
- Spacing
- Comments

### Indentation
When writing any block of code that is logically subordinate, that block should be indented two spaces more than the surrounding lines.

Convention would say to indent with **two** spaces. There is nothing wrong with using the <kbd>tab</kbd> key for faster typing; just make sure it is only indenting **two** spaces. Most IDE's (_Integrated Development Environment_) should already be setup this way.

Good:

```JavaScript
function functionName(){
  return value
}
```

Bad:

```JavaScript
function functionName() {
return value
}
```

Always **close** a block of code at the same level it was **opened**

Good:

```JavaScript
if (condition) {
  return value
}
```

Bad:

```JavaScript
if (condition) {
  return value
  }
```

### Declaring Variables

There are three different variables that exist in ES6 (_ECMAScript_)
1. `var`
2. `let` (_preferred for variable declaration_)
3. `const`

#### VAR

`var` variables can be re-declared...

```JavaScript
var name = 'Leslie'
var name = 'Tom'
console.log(name) // Tom
```
and updated.

```JavaScript
var name = 'Leslie'
name = 'Tom'
console.log(name) // Tom
```

#### LET

`let` variables can be updated...

```JavaScript
let name = 'Tammy'
name = 'Ron'
console.log(name) // Ron
```
but not re-declared.

```JavaScript
let name = 'Tammy'
let name = 'Ron'
console.log(name) //error: Identifier 'name' has already been declared
```

#### CONST

`const` cannot be updated or re-declared

```JavaScript
const name = 'April'
name = 'Andy' //error : Assignment to constant variable.

const name = 'April'
const name = 'Andy' //error : Identifier 'Andy' has already been declared
```

Long story short... we will be using `let`

#### Naming Variables

In JavaScript, we only use camel case when naming our variables. There are a few times it is acceptable to use snake case, but never use it for variables.

Camel Case:
```javascript
let addNumbers = (x, y) => { return x + y }
```

Snake Case:
```javascript
let subtract_numbers = (x, y) => { return x - y }
```

Dash Delimited:
```javascript
let multiply-numbers = (x, y) => { return x * y }
```

Under certain circumstances, you will see people use snake-casing for constants in Javascript.

```javascript
const MAX_ITEMS_IN_QEUE = 100
```

### Symbols and Punctuation

#### Quoting

There is functionally no difference between using single `'single'` or `"double"` quotes, but **single** quotes is simpler and it's a bit easier to read. The important thing is that you stay consistent with your usage.

Don't:

```JavaScript
let gun = 'Remington 700'
let caliber = ".308"
let color = "black"
```

Do:

```JavaScript
let gun = 'Remington 700'
let caliber = '.308'
let color = 'black'
```

#### Semicolons

There are many strong opinions over the use of `;`'s in the JavaScript community. Long story short, **semicolons are _not_ necessary**.

[You can check out this article to see why they are not necessary.](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)

### Operators

#### Use strict comparison operators

:white_check_mark: `===` and `!==`

:x: `==` and `!=`

Using `==` and `!=` will work in ways you **don't** expect and it **will** throw you off.

This comparison will evaluate `true` and log `'Equal!'`. because both `0` and `''` are **falsey** data types.

```JavaScript
if (0 == '') {
  console.log('Equal!');
} else {
  console.log('Not Equal!');
}
// Equal!
```

This comparison will evaluate `false` and log `Not Equal!`, because `0` and `''` **are not** equal in their specific data type **and** value.

```JavaScript
if (0 === '') {
  console.log('Equal!');
} else {
  console.log('Not Equal!');
}
// Not Equal!
```


For example:

```JavaScript
1 == '1' // true
1 === '1' // false
1 === 1 // true
```

#### _The_ Ternary Operator: `?`

This is the **only** operator in javascript that takes 3 operands. This is typically used as a shortcut to the `if...else` statement.

```JavaScript
if (x) {
  y
} else {
  z
}
// Becomes...

x ? y : z
```

_Think about it as if you are asking a question:_
Is `x` true `?` If it is, then do `y`. If it is not true, then do `z`.

### Brevity

REMEMBER! The less code the better. Always be thinking how you can make your code simpler and by extension, easier to read.

Good:

```JavaScript
function average(array) {
  return array.reduce((prev, curr) => prev + curr) / array.length
}
```

Acceptable, but longer:

```JavaScript
function average(array) {
  let sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}
```

Note: _Being able to write short and concise code may rely on knowing helpful JavaScript methods like_ `.reduce()`

### Spacing

#### Code density

Try to conserve vertical space in your code by limiting the number of lines you write. The more concise the code, the more context we can see on one screen.

Good:

```JavaScript
function multiply(x, y) {
  return x * y
}

function square(x) {
  return x * x
}
```

Bad:

```JavaScript
function multiply(x, y) {

  return x * y

}



function square(x) {
   return x * x
}
```

Avoid line length by minimizing complexity, but at the same time try to limit the number of lines you "have" to write. _There is a balance_

#### Padding and whitespace

Sometimes it is good to add additional spacing to certain lines of code to increase readability. Make sure you are consistent and don't over do it.

Good:

```javascript
console.log(' Hello everyone! I hope we are doing well today. ');
```

Bad:

```javascript
console.log(' Hello everyone! There is not equal spacing here.');
```

Put ```else``` and ```else if``` statements on the same line as the ending curly brace as the preceding ```if``` block.

Good:

```javascript
if (true) {
  responseOne()
} else {
  responseTwo()
}
```

Bad:

```javascript
if (true) {
  responseOne()
}
else {
  responseTwo()
}
```

#### Spacing between commas and Operators

Always put space between your commas and operators for increased readability.

Good:

```javascript
assertEqual(Math.pow(3, 2), 9, 'Math.pow squares properly');
```

Bad:

```javascript
assertEqual(Math.pow(3,2),9,'Math.pow squares properly');
```

Good:

```JavaScript
'Failed [' + testName + ']'...
```

Bad:

```JavaScript
'Failed ['+testName+']'...
```

Good:
```javascript
if(actual === expected){
  // action
} else {
  // alternate action
}
```

Bad:
```javascript
if(actual===expected){
  // action
}else{
  // alternate action
}
```

### Comments

"Good code explains itself" is a bit of an arrogant myth. Although it is true that your code should be clear enough to read without comments, that doesn't mean that comments shouldn't exist. Comments help the developers after you understand your code. Use comments to explain _intent_ not necessarily _what_ you are doing.

---

![hack](/images/credit.png)
