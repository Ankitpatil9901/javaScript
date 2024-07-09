"use strict";//treat all js code as newer version

//alert("hello") // we are using node js not browser
/*
number =2^3
bigint 
string " " or ' '
boolean (true or false)
null(Stand alone value)
undefined
symbol (unique)  c

*/

console.log(typeof null)//output is oject
console.log(typeof undefined)//undefined 

const id=Symbol('123')
const id1=Symbol('123')
console.log(id==id1);//false as a Symol always give unique rather if a same value is given to oth symbol


//***********Array Oject and Function */
const heroes=["Virat","Rohit","Dhoni"];
let myObj={
    name: "Ankit",
    age: 21
}

const myFunction = function(){
    console.log("Hello");
}


//*************Memory */

//StacK(primitive)  Heap(Non Primitive)
/*
let user="Ankit"
let user1=user
user1="Amit"
console.log(user);//Ankit as the value is changed in copy of user not the original one
console.log(user1);//Amit

*/


let user2={
    email:"ankit@gmail.com",
    upi:"80504@ybl"
}

let user3 = user2;
user3.email="amit@gmail.com"
console.log(user2);//amit@gmail.com as the value is changed in original one
console.log(user3);//amit@gmail.com

