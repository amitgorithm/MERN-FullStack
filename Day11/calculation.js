function add(a,b){
  return a+b;
}

function sub(x,y){
  return x - y;
}

function mul(d,f){
  return d * f;
}
function div(d,f){
  return d / f;
}

// console.log(add(6,3));
// console.log(sub(6,2));

module.exports = {
  addit: add,
  subbit : sub,
  multiply : mul,
  divide : div
}