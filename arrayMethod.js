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

// sort()
const names=["fahim","karim","jadu","modu","shukkur ali"]
names.sort()
console.log("names",names);

const numbers8=[28,30,21,6,45]
numbers8.sort()
console.log("numbers8",numbers8);
// output :numbers8 [ 21, 28, 30, 45, 6 ]

const numbers9=[50,32,45,12,60]
numbers9.sort((a, b)=> a - b )
console.log("numbers9",numbers9);

// sort object
const user=[
    {name:"fahim",age:21},
    {name:"mustafijur",age:28},
    {name:"imad",age:12},
    {name:"rafid",age:7}
]
user.sort((a ,b)=> a.age - b.age)
console.log("object sort",user);

// slice()
const numbers10=[10,15,20,25,30]
const sliceNum1=numbers10.slice(1,3)
const sliceNum2=numbers10.slice(0,4)
console.log("sliceNum1",sliceNum1);
console.log("sliceNum2",sliceNum2);
console.log("numbers10",numbers10);

// splice()
const movies = ['Jaws', 'Rocky', 'Alien', 'Avatar', 'Coco', 'Up', 'It'];
const removed = movies.splice(2,3);
console.log(removed);
console.log(movies);

