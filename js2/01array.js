/*
const myArr=[1,2,3,4,5]
const myArr2=new Array(1,2,3,4)
const myArr3=["Virat","Rohit","Dhoni"]

console.log(myArr);
console.log(myArr2);
console.log(myArr3);
console.log(myArr[0]);
*/
//***** Array methods */
const myArr4=[1,2,3,4,5]
/*
myArr4.push(6)
myArr4.push(7)
myArr4.pop()

myArr4.unshift(8)//add element at first

myArr4.shift()//remove 1st element
console.log(myArr4);

console.log(myArr4.includes(9));//false return boolean type
console.log(myArr4.indexOf(4));//2 or return n-1 if not present

const myArr5=myArr4.join()
console.log(myArr4);
console.log(myArr5);
console.log(typeof myArr5);//string
*/

// slice , splice

const myArr6=[1,2,3,4,5,6]
console.log("A" , myArr6);//A [ 1, 2, 3, 4, 5, 6 ]
const myn1=myArr6.slice(1,3)
console.log(myn1);//[ 2, 3 ]
console.log("B", myArr6);//B [ 1, 2, 3, 4, 5, 6 ]
const myn2=myArr6.splice(1,3)
console.log(myn2);//[ 2, 3, 4 ]
console.log("C", myArr6);//C [ 1, 5, 6 ]

// slice just print the given range of index values but splicing manipulates the original array


