let myDate = new Date()
console.log(typeof myDate); //object

console.log(myDate.toString()); // Sun Jan 28 2024 20:49:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sun Jan 28 2024
console.log(myDate.toLocaleString()); // 28/1/2024, 8:50:21 pm
console.log(myDate.toLocaleDateString()); // 28/1/2024
console.log(myDate.toISOString()); //2024-01-28T15:20:21.773Z
console.log(myDate.toJSON()); // 2024-01-28T15:20:21.773Z
console.log(myDate.getTimezoneOffset()); // -330

let currentDate = new Date(2024, 0, 31)
console.log(currentDate.toDateString()); //Wed Jan 31 2024

let timeStamp = Date.now()
console.log(timeStamp);
console.log(currentDate.getTime());

console.log(Math.round(Date.now()/1000)); // in Seconds

let newDate = new Date()
console.log(newDate.getMonth()+1); // as starts from 0, its for end users concern
console.log(newDate.getDate())
console.log(`Today is ${newDate.getDate()}th day of ${newDate.getMonth()+1} month.`) // using String interpolation
