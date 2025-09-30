// object

const cricketer = {
position: 4, 
specialty: "batter",
age: 24,
runs: 8000
};

console.log(cricketer.position); 
console.log(cricketer['runs']); 

cricketer.position = 1; 
cricketer['runs'] = 9000;

console.log(cricketer['position']); 
console.log(cricketer.runs);


const profile = {
name: "Rahim",
age: 28,
city: "Dhaka",
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);


const person = {
name: "Alice",
age: 25,
country: "Bangladesh"
};

const entries = Object.entries(person);
console.log(entries);

const profile2 = {
name: "Rahim",
age: 28,
city: "Dhaka"
};

for (const key in profile2) {
const value = profile2[key];
console.log(key, value);
}