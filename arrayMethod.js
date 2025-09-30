// map()
const numbers=[3,5,2,8.7]

const double=numbers.map(num => num*2)
console.log("double",double);

const friends=["karim","rahim","fahim"]

const firstLetter=friends.map(frn=> frn[0])
console.log("firstLetter of friend",firstLetter);

// forEach
const numbers2=[6,3,4,5]
const fiveBonus=numbers2.forEach(num => console.log(num+5))
console.log("fiveBonus",fiveBonus);

// filter
const numbers3=[20,6,14,16]
const filterNum=numbers3.filter(num => num > 15)
console.log("filterNum",filterNum);

// find
const numbers4=[2,6,14,16]
const findNum=numbers4.find(num => num > 5)
console.log("filterNum",findNum);

// some
const numbers5=[8,10,9,16]
const someNum=numbers5.some(num => num > 15)
console.log("someNum",someNum);

// every()
const numbers6=[12,10,13,16]
const everyNum1=numbers6.every(num => num > 11)
const everyNum2=numbers6.every(num => num > 9)
console.log("everyNum1",everyNum1);
console.log("everyNum2",everyNum2);

// flat()
const numbers7=[8,10,[4,[16,[18]]]]
const flatNum=numbers7.flat(2)
console.log("flatNum",flatNum);