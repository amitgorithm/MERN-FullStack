let line = document.querySelector('h1');
console.log(line);

// line.style.backgroundColor = "yellow";

function C1() {
    if (line.textContent === "Welcome to GFG")
        { 
        line.style.color = "black";
    line.textContent = "I will Learn MERN";
} else {
    line.textContent = "Welcome to GFG";
    line.style.color = "white";
}
}