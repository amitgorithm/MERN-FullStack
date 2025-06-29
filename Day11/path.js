// const path = require('path');
const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
  fs.readFile('index.html',(err,data) => {
    res.writeHead(200,{'content-type' : 'text/html'})
    res.end(data)
  })
}).listen(5001);


// console.log(__dirname); // this is a global method/module
// console.log(__filename); 
console.log('hi');
