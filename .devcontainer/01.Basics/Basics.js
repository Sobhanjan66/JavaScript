console.log("Sobhanjan")
const accountId = 144553
let email = "Sobhanjan@gmail.com"
var password = "12345"
let age = 22
city = "Gangarampur"
let state;

// Can't assign & print different values under same const type variable

console.log();
console.table([accountId, email, password, age, city, state])
/*
Prefer not to use var 
because of issue in block scope & functional scope
*/

/* Documentation : MDN
Original Standards Documentation : ECMAScript */

/*****************Data types:*******************

   According to how values are stored in memory & accessed from memory

   1.Primitive Datatypes (call by value (fetches copy of value from memory & changes copied value only)):
   a) number => 2 to power about 53
   b) bigint => Extremely large value of number
   ex: const bigNumber = 79796757644368709675n // here atlast joining 'n' defines bigint
   c) string => ""
   d) boolean => true/false
   e) null => representation of empty space
   f) undefined => variable assigned but has not been defined with any value
   g) symbol => uniqueness
   ex: const id = Symbol('123')
   const anotherId = Symbol('123')
   console.log(id === anotherId) => false due to uniqueness despite of being same value & even same datatype

   2. Object/Non-Primitive/Reference type:
   a) arrays // const heros = ["IronMan","SpiderMan","Doctor Strange"]
   b) objects // let myObj = {
         name: "Sobhanjan",
         age: 22,     
                        }
   c) functions // const myFunction = function(){
      console.log("Sobhanjan Mahanta")
   }
   */

console.log(typeof "Sobhanjan")
console.log(typeof age);
console.log(typeof null); //object
console.log(typeof undefined); //undefined

//Datatype conversion

let score = "33abc"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // NaN( Not a Number) This is also a rare type of converted value where the value can't be converted & can't be used
//only null value can be converted into number as value = 0
// true can be converted into number as 1 & false can be converted as 0

let isLoggedIn0 = 1 //true
let isLoggedIn1 = 0 //false
let isLoggedIn2 = 4 //true
let isLoggedIn3 = "" //false
let isLoggedIn4 = "Sobhanjan" //true
let isLoggedIn5 = undefined //false
let isLoggedIn6 = null //false


let booleanLoggedIn0 = Boolean(isLoggedIn0)
let booleanLoggedIn1 = Boolean(isLoggedIn1)
let booleanLoggedIn2 = Boolean(isLoggedIn2)
let booleanLoggedIn3 = Boolean(isLoggedIn3)
let booleanLoggedIn4 = Boolean(isLoggedIn4)
let booleanLoggedIn5 = Boolean(isLoggedIn5)
let booleanLoggedIn6 = Boolean(isLoggedIn6)

console.table([booleanLoggedIn0,booleanLoggedIn1,booleanLoggedIn2,booleanLoggedIn3,booleanLoggedIn4,booleanLoggedIn5,booleanLoggedIn6])

let someNumber = 33
let stringNum = String(someNumber)
console.log(typeof stringNum)
console.log(stringNum)

//*********Operations**********

let value = 3
let negValue= -value
console.log(negValue);

console.table([2+2,2-2,2*2,2**3,2/2,2%2])

 let str1 = "Sobhanjan"
 let str2 = " Mahanta"
 console.log(str1+str2)
 console.log("1"+2+3)
 console.log(1+2+"3")
 console.log(1+"2"+3)

 console.log(null > 0) //False
 console.log(null == 0) //False
 console.log(null >= 0) //True
/*The reason is that an equality check == and comparisons > <
>= <= work differently.
Comparisons convert null to a number, treating it as O.
That's why null >= 0 is true and null > O is false. */

console.log("2" == 2); //true due to conversion
console.log("2" === 2); //false due to strict check operator checks value & datatype both.
