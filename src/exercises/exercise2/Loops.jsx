import React from 'react'

const Loops = () => {
    // here is the for loop 
    for(let i=0;i<=10;i++)
    {
        console.log(i);
    }
    for (let i = 0; i<5; i++)
{
    console.log("iteration number: " + i);
}
let j = 0;
while (j < 5)
{
    console.log("iteration number: " + j);
    j++
}
let a = 0;
do{
    console.log("iteration number:" + a);
    a++;
}
while( a < 5);
let fruits=["apple","banana","cherry"];
fruits.forEach(function(fruit)
{
    console.log(fruit);
});
for (let i= 0; i< 5; i++)
{
    if (i === 3)
    {
        break;// exit loop when i is 3
    }
    console.log(i);
}
for (let b =0; b < 5; b++)
{
    if (b == 2)
    {
        continue; //skip when i is 2
    }
    console.log(b);
}
        return (
    <div>Loops</div>
  )
}

export default Loops