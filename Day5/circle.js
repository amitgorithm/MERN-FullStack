let abc = document.querySelector('div');
console.log(abc);

// abc.style.backgroundColor = "yellow";

// function clickme() {
//     if (abc.style.backgroundColor === "black") {
//         abc.style.backgroundColor = "blue";
//     }
//     else {
//         abc.style.backgroundColor = "black";
//     }

// }

// function clickme() {
//     if (abc.style.backgroundColor === "black") {
//         abc.style.backgroundColor = "blue";
        
//     }
//     else if (abc.style.backgroundColor === "blue") {
//         abc.style.backgroundColor = "yellow";
//         abc.style.transition = "2s";
//     }else if (abc.style.backgroundColor === "yellow") {
//         abc.style.backgroundColor = "green";
//         abc.style.transition = "2s";
//         abc.style.borderRadius = "20%";
//     }else if (abc.style.backgroundColor === "green") {
//         abc.style.backgroundColor = "red";
//     }else {
//         abc.style.backgroundColor = "black";
//         abc.style.borderRadius = "50%";
//     }

// }

function clickme() {
    switch (abc.style.backgroundColor) {
        case "black":
            abc.style.backgroundColor = "white";
            break;
            case "white":
           abc.style.backgroundColor = "blue";
            break;
        case "blue":
            abc.style.backgroundColor = "yellow";
            abc.style.transition = "2s";
            break;
          default :
          abc.style.backgroundColor = 'black';
          break;
    }  

}