//+++++++++++++++++++++++++++++ String ++++++++++++++++++++++++++++

// Concatination using String interpolation
const name = "hitesh"
const repoCount = 50

console.log( `Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);
//Another way of string declaration (using object, new keyword )
const gameName = new String("Sobhanjan")
console.log(gameName[0]); //B

// Using some object Prototypes (Functions)
console.log (gameName.length); //9
console.log(gameName.toUpperCase()); //SOBHANJAN
console. log(gameName.charAt(2) ); //b
console. log(gameName.indexOf('b')); //2
const newString = gameName.substring(0, 4)
console.log(newString); //Sobh
const anotherString = gameName.slice(-9,-1)
console.log(anotherString) ; //Sobhanja

const newString1 = "    Sobhanjan     "
console.log(newString1); //    Sobhanjan     
console.log(newString1.trim()); //Sobhanjan

const url = "https://Sobhanjan.com/Sobhanjan%20Mahanta"
console.log(url.replace('%20' , '_')) //https://Sobhanjan.com/Sobhanjan_Mahanta
console.log(url.includes('Sobhanjan')); //True

 let random = "Sobhanjan-Mahanta-SM"
 console.log(random.split('-')); //[ 'Sobhanjan', 'Mahanta', 'SM' ]