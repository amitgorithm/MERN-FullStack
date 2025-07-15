let a = 22; // cannot be initialised twice with different values
 a = 45; // but the value can be changed
console.log(a);

const age = 35;
// const age = 23; // remains constant, once declared
console.log(age);

// normal function
function add(a,b){
  return a + b;
}
console.log(add(5,3));

// arrow function
const add1 = (x,y,z) => {
  return (x+y+z);
}
console.log("The addition is : ", add1(5,3,7));

// string literals / backticks
const course = "MERN";
const sessions = 20;

console.log("I am learning " + course + "It is for " + sessions + "classes");
console.log(`I am learning ${course} it is for ${sessions} classes`);

// ternary operators ? if and : else
let name = age > 40 ? "Uncle Ji": "Hello Chotu" 
console.log(name);

// object destructuring
const person = {
  id : 1,
  firstName : "Amit",
  profession: "Photographer",
  city: "Pune"
}
const{firstName,city}= person; // destructuring object by taking name
console.log(city);
console.log(person.profession);

// spread // shorthand to make copy of array
const fruits = ["apple","mango","banana", "guava", "cheeku"];
// console.log(fruits);
const moreFruits = [...fruits, "grapes","watermelon"]
// console.log(moreFruits);

// map method 
let singleFruit = moreFruits.map((ff)=> {
  return ff;
})
console.log(singleFruit);
console.log("_____________________");
console.log(moreFruits);

// Array Methods:
// slice == does not change the OG array
// splice == changes the OG array

const newArray = fruits.slice(1,3)
console.log(newArray);
console.log(fruits);

const splicedArray = fruits.splice(1,3);
console.log(splicedArray);
console.log(fruits);