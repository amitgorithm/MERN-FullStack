// console.log("good Morning");

// setTimeout(function(){
//    console.log("good Night");

// },2000)

// setTimeout(()=>{
//     console.log("good Night");
// },5000)

// setInterval(() => {
//     console.log("tea time");
//     clearTimeout()

// },2000)

// // setInterval(()=> {
// //   clearInterval = x;
// //   console.log("no tea see you tmrw");
// // })



// console.log("good Evening");

console.log("good Morning");

setTimeout(()=>{
  console.log("good Night");

},8000)

const x = setInterval(()=>{
  console.log("Tea Time");
},1000)

setTimeout(()=>{
  clearInterval(x)
  console.log("No tea please sleep")
},7000)


console.log("good Afternoon");

