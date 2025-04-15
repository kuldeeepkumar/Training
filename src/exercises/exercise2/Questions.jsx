import React from 'react'

const Questions = () => {
     //Question1
 let number = 50;
 if (number> 20) {
     console.log("positive");
 } else if (number < 15){
     console.log("zero");
 } else {
     console.log("negative");
 }
 
 //Question2
 let days=40;
 if(days>10){
     console.log("sunday");
 }else{
 console.log("thursday");
 
 }
 
 //Question3
 console.log("Question3")
 for (let i =1; i<= 10;i++){
     console.log(i, i* i);
 
 
 }
 
 //Question4
 let y = 1;
 let sum = 0;
 while(y <= 50){
  if(y % 2 ==0){
      sum += y;
  }
  y++;
 }
 console.log("sum of even numbers from 1 to 50:",sum);
 //Question 5
 const numbers = [10, 23, 4, 15, 8];
     numbers.forEach(num=>{
      if(num % 2 === 0){
          console.log(num,"num is even");
      }else{
          console.log(num ,"num is odd");
      }
  });
  return (
    <div>Questions</div>
  )
}

export default Questions