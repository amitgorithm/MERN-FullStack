const fruits = ["🍒","🥭", "🍒","🥭","🍒","🍎","🥭","🍎","🍎","🥭"  ]

// if else for loop

for(i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
    if(fruits[i] === "🍎")
    {
        document.getElementById('b').textContent += "🍎"
    } else if(fruits[i] == "🍒"){
        document.getElementById('c').textContent += "🍒"
    } else if(fruits[i] == "🥭"){
        document.getElementById('a').textContent += "🥭"
    }



}