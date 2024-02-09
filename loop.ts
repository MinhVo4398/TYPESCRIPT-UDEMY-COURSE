// For loop
for(let i = 0; i<5; i++) {
    console.log(i);
}
console.log("---------While loop---------------");
//While loop
let count = 0;
while(count <5) {
    console.log(count);
    count++;
}
console.log("------Do While loop------------------");
// Do While loop 
// Run at least one time ==> so that 5 is print
let z =5;
do {
    console.log(z);
    z++
}while(z<5)

console.log("-----BREAK----------");
for (let i=0; i<10; i++) {
    if(i === 5) {
        break; // Exit the loop when is 5
    }
    console.log(i)
}
console.log("-----CONTINUE----------");
for (let i=0; i<10; i++) {
    if(i === 5) {
        continue; // skip when i =5 (0-9, skip 5)
    }
    console.log(i)
}

