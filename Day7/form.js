


let myData = document.querySelector('form');
console.log(myData);

myData.addEventListener('submit',(event)=> {
  let theEmail = document.getElementById('email').value
  let myPass = document.getElementById('pass').value
  event.preventDefault();
  console.log(theEmail);
  console.log(myPass);
      if(myPass.length < 6){
        alert("Password is short"); 
      } else if (myPass.length > 14 ){
        alert ("Password too long");
      } else{
        window.location.href  = "welcome.html";
        // windows.open ("welcome.html", '_blank') // to open in new tab
      }
})

