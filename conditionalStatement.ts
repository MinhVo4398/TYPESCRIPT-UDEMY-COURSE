const myAgeNow = 15;

if (myAgeNow >= 18) {
    console.log("You are an adult");
}

// Else if statement
let number = 10;
if (number > 0) {
    console.log('This is positive number');
}
else if (number < 0) {
    console.log("This is Negative number");
}

// The Else Statement
let number1 = -10;
if (number1 > 0) {
    console.log('This is positive number');
}
else if (number1 < 0) {
    console.log("This is Negative number");
}
else {
    console.log("This is a Zero");
}

// Nested Condition
let num5 = 10;
if (num5 >= 0) {
    if (num5 === 0) {
        console.log("Number is zero");
    }
    else {
        console.log("Number is Positive");
    }
}
else {
    console.log("Number is negative");
}
console.log("Test");
