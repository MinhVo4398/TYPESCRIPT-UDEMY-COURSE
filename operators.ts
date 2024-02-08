// Arithmetic Oprators
let a = 10;
let b = 3;
let sum = a + b; //13
let difference = a - b; //7
let product = a *b ; //30
let quotient = a/b; // 3.3333...
let remainder = a % b; //1

//Comparision Operator
let x = 5;
let y = 10;

let isEqual = x ==y ; //false
let isStrictEqual = x ===y; // false
let isNotEqual = x!= y; //true
let isGreaterThan = x>y; // false
let isLessThan = x<y; // true
let isLessOrEqual = x <=y; //true

//Logical Operator
let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse; // false
let orResult = isTrue || isFalse; // true
let notResult = !isTrue;

//Assigement Operator
let num = 5;
num += 3; // num is now 8 
num -=2; // num is 6 (8-2)
num *=4 ; // num is 24 (6*4)
num / 3 ; // num is now 8 (24/3)
num % 5 ; // num is now 3(8 % 5)

//Ternary Operator
let age = 20;
let message = age>=18 ? "Adult": "Minor";
console.log(message);