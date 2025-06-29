const fs = require('fs');
// fs = file system

// fs.writeFileSync("hello.txt",'I am Learning Node js')
console.log("Good Morning");
// to run the next line of code in an asynchronous manner, 
// we will use just readFile and not readFileSync, and use error handling
// in a way that if there is error, th other lines will run in main stack 
// and the error will happen in side stack
fs.readFile('hello.txt','utf-8',(err,data) =>{
    if(err) {
          console.error("The error is",err)
          return;
        }
        console.log(data);
}) // if there is an error here, other lines will run in an asynchronous way ad then the error will be shown.


console.log("Lunch Time");
console.log("Good Night");

