// Objectusing Constructor

const User= new Object()
User.id="123abc"
User.name="ankit"
User.isLockedin=false

//console.log(User);

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        username:{
            firstname:"Ankit",
            lastName:"Patil"
        }
    }
}
console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3 = Object.assign({},obj1,obj2)
const obj5={...obj1, ...obj2, ...obj4}
//console.log(obj3);
//console.log(obj5);

const users=[
    {
    id:1,
    name:"abc"
    },
{
    id:2,
    name:"abc"
},
{
    id:3,
    name:"abc"
},
{
    id:4,
    name:"abc"
},
{
    id:5,
    name:"abc"
},
{
    id:6,
    name:"abc"
},
]
console.log(users[1].name)

console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));

console.log(User.hasOwnProperty('isLockedin'));