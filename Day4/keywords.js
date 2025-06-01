console.log("welcome")
// hoisting == declaring on top 
// let
// var (global scope)
// const

a = "hello"
console.log(a) // undefined

a = 45
console.log(a) // 45
console.log(a) // 45
console.log(a) // 45

a = true
console.log(a) // true

let A = "Gfg"
console.log(A)
A = 22
console.log(A) // SyntaxError: Identifier 'A' has already been declared


const course = "MERN"
console.log(course) 
course = "DSA"
console.log(course) // TypeError: Assignment to constant variable
