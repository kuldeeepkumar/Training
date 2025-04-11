import React from 'react'

const Questions = () => {
    // first questions
    let day = 7;
    let dayName;
    switch (day) {
        case 1:
            dayName= "Monday";
        break;
        case 2:
            dayName="Tuesday";
            break;
            case 3:
              dayName="friday";
              break;
              default:
                dayName ="Thursday,Sunday";

    }
                console.log(dayName);

    //second question
         let numbers=["positive","negative","zero"];
         numbers.forEach(function(numbers){
          console.log(numbers);
         })

    // third question
         let i=1;
         while (i<10){
          console.log("numberi**i+i");
          i++;
         }
        
    // fourth question
        
      
   // fifth question
        
   let array = [10,23,4,15,8];
        array.forEach(function(array){
          if(array % 2 == 0){
            console.log(array)
          }else
          console.log(array)
        });



  return (
    <div>Questions</div>
  )
}

export default Questions