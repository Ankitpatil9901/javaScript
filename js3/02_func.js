// Definition of func
/*
function myFun(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

//myFun//refernce
//myFun()//execute
function addTwonum(num1,num2){//parameters
    //console.log(num1+num2);
    //let res=num1+num2
    //return res

   return num1+num2
}

const res = addTwonum(3,5)//arguments
//console.log(res);
//addTwonum(3,"5")
//addTwonum(3,"a")

function User(username="Sam"){
    if(username === undefined){
        console.log("Please enter a user name");
        return 
    }
    return `${username} just logged in`
}

//console.log(User("Ankit"))
//console.log(User())

// if we dont know how many parameters has to be passer in a function using rest operators(...)

function CalculateCartPrice(val1,val2, ...num1){
    return num1//num1 contains all value except 1st and 2nd value
}
//console.log(CalculateCartPrice(2,34,345,2345,67,87,908));

const user={
    username:"Ankit",
    price:123
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);

}
*/

//handleObject(user)
handleObject(
    {
    username:"Sam",
    price:145
})
    

const myArr=[1,2,3,4]

function myFun1(getarray){
    return getarray[1]
}
console.log(myFun1(myArr));
console.log(myFun1([100,200,500,600]))



