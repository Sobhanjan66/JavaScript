//Declaration by Constructor
//> singleton

//Declaration by Literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Sobhanjan",
    "fullName": "Sobhanjan Mahanta", // only square bracket method allowed
    [mySym] : "mykey1",
    age: 22,
    location: "Gangarampur",
    email: "sobhanjan@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Wednesday"]
}
JsUser.email2 = "sobhanjan@facebook.com" //can also assign object value out of parentheses
console.log(JsUser.email2); //sobhanjan@facebook.com
console.log(JsUser.email); //sobhanjan@google.com
console.log(JsUser["email"]); //sobhanjan@google.com
console.log(JsUser["fullName"]); //sobhanjan@google.com
console.log(JsUser[mySym]); // mykey1 (type: Symbol)

JsUser.email = "Sobhanjan@Amazon.com"
console.log(JsUser.email); //Sobhanjan@Amazon.com
//Object.freeze(JsUser) //freeze all the object values
JsUser.email = "Sobhanjan@microsoft.com"
console.log(JsUser.email); //Sobhanjan@Amazon.com

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Declaration by constructor
const tinderUser = new Object() //singleton object
tinderUser.user = "ABC123"
tinderUser.name = "Sobhanjan"
tinderUser.isLoggedIn = false
console.log(tinderUser); //{ user: 'ABC123', name: 'Sobhanjan', isLoggedIn: false }

const newCustomer = {
    email: "demo@random.com",
    fullName:{
        firstName: "Sobhanjan",
        lastName: "Mahanta"
    },
    phNum: 9876543210
}
console.log(newCustomer.fullName?.firstName); //Sobhanjan

//concatinating different object values
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// 1st method
const obj3 = Object.assign({},obj1,obj2)//{}is taken as target according to target-source method(Object.assign method) where sources(objects) are concatinated in a new source object({})
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// 2nd method
const obj4 = {...obj1,...obj2} //using spread operator
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//when data fetching grom database, we use array of objects:
const arr = [
    {
        name:"ABC",
        roll: 10
    },
    {
        name:"xyz",
        roll: 20
    },
    {
        name:"PQR",
        roll:30
    }
]
console.log(arr[2].roll); //30

console.log(tinderUser);//{ user: 'ABC123', name: 'Sobhanjan', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'user', 'name', 'isLoggedIn' ]
console.log(Object.entries(tinderUser)); //shows arrays of key-value pairs in array 
//   [
//     [ 'user', 'ABC123' ],
//     [ 'name', 'Sobhanjan' ],
//     [ 'isLoggedIn', false ]
//   ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

const  course = {
    coursename: "JavaScript Hindi",
    price: "999",
    courseInstructor: "Sobhanjan"
}
//course.courseInstructor

//Here we'll use tye concept of object destructuring:
const {courseInstructor:teacher,price} = course
console.log(teacher); 
console.log(price); 
