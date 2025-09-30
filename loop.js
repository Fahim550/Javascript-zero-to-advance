for(let num = 20;num<=50; num++){
    if (num % 5 == 0){
        console.log("for 1",num);
    }
}

let sum =0;
for(let num = 1; num<=50; num++){
    sum=sum+num;
}
console.log("50 sum",sum);

let num2=0
for(let num=1;num<=40;num++){
    if(num % 13==0){
        console.log("for 2",num);
        num2=num2+num
    }
}
console.log("for 3",num2);

let sum2=0
for (let num =1 ; num<=50;num++){
    if (num %3==0 && num % 4==0){
        console.log("num3 ",num);
        sum2 = sum2 + num
    }
}
console.log(
    "sum 2",sum2
);

for(let i = 0; i < 15; i++) {
console.log(i);
if(i > 7) {
break;
}
}

for(let i = 1; i <= 10; i++) {
if(i == 6) {
continue;
}
console.log(i);
}

for (let i=1;i <=40;i++){
    if (i % 7 == 0){
        continue
    }
    console.log(i);
}