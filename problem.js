// remove duplicate value from array

// const students = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

 function noDuplicate(array){
const unique=[]
    for(item of array){
        if (unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}

const uniqueArray=noDuplicate(numbers)
console.log(uniqueArray);