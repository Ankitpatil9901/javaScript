/*
const score=300

const bal = new Number(109000)
console.log(bal);
console.log(score);


const bal2 =bal.toString();
console.log(bal2);
console.log(typeof (bal2));
console.log(bal.toFixed(2));

const num=253.41848
console.log(num.toPrecision(3))

const hundreds =1000000
console.log(hundreds.toLocaleString());//1,000,000 us
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 india

*/

//*****************Maths *************/
/*
console.log(Math);//Object [Math] {}
console.log(Math.abs(-5));//5 (-ve to +ve)
console.log(Math.round(4.4));//4
console.log(Math.ceil(4.4));//5
console.log(Math.floor(4.4));//4

console.log(Math.min(4,6,1,2,5,8,14))//1
console.log(Math.max(4,6,1,2,5,8,14))//14

console.log(Math.random());// random values
*/
console.log((Math.random()*10)+1);//9.185515769777748 random>1
console.log(Math.floor(Math.random()*10)+1);// random with floor value>1

const min=10
const max=20
console.log(Math.floor(Math.random() *(max - min+1))+min);//value bw min and max

