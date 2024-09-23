const user={ 
    username:"Ankit",
    price:234,

    welcomemessage:function(){
       // console.log(`${this.username} welcome to website `);
       // console.log(this);
    }

}
//console.log(this);
//user.welcomemessage()
//user.username="sam"
//user.welcomemessage()
/*
function chai(){
    let username="ANkit"
    console.log(this.username);//undefined
}

//chai()


const chai = function(){
    username="ANkit"
    console.log(this.username);//undefined

}
chai(this)
//**********Arrow function */

/*
const chai = () =>{
    username="ANkit"
    console.log(this.username);//undefined

}
chai()



const addTwo =(num1,num2)=>{
    return num1+num2
} //explicit return
    */
//const addTwo =(num1,num2)=> num1+num2// arrow function
//const addThree =(num1,num2)=> (num1+num2)// implicit return
const addThree =(num1,num2)=> ({username: "ANkit"})// for object

console.log(addThree(3,4));

