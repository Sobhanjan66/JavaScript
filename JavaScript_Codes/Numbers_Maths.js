const score = 40
console.log(score); //40
const balance = new Number(100)
console.log(balance); //[Number: 100]
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.895
console.log(otherNumber.toPrecision(4)); //123.9
console.log(otherNumber.toPrecision(3)); //124
console.log(otherNumber.toPrecision(2)); //1.2e+2
 const hundreds = 1000000
 console.log(hundreds.toLocaleString()); //10,00,000

//++++++++++++++++++++ Math ++++++++++++++++++++++

console.log(Math) //Object [Math] {}
console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.6)) //5
console.log(Math.floor(4.9)) //4
console.log(Math.min(4, 3, 6, 8)) //3
console.log(Math. max(4, 3, 6,8)) //8

console.log(Math.random( )) //0.8629751819792688
console.log((Math.random()*10)+1)  //6.4975516354414244
console.log(Math.floor(Math.random()*10)+1) //1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+ min) //12