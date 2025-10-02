// includes()
const names="fahim"
console.log(names.includes("i"));

// toLowerCase()
const names2="FaHim"
const lower=names2.toLowerCase()
console.log("lowerCase:",lower);

// toUpperCase()
const names3="FaHim"
const upper=names3.toUpperCase()
console.log("upperCase:",upper);

// trim()
const drink="  water"
const drink2="water  "
console.log(drink.trim());
console.log(drink2.trim());

// split()
const sentence = "i am a good and hardworking person";
console.log(sentence.split(' '));  

// join()
const realFriend = ['Rahim', ' kahim', ' dahim', ' lahim', ' fahim', ' sahim'];
console.log(realFriend.join(' |'));

// concat()
const str1 = "Hello";
const str2 = "World";
const result=str1.concat(" ",str2)
console.log(result);

// toString()
const num=123
const str=num.toString()
console.log(str);

// replace()
const text = "I love programming. programming is fun!";
const result2=text.replace("programming","coding")
console.log(result2);

// replaceAll()
const text2 = "I love programming. programming is fun!";
const result3=text2.replaceAll("programming","coding")
console.log(result3);