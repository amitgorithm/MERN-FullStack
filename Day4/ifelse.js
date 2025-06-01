// if(condition){
//     //condition check
// } else {
//     // condition check 
// }

// let age = 18;
// if (age >=18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a minor");
// }

let course = document.querySelector('h1');
console.log(course)

// function demo() {
//     course.textContent = "I will Learn MERN"
// }

function demo() {
    if (course.textContent === "I am Learning JS") {
        course.textContent = "I will Learn MERN";
    } else {
        course.textContent = "I am Learning JS"
    }
}