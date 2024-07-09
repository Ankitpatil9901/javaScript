//*** Date */

/*
let myDate = new Date()

console.log(myDate);//2024-07-09T08:09:30.711Z
console.log(myDate.toString());//Tue Jul 09 2024 08:09:30 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Jul 09 2024
console.log(myDate.toLocaleString());//7/9/2024, 8:09:30 AM
console.log(typeof myDate);//object

//let myCreatedDate=new Date(2023,0,29,5,3)
//console.log(myCreatedDate.toLocaleString());//1/29/2023, 5:03:00 AM
let myCreatedDate1=new Date("2023-01-08")
let myCreatedDate2=new Date("01-29-2023")
console.log(myCreatedDate1.toLocaleString());//1/8/2023, 12:00:00 AM
console.log(myCreatedDate2.toLocaleString());//1/29/2023, 12:00:00 AM

*/
//********Time Stamp */
let myCreatedDate3=new Date("01-29-2023")
let myTimeStamp= Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate3.getTime());// in milisec
//console.log(Math.floor(Date.now()/1000));//in sec

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString("default",{
    weekday: "long",
}))//to mention specific format


