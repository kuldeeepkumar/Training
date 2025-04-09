import React from 'react'

const Questions = () => {
// first question  code is started here 
let number = 10; 

if(number> 2){
  console.log("positive");
}
else if (number<12){
console.log ("negative");
}
else{
 console.log ( "Zero");
}

 // second question code is started here

let day =7;
let dayName;
 switch (day){
  case 1:
    dayName="sunday";
    break;
  case 2:
    dayName="monday";
    break;
  case 3:
    dayName="tuesday";
    break;
  case 4:
    dayName="wednesday";
    break;  
  case 5:
    dayName="thursday";
    break;  
  case 6:
    dayName="friday";
    break;  
  case 7:
    dayName="saturday";
    break;
  default:
    dayName ="none";
 } 
  console.log(dayName);

// Third question code is started here 
 for (let i= 1;i<=10;i++){
   console.log(i,i*i );
 }
//  4th question code is started here
  let i=1;
  let sum =0;
    
  while(i<=50){
   if (i%2===0){
     sum +=i;
   }
   i++;
  }
  console.log("sum of even numbers from 1to 50 is:",sum);

 // 5th question code is started here
   let numbers =[10,15,22,33,40,51];
   numbers.forEach(function(num){
     if (num %2=== 0){
       console.log( num, "num is even");  
   }else{
     console.log(num, "num is odd");
   }
   });
   return (
    <div>Questions</div>
  )
}

export default Questions
