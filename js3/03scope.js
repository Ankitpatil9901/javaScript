var c=300
let a=100
if(true){
    let a=10
    const b=20
    var c=30
    //console.log("Inner a",a);//10
}

//console.log(a);//100 
//console.log(b);//undefined 
//console.log(c);//30

function one(){
    const username ="Ankit"
    function two(){
        let website="youtube"
        console.log(username);
        
    }
    console.log(website);
    two()

}
//one()

if(true){
    const username1="ankit"
    if(username1=="ankit"){
        const website1="youtube"
       // console.log(username1 + website1);
    }
    //console.log(website1);
}
//console.log(username1);
//**** Hoisting */

console.log(addOne(5))
function addOne(num){
    return num+1
}

//Hoisting
//addTwo(6)
const addTwo = function(num2){
    return num2+2
}



 