// this keyword is used to refer the current context of any object within any inner function of the object.
const user = {
    username: "Sobhanjan",
    price: 999,
    welcomeMessage: function(){
        console.log(`1. ${this.username}, welcome to our website`);
        console.log(this);
    }
}
user.welcomeMessage() //1. Sobhanjan, welcome to our website
//   {
//     username: 'Sobhanjan',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

user.username = "Sam" //now the current context is "Sam" which is updated currently
user.welcomeMessage() //1. Sam, welcome to our website
// {
//   username: 'Sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
console.log(this); //{} (now this is out of object or function so is prints empty object
//this keyword works only in object/function within object
// it doesn't work desirably within standalone function
//standalone Any function doesn't need this keyword to refer local scope values within it 

//Arrow Function
//Declaration types:
//1st type:
const chai = () => {
    let username = "Sobhanjan"
    console.log(username);//Sobhanjan
}
chai()

//2nd type using implicite return
const addTwo = (num1,num2) => (num1 + num2) //using implicite return
//if we use {}, then have to write return, if we use (), don't need to write return
console.log(addTwo(3,4));//7

const test = () => ({username:"Sobhanjan"})
console.log(test()); //{ username: 'Sobhanjan' }