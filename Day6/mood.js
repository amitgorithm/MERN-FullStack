// alert("hi");
let photo = document.querySelector("img");
console.log(photo);

let smile = document.getElementById("b1");
console.log(smile);

let cry = document.getElementById("b2");
console.log(cry);

smile.addEventListener("click", function() {
    // console.log("hehe");
    photo.src ='happy.jpeg'
})

cry.addEventListener("click", function() {
    // console.log("crying");
    photo.src='sad.jpeg'

})



function add(a, b) {
    // return a + b;
    console.log(a + b);
}
add (2,3)
add (150,150)
add (3,'3')
add ('3','3')

const add1 = (x,y) => {
    console.log(x + y);
}
add1(2,3)



