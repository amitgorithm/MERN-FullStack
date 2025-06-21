

function catty(){
      fetch("https://api.thecatapi.com/v1/images/search")
            .then (res => res.json())
            .then (data => {

              console.log(data)
              
              document.querySelector('img').src =data[0].url;


            })
        }


async function catty(){
  try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
  document.querySelector('img').src =data[0].url;
  }catch (error){
    console.log(error);
  }

}

const college = null;
try{
  console.log(college.length)
  console.log(a)
}catch(error) {
  console.log(error)
}



try{
    console.log(a);
}catch(error) {
  console.log(error);
      }


console.log("Very Important Code")
