const number=[10,14,12,18,14]
const number2=[5,7,9]
console.log(number.length);
console.log(number[0]);

number.push(19)
console.log(number);
number.pop()
console.log(number);
number.shift()
console.log(number);
number.unshift(8)
console.log(number);    
const arr=number.concat(number2)
console.log('arr',arr);