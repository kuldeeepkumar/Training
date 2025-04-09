import React from 'react'

export const Question = () => {
     //question 1 is here 
  let num = 10;
  if(num>0){
    console.log("positive");
  }
  else if(num<0){
    console.log("negative");
  }
  else{
    console.log("zero");
  } 
  //question 2 is here
  let day = 7;
  let dayName;
  switch (day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "None";                           
}
console.log(dayName);
   //question 3 is here
 for(let n = 1; n < 11; n++){
    console.log(n,n*n);
 }
   //question 4 is here
   let y = 1;
   let sum = 0;
   while(y <= 50){
    if(y % 2 ==0){
        sum += y;
    }
    y++;
   }
   console.log("sum of even numbers from 1 to 50:",sum);
   //question 5 is here
   const numbers = [10, 23, 4, 15, 8];
   numbers.forEach(num=>{
    if(num % 2 === 0){
        console.log(num,"num is even");
    }else{
        console.log(num ,"num is odd");
    }
});
  return (
    <div>Question</div>
  )
}
