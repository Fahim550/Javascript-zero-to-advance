
function multiply(num1 ,num2) {
    const num3=num1*num2
    return num3
}
const add= multiply(5,10)
console.log(add);

function nagorik(age){
    if (age>= 18) {
      return true
    }
    else{
        return false
    }
}
console.log(nagorik(21));


    function sumOfNumber(numbers) {
        let sum=0
        for(number of numbers){
            sum=sum+number
            console.log(sum);
        }
        return sum;
    }
    const nums=[24,26,64,35]
    const sum=sumOfNumber(nums)
    console.log("sum of total numbers",sum);

    function evanArraySum(array){
        let sum=0;
        for (number of array){
            if(number % 4 ==0){
                sum=sum+number
                console.log(sum);
            }
        }
    }

    const array=[12,14,20,28,30]
    const sumarray=evanArraySum(array)