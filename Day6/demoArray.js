const languages  = ['html', 'css', 'js']
// console.log(languages[1]);

// x = languages.pop();
// console.log(x);

// console.log(languages);
// languages.push('cpp');
// console.log(languages);

// languages.shift();
// console.log(languages);

// languages.unshift('react');
// console.log(languages);

// console.log(languages.reverse())

// console.log(languages.length);

// console.log(languages.toString());

// console.log(languages[2])

// let selectlang = document.querySelector()
// console.log(selectlang);

// let msg = document.querySelector('h1')
//     let ogMsg = document.querySelector('h1').textContent; 

// // msg.textContent = 'Welcome to the world of ' + languages[0] + ', ' + languages[1] + ', ' + languages[2] + ' and more!';  
// // console.log(msg.textContent);
//  msg.textContent = ogMsg + data.value;
// let code = document.querySelector('h3');
// console.log(code)
// code.textContent += languages[0];
// code.textContent += languages[1];
// code.textContent += languages[2];


const color = ['red','blue','green', 'yellow']

let myColors = document.querySelector('h2')
// myColors.textContent += color[1] + " " + color[3];

for (i=0;i<color.length;i++)
    {
        console.log(i,color[i])
         myColors.textContent += i + " " + color[i] +  "  ";
    }  // ro print all colors in the array 
  


