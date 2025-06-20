// objects  are in {}
// they  arekey value pairs
const person = [{
  name: "Moin",
  age : 34,
  profession : "trainer",
  city: "Pune",
  hobbies: ['reading', 'coding', 56],
  address : {street : 'kondhwa 42', flat : '3bhk'}
},{
  name : "amit",
  age: 28,
  profession : "photographer",
  hobbies : ['dancing', 'playing', 'reading'],
  city : "Mumbai"

},{
  name : "Rubina",
  age:33,
  profession : "coder",
  hobbies : ['dancing', 'playing', 'reading'],
  city : "Delhi"

}]
console.log(person);
console.table(person);

console.log(person[0]);
console.log(person[2]);
console.log(person[1]);

console.log(person[2].name);


// console.log(person.address);
// console.log(person.address.flat);

// console.log(person.hobbies[1]);

// const myName = document.querySelector('h2').textContent  += person.name;
// const myHobby = document.querySelector('h3').textContent += person.hobbies[1];

const myName = document.querySelector('h2').textContent  += person[2].name;
const myHobby = document.querySelector('h3').textContent += person[0].address.flat;


