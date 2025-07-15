let abc = 25;
if(function f () {} == true) {
  abc = abc + f();
}
console.log(abc);

