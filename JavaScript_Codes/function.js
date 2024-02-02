// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(3,4) //7

function addition(number1,number2){
    console.log(number1+number2);
}
const result = addition(3,5)
console.log(result);//cant print value bcoz result is out of scope of the function

function sum(n1,n2){
    return n1+n2;
}
const result1 = sum(3,7)
console.log("Sum is:",result1); //10 (result could be printed bcoz the function returned the value)

function logginMessage(Username){
    if(!Username){ // ~ if(username === undefined){
        console.log("Pls enter a username");
        return
    }
    return `${Username} just logged in`
}
// console.log(logginMessage("Sobhanjan")) //Sobhanjan just logged in
//here we have to use log function to print the value as there isn't any log statement in the scope of the function
//console.log(logginMessage()); //Pls enter a username
                                //undefined
//here we don't have to use log bcoz log function is already there in the if scope                                 
logginMessage()//Pls enter a username
console.log(logginMessage("Hitesh"));// Hitesh just logged in

//if we want to avoid undefined case, then we can set a default value such as:
function logginstatus(username = "Someone"){
    return `${username} just logged in!`
}
console.log(logginstatus()); //Someone just logged in!
console.log(logginstatus("Sobhanjan")); //Sobhanjan just logged in!

function calculateCartPrice(...num){ //using rest operator
    return num 
}
console.log(calculateCartPrice(200,300,50)); //[ 200, 300, 50 ]

//Handling objects within function
const user = {
    name:"Sobhanjan",
    price: 349
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} & his course price is ${anyobject.price}`);    
}
handleObject(user)

//Handling arrays within function
myNewArray = [200,300,400,800]
function returnSecondValue(getArray) {
    return `The value is ${getArray[1]}`
}
console.log(returnSecondValue(myNewArray));