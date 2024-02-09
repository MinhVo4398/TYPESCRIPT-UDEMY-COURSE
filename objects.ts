const personNew = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

const personNew2: { name: string; age: number; isStudent: boolean } = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

console.log(personNew2.age);
console.log(personNew2.isStudent);

const contactInfo = {
  email: "playwrightdemo@gmail.com",
  phone: "12345",
};

const mergePerson = { ...personNew, ...contactInfo };
console.log(mergePerson); // merge 2 object
/*
{
  name: 'Alice',
  age: 30,
  isStudent: false,
  email: 'playwrightdemo@gmail.com',
  phone: '12345'
}
*/

type Person = {
    name: string,
    age: number
}

const alice: Person = {
    name: "Alice",
    age: 25
}
