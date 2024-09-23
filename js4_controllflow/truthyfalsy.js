const useremail="ac@ert.ai"
const Userarr = []
const emptyObj={}
if(useremail){
    console.log("Containsvalue");
    
}else{
    console.log("No value");
    
}

// falsy = 0,-0,"",Nan,null,undefined,false,BigInt 0n

//truthy = " ","0",[],{},fuction(){},'false', 
if(Userarr.length === 0) //to check array is empty or not
{
    console.log("array is empty");
    
}

if(Object.keys(emptyObj).length === 0){ //Object.keys(emptyObj) represents the array
    console.log("Objectis empty");
    
}

///********Nullish Coalescing operator */

let val1
//val1 =  5 ?? 10 //5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 14 //10




console.log(val1);

//*****Ternary operator */

//condition ? true: false

let temp = 15

temp >=10 ? console.log("greater than 10"): console.log("less than 10");


