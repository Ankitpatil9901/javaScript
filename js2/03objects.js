// In Constructor singleton obtained

// object lioterals
//Object.create//constructor method of creating objects
const mysym=Symbol("key1")
const jsUser = {
    name:"Ankit",
    "full name":"Ankit Patiol",
    age:21,
    [mysym]:"MyKey1",
    location:"Kalaburagi",
    gmail:"ankit@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Mon","Tues"]
}
/*
console.log(jsUser.gmail)
console.log(jsUser["full name"])
console.log(jsUser["gmail"])
console.log(jsUser[mysym])
*/
jsUser.gmail="ankitpatil@gmail.com"
//console.log(jsUser["gmail"])
//Object.freeze(jsUser)
jsUser.gmail="ankitpatil9901@gmail.com"
//console.log(jsUser["gmail"])
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello");
}
jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name} Patil`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

