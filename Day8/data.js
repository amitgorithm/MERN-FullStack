let a = 15;
console.log(a);

// basic for APIs
let p = new Promise((resolve,reject) => { // resolve == .then and reject .catch
      resolve("I made a promise and done")
      reject ("I made a  error")
})

p.then((data) =>{
  console.log(data);
}).catch((error)=>{
  console.error("The problem is "+ error);
})



// console.log(p);
// console.log(Promise);

// examples in promises  
// simple maths in promises

let myCalculation = new Promise((resolve,reject)=>{
  let num = 2 + 4
  if(num === 5){
    resolve ("Success")
  } else {
    reject ("Fail")
  }
})

myCalculation.then((message) =>{
    console.log("The Result is " + message);
})
    .catch((message)=> {
      console.error("The problem is " + message);
    })



// console.log(fetch("https://jsonplaceholder.typicode.com/users"));   

fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json))



fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
          console.log(data[2].name)
          const h2name = document.querySelector('h2').textContent  += data[2].name;
          const h3city  = document.querySelector('h3').textContent  += data[2].address.city;
          const h4zipcode  = document.querySelector('h4').textContent  += data[2].address.zipcode;

      }).catch(err => console.log(err));


fetch("https://sweetfruit.vercel.app/fruits")
      .then (response => response.json())
      .then (fruitdata => {
        console.log(fruitdata)
        const pfruitname = document.querySelector('p').textContent  += fruitdata[6].name;
      })




// promise fetch      