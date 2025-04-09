import React from 'react'

const Question = () => {
    //code for if statement
    let num=20;
    if(num<30)
    {
     console.log("number is positive ");
    }
    //code for switch statement
    let day=4;
    let dayName;
    switch(day) {
     case 1:
         dayName = "monday";
         break;
     case 2:
         dayName = "tuesday";
         break;
     case 3:
         dayName = "wednesday";
         break;
     case 4:
         dayName = "thursday";
         break;
         
         default :
          dayName = "unknown day";
    }
 
         console.log(dayName);
         //print 10 natural numbers using loop
         let i;
         for(i = 1;i<=10;i++)
         {
             console.log(i ,i*i);
         }
         //code for while loop
         let x=1;
         let sum=0;
         while(x<=50){
            if(x%2==0){
                sum=sum+x;
            }
           x++;
            }
            console.log(sum);
         //code using foreach loop
         const numbers=[10,22,4,3,7];
         numbers.forEach(function(numbers){
            if(numbers %2 == 0){
                console.log(numbers, " is even");
            }else{
                console.log(numbers, "is odd");
            }
        })
         
  return (
    <div>Question</div>
  )
}

export default Question