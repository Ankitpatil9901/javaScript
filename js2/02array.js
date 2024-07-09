const heros=["Virat","Rohit","Dhoni","Dhawan"]
const heros1=["Kumar","Bumrah","Shami","Kuldeep"]
/*
heros.push(heros1)

console.log(heros);//[ 'Virat', 'Rohit', 'Dhoni', [ 'Kumar', 'Bumrah', 'Shami' ] ]
console.log(heros[3][1]);//Bumrah

heros.concat(heros1)
console.log(heros);//[ 'Virat', 'Rohit', 'Dhoni', [ 'Kumar', 'Bumrah', 'Shami' 

const all_heros=heros.concat(heros1)
console.log(all_heros);//[ 'Virat', 'Rohit', 'Dhoni', 'Kumar', 'Bumrah', 'Shami' ]

const all_newheros=[...heros,  ...heros1]
console.log(all_newheros);
*/
const ano_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_ano_array =ano_array.flat(Infinity)
console.log(real_ano_array);

console.log(Array.isArray("Ankit"))//false
console.log(Array.from("Ankit"))//[ 'A', 'n', 'k', 'i', 't' ]
console.log(Array.from({name:"Ankit"}))//[]

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


