import React, { startTransition } from 'react'

const Question = () => {
    //first question if a number is positive,negative or zero 

   let numbers=["Positive","Negative" ,"zero"];
   numbers.forEach(function(numbers)
{
    console.log(numbers);//print positive,negative or zero
})
//second question
let day =7;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "friday";
    break;
  default:
    dayName = "Thursday,sunday";
}
console.log(dayName); //output="Thursday,sunday"
//third question first 10 natual numbers and their square

for(let i=1;i<10;i++){
  
  console.log("sum of even numbers from 1 to 50 is : "+i,i*i);// squre of natural numbers
 }
 //fourth questions sum of even numbers

 let i,sum=0
 i=1
 
 while(i<=50){
  if(i % 2 == 0){
    sum=sum+i
  }
  i++
 }
 console.log(sum)// even number of 50
  //fifth question 
  
 

  let array = [10,23,4,15,8];
  array.forEach(function(array){
    if(array % 2 == 0){
  

      // even number of array
      console.log(array)

    }else{
      //odd number of array
         console.log(array)
    }
  });



 


 
 
return (
  <>
  <div>Question</div>
  </>
)
}


export default Question