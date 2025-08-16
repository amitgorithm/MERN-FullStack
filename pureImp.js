// pure
// pure functions have no side effects
// they do not modify state
// it produces same output every time for same arguments

function add (a,b) {
  console.log(a + b)
}

add(5,7)
add(5,7)
add(5,7)

// Impure function
// they can give different result for same input
// they do modify state
// they can have side effects

let total = 0;
function addToTotal (value) {
  total += value
  return total;
}
console.log(addToTotal(5));
console.log(addToTotal(5));
console.log(addToTotal(5));
