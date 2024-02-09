// Global scope
const globalVar = 10;

function randomFunction() {
  console.log(globalVar);
}

//Local Scope
function random2() {
  const localVar = 20;
  console.log(localVar);
  console.log(globalVar);
}

//console.log(localVar); //* cannot call because localVar is local scope

// Block Scope
if (true) {
  const blockVar = 30;
  console.log(blockVar);
}

//console.log(blockVar); //* cannot call because blockVar is Block Scope 
