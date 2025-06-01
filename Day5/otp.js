// print from 1-10 using for loop
// let i = 1;
// for (i =1, i <=10; i++) {
//     console.log(i);
// }

// let i=1;
// for (i=1; i<=5; i++) {
//     console.log(i + "Hello World")
// }

// // print table from 2 to 6 using nestedfor loop
// // 2 x 1 = 2 2 x  2 = 4 2 x 3 = 6
// for (let j = 2; j <= 6; j++) 
//     {
//     for (let k = 1; k <= 10; k++) 
//         {
//         console.log(j + " x " + k + " = " + (j * k));
//         }
//     console.log("------------------------------------");        
// }

// for (let N = 5; N <= 8; N++) 
//     {
//     for (let Y = 1; Y <= 5; Y++) 
//         {
//         console.log(N + " into " + Y + " =" + (N * Y));
//         }
//     console.log("------------------------------------");    
// }

// age = 40;
// while (age < 47) 
// {
//     age+=3;
// }
// console.log(age) 

// // console.log(Math)
// // console.logMath.min(10, 20, 30, 40, 50);
// // console.logMath.max(10, 20, 30, 40, 50);
// console.log(Math.random());
// console.log(Math.random() * 10)
// console.log(Math.floor(Math.random() * 10) )

function getOTP() {
    let otp = ' ';
    for (i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);

    }
  
    document.querySelector('span').textContent = otp
    console.log(otp);
}

