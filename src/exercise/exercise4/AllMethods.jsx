import React from 'react'
// import AllMethods from './AllMethods';

const AllMethods = () => {
    //Array.prototype.sort()

    //Try
    const months =["March","jan","feb","dec"];
    months.sort();
    console.log(months);
    //Expected output:Array["dec","feb","jan","march"]
    const array1 =[1,30,4,21,10000];
    array1.sort();
    console.log(array1);
    //Array.from
console.log(Array.from("foo"));
//Expected output:Array["f","o","o"] 
console.log(Array.from([1,2,3],(x)=> x+x)) 
//Array.isArray()
    
 console.log(Array.isArray([1,3,5]));
 //Expected output:true
 
 console.log(Array.isArray("[]"));
  //Expected output:false

  console.log(Array.isArray(new Array(5)));
   //Expected output:true
 
console.log(Array.isArray(new Int16Array([15,33])));
 
  //Expected output:true
 
 //Array.of()
console.log(Array.of("foo",2,"bar",true));
 //Expected output:Array ["foo",2,"bar",true]

 console.log(Array.of());
  //Expected output:Array[]
 
  
 return (
    <div>
      <h1>AllMethods</h1>
    </div>
  )
}

export default AllMethods
